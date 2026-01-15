import { Context, Telegram } from "telegraf";
import { DevSpaceGroupId } from "../../../constants";
import { ALLOWED_CHAT_IDS } from "../../../infrastructure/config";

export const auth = async (
  ctx: Context,
  next: () => Promise<void>,
  telegram: Telegram
) => {
  try {
    if (!ctx.chat || !ctx.from) return;
    const userId = await ctx.from?.id;
    const chatId = await ctx.chat?.id;
    const groupAdmins = await telegram.getChatAdministrators(DevSpaceGroupId);
    const [adminUser] = groupAdmins.filter((admin) => admin.user.id == userId);
   
    if (
      (ctx.from && adminUser) ||
      (ctx.chat && ALLOWED_CHAT_IDS.includes(chatId))
    ) {
      await next();
    } else {
      ctx.reply("Sorry, you don’t have admin privileges in this chat.");
      return;
    }
  } catch (error) {}
};
