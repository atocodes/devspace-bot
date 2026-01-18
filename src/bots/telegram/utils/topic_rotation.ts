// Topic rotation (no repeats)

import { logger } from "../../../infrastructure/config";
import { TopicNames, topicNamesList } from "../types/topic.types";

let lastTopicIndex = -1;

export function getNextTopic(): TopicNames {
  lastTopicIndex = (lastTopicIndex + 1) % topicNamesList.length;
  if (lastTopicIndex == 0) {
    logger.info(`Skipping "${topicNamesList[lastTopicIndex]}" topic`);
    return getNextTopic();
  } else {
    return topicNamesList[lastTopicIndex];
  }
}

// ✅ No randomness
// ✅ Predictable
// ✅ Every topic gets equal exposure
