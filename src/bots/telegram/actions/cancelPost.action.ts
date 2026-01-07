import { Context } from "telegraf";
import { pendingPosts } from "../../../store/session.store";

export async function CANCEL_POST(ctx: Context) {
  const userId = ctx.from!.id;

  pendingPosts.delete(userId);

  await ctx.editMessageText("Cancelled ❌");
}