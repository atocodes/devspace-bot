import { TopicRepository } from "../../../domain/repositories/topic.repo";

export class GetTopicsUsecase {
  constructor(private readonly topicRepo: TopicRepository) {}
  async execute() {
    const res = await this.topicRepo.getAll();
    return res;
  }
}
