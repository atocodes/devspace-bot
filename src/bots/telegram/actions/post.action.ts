import { Context, Markup, TelegramError } from "telegraf";
import { postTask } from "../bot";
import { generateOllamaContent } from "../../../adapters/chat/ollama_ai";
import { pendingPosts } from "../../../store/session.store";
import { logger } from "../../../config/logger";

export async function POST_CONTENT(ctx: Context) {
  try {
    const userId = ctx.from!.id;
    const pending = pendingPosts.get(userId);

    if (!pending) {
      await ctx.answerCbQuery("No post to send.");
      return;
    }

    await postTask(pending.message, pending.topic);

    pendingPosts.delete(userId);

    await ctx.editMessageText("Posted successfully!!");
  } catch (error) {
    if (error instanceof TelegramError) {
      await ctx.editMessageText(
        `Failed to post. Please try again using the /createPost command.`
      );
    }
    logger.error(error);
    return;
  }
}
