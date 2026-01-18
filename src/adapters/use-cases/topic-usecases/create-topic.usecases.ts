import { Topic } from "../../../domain/entities";
import { TopicRepository } from "../../../domain/repositories/topic.repo";

export class CreateTopicUsecase{
    constructor(private readonly topicRepo: TopicRepository){}
    async execute(newTopic:Topic){
        await this.topicRepo.create(newTopic)
    }
}