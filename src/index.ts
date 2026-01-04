import { app } from "./app";
import { PORT } from "./config/env";
import { logger } from "./config/logger";
import { bot } from "./services/bot";

const port = PORT ?? process.env.PORT;

bot
  .launch()
  .then(() => console.log("BOT STARTED"))
  .catch((err) => logger.error(`Telegram Bot Error : ${err}`));
app.listen(port, () => logger.info(`Server started on port ${port}`));
