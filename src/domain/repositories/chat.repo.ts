export interface ChatRepository {
  getAllowedChats(): number[];
  removeChat(chatId: number): void;
  addAllowedChat(chatId: number): void;
}
