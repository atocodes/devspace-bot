import { isPosting, lastPostedAt, updateIsPosting } from "./anti_span_guards";
import { retry } from "./retry.util";
import { getNextTopic } from "./topic_rotation";

function escapeMarkdownV2(text: string): string {
  return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, (match) => `\\${match}`);
}


export {
  isPosting,
  lastPostedAt,
  updateIsPosting,
  retry,
  getNextTopic,
  escapeMarkdownV2,
};
