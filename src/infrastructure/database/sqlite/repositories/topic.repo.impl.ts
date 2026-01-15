import { DatabaseSync } from "node:sqlite";
import { Topic } from "../../../../domain/entities";
import { TopicRepository } from "../../../../domain/repositories/topic.repo";
import { sqliteDB } from "../..";

export class TopicRepositoryImpl implements TopicRepository {
  async getAll() {
    return sqliteDB.prepare("SELECT * FROM topics").all() as Topic[];
  }

  async add(topic: Topic) {
    const stmt = sqliteDB.prepare(`INSERT INTO topics (title, topicId) VALUES (?, ?)`);
    stmt.run(topic)
  }

  async remove(id: number) {
  }
}
