import { DevSpaceGroupId } from "../../constants";
import { NODE_ENV } from "./env.config";

export const ALLOWED_CHAT_IDS = [
  DevSpaceGroupId,
  NODE_ENV == "development" ? -1002095436460 : NaN,
];
