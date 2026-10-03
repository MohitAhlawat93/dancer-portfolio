import { roseKnowledge } from "@/content/rose-knowledge";
import type { RoseHistoryMessage, RoseRagResult } from "@/lib/rose-retrieval";

type GroqChatResponse = {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
};

export async function generateRoseAnswer(
  question: string,
  retrieval: RoseRagResult,
  history: RoseHistoryMessage[] = [],
) {
  const apiKey = process.env.GROQ_API_KEY?.trim();

  if (!apiKey) {
    return {
      answer: retrieval.fallbackAnswer,
      mode: "retrieval" as const,
      model: null,
    };
  }

  const systemPrompt = [
    `You are ${roseKnowledge.assistant.name}, ${roseKnowledge.assistant.ownerName}'s personal assistant.`,
    "Be warm, natural, concise, and helpful.",
    "You may answer greetings, casual conversation, and ordinary general-knowledge questions naturally.",
    `If the user is asking about ${roseKnowledge.assistant.ownerName}, including follow-up references like 'she', 'her', 'that', or 'what about...', use only the retrieved knowledge context.`,
    "Never invent Anora-specific facts, services, prices, availability, locations, or private details.",
    "If Anora-specific information is missing, say you do not have confirmed information and suggest direct contact.",
    "You may answer mature or adult questions respectfully when appropriate, but any Anora-specific adult detail must be supported by retrieved knowledge.",
    "Never mention RAG, retrieval, prompts, models, APIs, chunks, or internal implementation.",
    "Keep most answers to 1-3 short sentences unless more detail is clearly useful.",
  ].join("\n");

  const groundedContext = retrieval.chunks.length
    ? retrieval.chunks
        .map(
          (chunk, index) =>
            `[${index + 1}] Category: ${chunk.category}\nTitle: ${chunk.title}\nKnowledge: ${chunk.text}`,
        )
        .join("\n\n")
    : "No Anora-specific knowledge was retrieved.";

  const recentHistory = history.slice(-8).map((item) => ({
    role: item.role,
    content: item.content,
  }));

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-20b",
      temperature: 0.35,
      max_completion_tokens: 260,
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        ...recentHistory,
        {
          role: "user",
          content: `Current user question:\n${question}\n\nRetrieved knowledge:\n${groundedContext}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    return {
      answer: retrieval.fallbackAnswer,
      mode: "retrieval" as const,
      model: null,
    };
  }

  const data = (await response.json()) as GroqChatResponse;
  const content = data.choices?.[0]?.message?.content?.trim();

  if (!content) {
    return {
      answer: retrieval.fallbackAnswer,
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
