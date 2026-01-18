import { Topic } from "../../../../domain/entities";
import { TopicRepository } from "../../../../domain/repositories/topic.repo";
import { topicsDB } from "../nedb.connection";

export class TopicRepositoryImpl implements TopicRepository {
  async getAll(): Promise<Topic[] | undefined> {
    try {
      const topics = await topicsDB.getAllData();
      return topics;
    } catch (error) {
      throw error;
    }
  }

  async create(topic: Topic): Promise<void> {
    try {
      await topicsDB.insertAsync(topic);
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      topicsDB.remove({ _id: id });
    } catch (error) {
      throw error;
    }
  }
}
