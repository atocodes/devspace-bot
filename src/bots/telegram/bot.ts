import { Telegraf, TelegramError, Markup, Context } from "telegraf";
import { schedule } from "node-cron";

import { retry } from "./utils/retry";
import { actions } from "./handlers/actions";
import { postTask } from "./tasks/post.task";
import { topicHearsHandler } from "./handlers/hears/topic.hears";
import { topicNamesList } from "./types";
import { auth, errorMiddleware } from "./middlewares";
import { BOTOKEN, logger, NODE_ENV } from "../../config";
import { startCommand } from "./handlers/command";

if (!BOTOKEN) throw new Error("BOTOKEN not set in .env");

export const bot = new Telegraf(BOTOKEN!);
bot.use(errorMiddleware);

bot.start(startCommand)

bot.use((ctx, next) => auth(ctx, next, bot.telegram));

if (NODE_ENV == "production")
  schedule("*/15 * * * *", async () => {
    try {
      retry(() => postTask({}), {
        retries: 3,
        delayMs: 15000,
      });
    } catch (error) {
      logger.fatal("Cron crashed: " + (error as Error).message);
    }
  });
else {
  logger.warn("Running on development mode");
  logger.warn("!!Schedule post wont be running");
}

bot.hears(/^topic:/i, topicHearsHandler);

Object.entries(actions).forEach(([key, handler]) => {
  bot.action(key, handler);
});
