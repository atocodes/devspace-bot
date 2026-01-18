import Datastore from "@seald-io/nedb";
import path from "node:path";
import { databaseDir } from "../../../constants";
import { ContentRequest } from "../../../domain/entities/contentRequest.model";
import { Topic } from "../../../domain/entities";

export const topicsDB = new Datastore<Topic>({
  filename: path.join(databaseDir, "topics.db"),
  autoload: true,
});

export const contentRequestsDB = new Datastore<ContentRequest>({
  filename: path.join(databaseDir, "contentRequest.db"),
  autoload: true,
});

