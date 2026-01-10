import { NewPostParams, PendingPost } from "../types/bot_types";

// export let pendingPosts = new Map<number, PendingPost>();

class SessionStore {
  private sessions = new Map<number, PendingPost>();

  get(id: number): PendingPost | undefined {
    return this.sessions.get(id);
  }

  set(id: number, content: PendingPost) {
    this.sessions.set(id, content);
  }

  delete(id: number) {
    this.sessions.delete(id);
  }
}

class PromptStore {
  private prompt = new Map<number, NewPostParams>();

  get(id: number): NewPostParams | undefined {
    return this.prompt.get(id);
  }

  set(id: number, prompt: NewPostParams) {
    this.prompt.set(id, prompt);
  }

  delete(id: number) {
    this.prompt.delete(id);
  }
}

export const pendingPosts: SessionStore = new SessionStore();
export const pendingPrompts: PromptStore = new PromptStore();
