// Topic rotation (no repeats)

import { TopicNames, topicNamesList } from "../types/topic.types";

let lastTopicIndex = -1;

export function getNextTopic(): TopicNames {
  lastTopicIndex = (lastTopicIndex + 1) % topicNamesList.length;
  return topicNamesList[lastTopicIndex];
}

// ✅ No randomness
// ✅ Predictable
// ✅ Every topic gets equal exposure
