import { ContentRequest } from "../../../domain/entities/contentRequest.model";
import { ContentRequestRepository } from "../../../domain/repositories/contentRequest.repo";

export class SubmitContentRequestUsecase{
    constructor(private readonly repo:ContentRequestRepository){}

    async execute(newRequest:ContentRequest){
        await this.repo.submitContentRequest(newRequest)
    }
}