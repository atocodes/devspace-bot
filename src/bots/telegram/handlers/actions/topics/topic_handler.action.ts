import { Context } from "telegraf";

export async function TOPICHANDLER(ctx: Context) {
  await ctx.answerCbQuery();

  const callbackQuery = ctx.callbackQuery;

  if (callbackQuery && "data" in callbackQuery) {
    const data: string = callbackQuery.data;
    console.log("DATA: ", data);
    await ctx.reply(`You clicked: ${data}`) 
  }
}
