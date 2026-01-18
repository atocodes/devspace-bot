import { TopicRepository } from "../../../domain/repositories/topic.repo";

export class RemoveTopicUsecase {
  constructor(private readonly topicRepo: TopicRepository) {}
  async execute(id: number) {
    await this.topicRepo.remove(id);
  }
}
