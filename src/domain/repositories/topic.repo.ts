import { Topic } from "../entities";

export interface TopicRepository {
    getAll(): Promise<Topic[]>;
    add(topic: Topic): Promise<void>;
    remove(id: number): Promise<void>;
  
}
