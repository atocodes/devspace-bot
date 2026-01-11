import { Context } from "telegraf";
import { getAdminsId } from "../../middlewares";

export async function startCommand(ctx: Context) {
  const user = ctx.from!;
  const admins = await getAdminsId();
  const isUserAdmin = admins.includes(user.id);

  const userName = `${user.first_name}${user.last_name ? " " + user.last_name : ""}`;
  const atodevspaceLink = `<a href="https://t.me/atodevspace"><b>@atodevspace</b></a>`;

  const adminResponse = `<b>Hello ${userName}! 😎 I’m ወይዘሮ Codes (aka Hasu Codes)</b>
<i>Your official ${atodevspaceLink} Supergroup Content Manager 🤖✨</i>

As a <b>supergroup admin</b>, you have special powers! 🛠️  
You can create posts for specific topics using this format:

<code>topic: &lt;topic&gt; | prompt: &lt;custom prompt&gt;</code>

💡 Coming soon: I’ll also take topic requests from members and turn them into content automatically.

Sit back, enjoy the magic 💥, and let’s make DevSpace content shine!`;

  const userResponse = `<b>Hello ${userName}! 😎 I’m ወይዘሮ Codes (aka Hasu Codes)</b>
<i>Your official ${atodevspaceLink} Supergroup Content Manager 🤖✨</i>

Just so you know: I work <b>exclusively in this supergroup</b> to create posts, spark discussions, and manage content.  

💡 Coming soon: I’ll be able to take topic suggestions from members and turn them into posts for the group.

Until then, sit back, enjoy the posts, and watch me do my <b>multi-AI magic 💥</b>`;

  await ctx.reply(isUserAdmin ? adminResponse : userResponse, {
    parse_mode: "HTML",
  });
}
