import { Context } from "telegraf";
import { CallbackQuery, Update } from "telegraf/types";
import { AssistantBotContext } from "../../types";
import { findTopicUseCase, logger } from "../../../../infrastructure";


export const createTopicAction = async (
  ctx: Context<Update.CallbackQueryUpdate<CallbackQuery>> &
    Omit<AssistantBotContext, keyof Context<Update>> & {
      match: RegExpExecArray;
    },
) => {
  const topicStr = ctx.match[1];
  const topic = await findTopicUseCase.execute({ title: topicStr });
  if (topic == null) {
    logger.warn(
      { topic: topic },
      `Topic ${topicStr} Not found in database, this might cause unexpected errors`,
    );
  }
  ctx.session.__scenes = { topic };
  await ctx.answerCbQuery();
  await ctx.editMessageText(`Great! You chose "${topicStr.toUpperCase()}".`);
  ctx.scene.enter("promptScene");
};
