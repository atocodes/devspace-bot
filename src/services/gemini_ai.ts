import {
  GoogleGenerativeAI,
  GoogleGenerativeAIFetchError,
} from "@google/generative-ai";
import { logger } from "../config/logger";
import { GEMINI_TOKEN } from "../config/env";

const ai = new GoogleGenerativeAI(GEMINI_TOKEN!);
export async function sendMsg(prompt: string): Promise<string | undefined> {
  try {
    const model = ai.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction:
        "You are a helpful telegram assistant.You must create a random tech posts or tips about coding and software development and also respond using ONLY Telegram-compatible HTML tags: <b>, <i>, <u>, <s>, <code>, <pre>, and <a href=''>. DO NOT use Markdown (no **, no #). If you include code, wrap it in <pre> tags.",
    });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    if (error instanceof GoogleGenerativeAIFetchError) {
      logger.error(`Gemini Error : ${error.message}`);
      return;
    }
    logger.error(`Gemini Unknown Error : ${error}`);
  }
}
