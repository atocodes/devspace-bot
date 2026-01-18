export interface ContentRequest {
  telegramUserId: number;
  kind: "topic" | "question";
  content: string;
  status: "pending" | "approved" | "rejected";
  createdAt: Date;
}
