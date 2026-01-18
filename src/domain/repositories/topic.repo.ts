import { Topic } from "../entities";

export interface TopicRepository {
    getAll(): Promise<Topic[] | undefined>;
    create(topic: Topic): Promise<void>;
    remove(id: number): Promise<void>;
}
