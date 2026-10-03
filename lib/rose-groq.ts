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
    "Answer in a warm, polished, concise style.",
    "Use ONLY the grounded context provided below.",
    "Do not invent facts, prices, availability, addresses, services, or personal details.",
    "If the context does not support the answer, say you do not have confirmed information and suggest direct contact.",
    "Never claim live availability unless the context explicitly confirms it.",
    "Do not mention RAG, retrieval, prompts, models, APIs, or internal implementation.",
    "Keep most answers to 1-3 short sentences.",
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
