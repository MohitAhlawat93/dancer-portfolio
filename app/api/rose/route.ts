import { NextResponse } from "next/server";
import { retrieveRoseContext, type RoseHistoryMessage } from "@/lib/rose-retrieval";
import { generateRoseAnswer } from "@/lib/rose-groq";

type RoseRequestBody = {
  message?: unknown;
  history?: unknown;
};

function parseHistory(value: unknown): RoseHistoryMessage[] {
  if (!Array.isArray(value)) return [];

  return value
    .filter(
      (item): item is RoseHistoryMessage =>
        Boolean(
          item &&
            typeof item === "object" &&
            ("role" in item) &&
            ("content" in item) &&
            (item as { role?: unknown }).role !== undefined &&
            ((item as { role?: unknown }).role === "user" ||
              (item as { role?: unknown }).role === "assistant") &&
            typeof (item as { content?: unknown }).content === "string",
        ),
    )
    .map((item) => ({
      role: item.role,
      content: item.content.trim().slice(0, 500),
    }))
    .filter((item) => item.content.length > 0)
    .slice(-8);
}

export async function POST(request: Request) {
  let body: RoseRequestBody;

  try {
    body = (await request.json()) as RoseRequestBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (typeof body.message !== "string") {
    return NextResponse.json(
      { error: "A message is required." },
      { status: 400 },
    );
  }

  const message = body.message.trim();

  if (!message) {
    return NextResponse.json(
      { error: "Please enter a question." },
      { status: 400 },
    );
  }

  if (message.length > 500) {
    return NextResponse.json(
      { error: "Please keep your question under 500 characters." },
      { status: 400 },
    );
  }

  const history = parseHistory(body.history);
  const retrieval = retrieveRoseContext(message, history);
  const generated = await generateRoseAnswer(message, retrieval, history);

  return NextResponse.json({
    answer: generated.answer,
    confidence: retrieval.confidence,
    retrievedIds: retrieval.chunks.map((chunk) => chunk.id),
    mode: generated.mode,
    model: generated.model,
  });
}
