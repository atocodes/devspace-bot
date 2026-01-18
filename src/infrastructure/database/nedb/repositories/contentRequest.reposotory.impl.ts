import { ContentRequest } from "../../../../domain/entities/contentRequest.model";
import { ContentRequestRepository } from "../../../../domain/repositories/contentRequest.repo";
import { contentRequestsDB } from "../nedb.connection";

export class ContentRequestRepositoryImpl implements ContentRequestRepository {
  submitContentRequest(request: ContentRequest): void {
    contentRequestsDB.insert(request);
  }

  async getRequestedContents(): Promise<ContentRequest[]> {
    const requests = await contentRequestsDB.findAsync({});
    return requests;
  }

  removeContentRequest(requestId: string): void {
    contentRequestsDB.remove({ _id: requestId });
  }
}
