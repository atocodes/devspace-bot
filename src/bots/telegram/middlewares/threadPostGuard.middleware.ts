import { Context, MiddlewareFn } from "telegraf";
import { publicTopicIds } from "../../../constants";
import { findTopicUseCase, getTopicsUseCase } from "../../../infrastructure";
import { isUserAdmin } from "../utils";
import { bot } from "../bot";

export const threadPostGuard: MiddlewareFn<Context> = async (
  ctx: Context,
  next: () => Promise<void>,
) => {
  try {
    const msg = ctx.message;
    const chat = ctx.chat;
    const sender = ctx.from;
    const threadId = msg?.message_thread_id;
    const isTopicGeneral = threadId == undefined;
    if (sender?.id == undefined) return;
    const isAdmin = await isUserAdmin(sender?.id!);

    if (
      ["message", "command"].includes(ctx.updateType) &&
      chat &&
      chat?.type == "supergroup" &&
      !publicTopicIds.includes(threadId) &&
      msg?.message_thread_id != undefined &&
      sender &&
      isTopicGeneral == false &&
      isAdmin == false
    ) {
      ctx.deleteMessage(msg.message_id);
      const username = sender.username
        ? `@${sender.username}`
        : sender.first_name;
      const messageText = "text" in msg ? msg.text : "";
      const escapedText = messageText
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      return await bot.telegram.sendMessage(
        sender.id,
        `Hello ${username}, your message was deleted. You can only post in the "General" topic.\n\nTo resend it, you can copy your message from here:\n<code>${escapedText}</code>`,
        {
          parse_mode: "HTML",
        },
      );
    }
  } catch (e) {
    console.log(e, "ERRRRRRRRRR");
    return;
  } finally {
    await next();
  }
};
