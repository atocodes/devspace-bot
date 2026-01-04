import * as dotenv from "dotenv";
dotenv.config();

export const BOTOKEN = process.env.BOTOKEN!;
export const GEMINI_TOKEN = process.env.GEMINI_TOKEN;
export const PORT = Number(process.env.PORT) || 3000;
export const OLLAMA_API_KEY = process.env.OLLAMA_TOKEN;