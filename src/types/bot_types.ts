import { TopicNames } from "../constants/topics";

export type PendingPost = {
  topic: TopicNames;
  message: string;
};
