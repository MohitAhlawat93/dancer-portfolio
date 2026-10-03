import { NextResponse } from "next/server";
import { retrieveRoseAnswer } from "@/lib/rose-retrieval";

type RoseRequestBody = {
  message?: unknown;
};

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

  const result = retrieveRoseAnswer(message);

  return NextResponse.json({
    answer: result.answer,
    source: result.source,
    confidence: result.confidence,
    matchedId: result.matchedId ?? null,
    mode: "retrieval",
  });
}
