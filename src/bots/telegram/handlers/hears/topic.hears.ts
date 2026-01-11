import { Markup } from "telegraf";
import { generateOllamaContent } from "../../../../adapters";
import { parseTopicMessage } from "../../parsers/topicMessage.parser";
import { pendingPosts, pendingPrompts } from "../../state";
import { NewPostParams } from "../../types/bot_types";
import { retry } from "../../utils/retry.util";
import { logger } from "../../../../config";

export const topicHearsHandler = async (ctx: any) => {
  try {
    const text = ctx.message.text;

    const parts = parseTopicMessage(text);

    pendingPrompts.set(ctx.from.id, parts as NewPostParams);

    ctx.reply(`🧠 Generating content for *${parts.topic}*...`, {
      parse_mode: "Markdown",
    });

    const res = await retry(() => generateOllamaContent(parts), {
      retries: 3,
      delayMs: 1500,
    });


    pendingPosts.set(ctx.from.id, {
      message: res!,
      topic: parts.topic,
    });

    await ctx.reply(res as string, {
      parse_mode: "HTML",
      ...Markup.inlineKeyboard([
        [
          Markup.button.callback("Post", "POST_CONTENT"),
          Markup.button.callback("change", "CHANGE_POST"),
        ],
        [Markup.button.callback("Cancel", "CANCEL_POST")],
      ]),
    });
  } catch (error) {
    if (error instanceof Error) {
      const msg: string = `Failed to generate or send post\nMsg: ${error.message} Err: ${error.name}\nuser: ${ctx.from?.id},
        `;
      logger.error(msg);
      await ctx.reply(msg, {
        ...Markup.inlineKeyboard([
          [
            Markup.button.callback("Retry", "RETRY_PROMPT"),
            Markup.button.callback("Cancel", "CACNCLE_PROMPT"),
          ],
        ]),
      });

      return;
    }

    logger.error("unkown error");
    await ctx.reply("Unknown error");
  }
};
