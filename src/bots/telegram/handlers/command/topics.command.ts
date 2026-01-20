import { Context } from "telegraf";
import { topicNamesList } from "../../types";

export async function GETOPICS(ctx: Context) {
  await ctx.reply(
    topicNamesList.map((topic) => `<b>-></b> <code>${topic}</code>\n`).join("\n"),
    {
        parse_mode:"HTML"
    }
  );
}
