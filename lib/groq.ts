import { groq } from "@ai-sdk/groq";

// Initialize Groq provider
export const groqProvider = groq;

// Export common models for easy access
export const groqLlama3 = () => groqProvider("llama3-8b-8192");
export const groqLlama370b = () => groqProvider("llama3-70b-8192");
export const groqMixtral = () => groqProvider("mixtral-8x7b-32768");
