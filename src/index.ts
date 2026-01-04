import { app } from "./app";
import { bot } from "./bot";

bot
  .launch()
  .then(() => console.log("BOT STARTED"))
  .catch((err) => console.log("Error", err));


// app.listen(3000)