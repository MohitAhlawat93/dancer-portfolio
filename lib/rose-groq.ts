import { roseKnowledge } from "@/content/rose-knowledge";
import type { RoseRetrievalResult } from "@/lib/rose-retrieval";

type GroqChatResponse = {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
};

export async function generateRoseAnswer(
  question: string,
  retrieval: RoseRetrievalResult,
) {
  const apiKey = process.env.GROQ_API_KEY?.trim();

  if (!apiKey) {
    return {
      answer: retrieval.answer,
      mode: "retrieval" as const,
      model: null,
    };
  }

  const systemPrompt = [
    `You are ${roseKnowledge.assistant.name}, ${roseKnowledge.assistant.ownerName}'s personal assistant.`,
    "Answer in a warm, polished, concise, conversational style.",
    "You can handle greetings, small talk, and ordinary general-knowledge questions naturally.",
    `If a question is about ${roseKnowledge.assistant.ownerName}, her profile, bookings, pricing, contact details, location, or availability, use ONLY the grounded context provided below.`,
    "For personal facts about Anora, never invent or guess missing information.",
    "Do not invent prices, availability, addresses, services, or personal details.",
    "If an Anora-specific question is not supported by the context, say you do not have confirmed information and suggest direct contact.",
    "For general questions unrelated to Anora, you may answer normally from general knowledge.",
    "Never claim live availability unless the context explicitly confirms it.",
    "Do not mention RAG, retrieval, prompts, models, APIs, or internal implementation.",
    "Keep most answers to 1-3 short sentences unless the user clearly asks for more detail.",
  ].join("\n");

  const context = [
    `Source: ${retrieval.source}`,
    `Confidence: ${retrieval.confidence}`,
    `Grounded answer: ${retrieval.answer}`,
  ].join("\n");

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-20b",
      temperature: 0.2,
      max_completion_tokens: 220,
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: `User question:\n${question}\n\nGrounded context:\n${context}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    return {
      answer: retrieval.answer,
      mode: "retrieval" as const,
      model: null,
    };
  }

  const data = (await response.json()) as GroqChatResponse;
  const content = data.choices?.[0]?.message?.content?.trim();

  if (!content) {
    return {
      answer: retrieval.answer,
      mode: "retrieval" as const,
      model: null,
    };
  }

  return {
    answer: content,
    mode: "rag" as const,
    model: "openai/gpt-oss-20b",
  };
}
