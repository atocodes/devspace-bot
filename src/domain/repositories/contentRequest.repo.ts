import { ContentRequest } from "../entities/contentRequest.model";

export interface ContentRequestRepository {
  submitContentRequest(request: ContentRequest): void;
  getRequestedContents(): Promise<ContentRequest[]>;
  removeContentRequest(requestId: string): void;
}
