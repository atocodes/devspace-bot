import path from "path";
import { DevSpaceGroupId } from "./group.constants";
import { MIN_INTERVAL } from "./post.constants";
const logDir = path.join(process.cwd(), "logs");
const logFilePath = path.join(logDir, "app.log")

export {MIN_INTERVAL,DevSpaceGroupId,logDir,logFilePath}