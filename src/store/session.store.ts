import { PendingPost } from "../types/bot_types";

// export let pendingPosts = new Map<number, PendingPost>();

class SessionStore {
  private sessions = new Map<number, PendingPost>();

  get(id: number) {
    return this.sessions.get(id);
  }

  set(id: number, content: PendingPost) {
    this.sessions.set(id, content);
  }

  delete(id: number) {
    this.sessions.delete(id);
  }
}

export const pendingPosts = new SessionStore();
