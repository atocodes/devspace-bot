import { ContentRequestRepository } from "../../../domain/repositories/contentRequest.repo";

export class RemoveContentRequestUsecase {
  constructor(private readonly repo: ContentRequestRepository) {}
  execute(contentId: string) {
    this.repo.removeContentRequest(contentId);
  }
}
