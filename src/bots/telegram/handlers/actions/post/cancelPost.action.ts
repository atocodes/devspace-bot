import { Context } from "telegraf";
import { pendingPosts } from "../../../state/pendingPosts.store";

export async function CANCEL_POST(ctx: Context) {
  const userId = ctx.from!.id;

  pendingPosts.delete(userId);

  await ctx.editMessageText("Cancelled ❌");
}