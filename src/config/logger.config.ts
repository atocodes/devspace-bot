import pino from "pino";
import fs from "fs";
import path from "path";

const logDir = path.join(process.cwd(), "logs");

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}
const fileStream = fs.createWriteStream(path.join(logDir, "app.log"), {
  flags: "a",
});

export const logger = pino(
  {
    level: "info",
    timestamp: pino.stdTimeFunctions.isoTime,
  },
  pino.multistream([
    {
      stream: pino.transport({
        target: "pino-pretty",
        options: { colorize: true },
      }),
    },
    { stream: fileStream },
  ])
);
