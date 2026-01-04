import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import { sendMsg } from "./services/gemini_ai";
import { schedule } from "node-cron";
import { ENV } from "./config/env";
const token = ENV.BOTOKEN;
if (!token) throw new Error("BOTOKEN not set in .env");

export const bot = new Telegraf(token!);

schedule("* * * * *", async () => {
  const chatId = "6890903813";
  try {
    console.log("Sending message")
    const msg = await sendMsg("give me one random fun fact");
    await bot.telegram.sendMessage(chatId, msg as string, {
      parse_mode: "HTML",
    });
    console.log("Scheduled message sent.");
  } catch (error) {
    await bot.telegram.sendMessage(chatId, `${error}`);
    console.log(error);
  }
});

bot.on(message("text"), async (ctx) => {
  try {
    const chat = await ctx.getChat();
    const msg = await sendMsg(ctx.message.text);
    await ctx.reply(msg as string, {
      parse_mode: "HTML",
    });
  } catch (error) {
    await ctx.telegram.sendMessage(ctx.chat.id, `${error}`);
  }
});
