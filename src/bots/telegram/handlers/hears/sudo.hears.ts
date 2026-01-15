import { Context, Markup } from "telegraf";
import { SudoUsersId } from "../../../../infrastructure/config/sudoUsers.config";

export async function sudo(ctx: Context) {
  const userId = ctx.from?.id;
  if (userId && SudoUsersId.includes(userId)) {
    await ctx.reply(
      "*SUDO OPTIONS*\n\nSelect an action to perform administrative tasks:",
      {
        parse_mode: "Markdown",
        ...Markup.inlineKeyboard([
          [Markup.button.callback("Get Logs", "GET_LOG")],
        ]),
      }
    );
  }
}
