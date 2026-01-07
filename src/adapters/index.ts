import { generateGeminiAnswer, generateGeminiContent } from "./chat/gemini_ai";
import { generateOllamaAnswer, generateOllamaContent } from "./chat/ollama_ai";

export const adapters = {
  generateGeminiAnswer,
  generateGeminiContent,
  generateOllamaAnswer,
  generateOllamaContent
};
