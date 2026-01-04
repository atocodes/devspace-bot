import { GoogleGenerativeAI } from "@google/generative-ai";
import { ENV } from "../config/env";

const ai = new GoogleGenerativeAI(ENV.GEMINI_TOKEN!);
export async function sendMsg(prompt: string): Promise<string | undefined> {
  const model = ai.getGenerativeModel(
    {
      model: "gemini-2.5-flash",
      systemInstruction:
        "You are a helpful telegram assistant.You must create a random tech posts or tips about coding and software development and also respond using ONLY Telegram-compatible HTML tags: <b>, <i>, <u>, <s>, <code>, <pre>, and <a href=''>. DO NOT use Markdown (no **, no #). If you include code, wrap it in <pre> tags.",
    }
  );
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}
