import { app } from "./app";
import { PORT } from "./config/env";
import { logger } from "./config/logger";
import { bot } from "./bots/telegram/bot";

const port = PORT ?? process.env.PORT;

bot
  .launch()
  .then(() => logger.info("BOT STARTED"))
  .catch((err) => logger.error(`Telegram Bot Error : ${err}`));
app.listen(port, () => logger.info(`Server started on port ${port}`));
