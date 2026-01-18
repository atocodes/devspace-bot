import { ContentRequestRepository } from "../../../domain/repositories/contentRequest.repo";

export class GetRequestedContentsUsecase {
  constructor(private readonly repo: ContentRequestRepository) {}
   execute() {
    return this.repo.getRequestedContents();
  }
}
