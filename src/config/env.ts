import * as dotenv from "dotenv";
dotenv.config();

export const ENV = {
  BOTOKEN: process.env.BOTOKEN,
  GEMINI_TOKEN: process.env.GEMINI_TOKEN,
  PORT:8000
};
