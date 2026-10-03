import { roseKnowledge } from "@/content/rose-knowledge";

export type RoseRetrievalResult = {
  answer: string;
  source: "faq" | "pricing" | "profile" | "contact" | "booking" | "boundary";
  confidence: number;
  matchedId?: string;
};

const STOP_WORDS = new Set([
  "a","an","and","are","as","at","be","can","do","for","from","how","i","in","is","it","me","of","on","or","the","to","what","when","where","who","with","you",
]);

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9₹\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(text: string) {
  return normalize(text)
    .split(" ")
    .filter(Boolean)
    .filter((token) => !STOP_WORDS.has(token));
}

function includesAny(haystack: string, needles: string[]) {
  return needles.some((needle) => haystack.includes(normalize(needle)));
}

function scoreFaq(question: string, faq: (typeof roseKnowledge.faq)[number]) {
  const normalizedQuestion = normalize(question);
  const questionTokens = new Set(tokens(question));
  let score = 0;

  for (const keyword of faq.keywords) {
    const normalizedKeyword = normalize(keyword);

    if (normalizedQuestion.includes(normalizedKeyword)) {
      score += normalizedKeyword.includes(" ") ? 4 : 3;
    } else if (questionTokens.has(normalizedKeyword)) {
      score += 2;
    }
  }

  for (const faqToken of tokens(faq.question)) {
    if (questionTokens.has(faqToken)) score += 1;
  }

  return score;
}

function retrievePricing(question: string): RoseRetrievalResult | null {
  const q = normalize(question);
  const pricingIntent = [
    "price","pricing","rate","rates","cost","costs","fee","fees","charge","charges","how much","package","packages"
  ];

  if (!includesAny(q, pricingIntent)) return null;

  const matchedPackage = roseKnowledge.pricing.find((item) => {
    const title = normalize(item.title);
    const titleTokens = tokens(item.title);
    return q.includes(title) || titleTokens.filter((t) => t.length > 3).some((t) => q.includes(t));
  });

  if (matchedPackage) {
    return {
      answer: `${matchedPackage.title} is currently listed at ${matchedPackage.price} ${matchedPackage.unit}. ${matchedPackage.description}`,
      source: "pricing",
      confidence: 0.98,
      matchedId: matchedPackage.id,
    };
  }

  const summary = roseKnowledge.pricing
    .map((item) => `${item.title}: ${item.price} ${item.unit}`)
    .join("; ");

  return {
    answer: `Here are the current booking prices: ${summary}.`,
    source: "pricing",
    confidence: 0.94,
  };
}

function retrieveProfile(question: string): RoseRetrievalResult | null {
  const q = normalize(question);
  const p = roseKnowledge.profile;

  if (includesAny(q, ["age", "how old"])) {
    return { answer: `${p.name} is listed as ${p.age} years old.`, source: "profile", confidence: 0.98 };
  }

  if (includesAny(q, ["height", "tall"])) {
    return { answer: `${p.name}'s listed height is ${p.height}.`, source: "profile", confidence: 0.98 };
  }

  if (includesAny(q, ["language", "languages", "speak"])) {
    return { answer: `The current profile lists: ${p.languages.join(", ")}.`, source: "profile", confidence: 0.97 };
  }

  if (includesAny(q, ["nationality", "national"])) {
    return { answer: `${p.name}'s listed nationality is ${p.nationality}.`, source: "profile", confidence: 0.97 };
  }

  if (includesAny(q, ["hair"])) {
    return { answer: `${p.name}'s listed hair colour is ${p.hair}.`, source: "profile", confidence: 0.96 };
  }

  if (includesAny(q, ["where", "location", "city", "based", "bangalore"])) {
    return { answer: `${p.name} is currently based in ${p.city}, ${p.country}.`, source: "profile", confidence: 0.98 };
  }

  if (includesAny(q, ["profile", "about", "tell me about", "who is"])) {
    return { answer: p.shortBio, source: "profile", confidence: 0.86 };
  }

  return null;
}

function retrieveContact(question: string): RoseRetrievalResult | null {
  const q = normalize(question);

  if (!includesAny(q, ["contact", "message", "whatsapp", "telegram", "reach", "talk", "get in touch"])) {
    return null;
  }

  return {
    answer: roseKnowledge.contact.preferredMessage,
    source: "contact",
    confidence: 0.98,
  };
}

function retrieveBooking(question: string): RoseRetrievalResult | null {
  const q = normalize(question);

  if (includesAny(q, ["available today", "available tonight", "availability", "tonight", "today", "tomorrow"])) {
    return {
      answer: roseKnowledge.boundaries.liveAvailability,
      source: "boundary",
      confidence: 0.99,
    };
  }

  if (includesAny(q, ["book", "booking", "reserve", "appointment", "advance", "same day"])) {
    const notes = roseKnowledge.booking.notes.join(" ");
    return {
      answer: `Booking in advance is recommended. ${notes}`,
      source: "booking",
      confidence: 0.91,
    };
  }

  return null;
}

export function retrieveRoseAnswer(question: string): RoseRetrievalResult {
  const cleanQuestion = question.trim();

  if (!cleanQuestion) {
    return {
      answer: roseKnowledge.boundaries.unknownAnswer,
      source: "boundary",
      confidence: 0,
    };
  }

  const directRetrievers = [
    retrievePricing,
    retrieveContact,
    retrieveBooking,
    retrieveProfile,
  ];

  for (const retriever of directRetrievers) {
    const result = retriever(cleanQuestion);
    if (result) return result;
  }

  const faqScores = roseKnowledge.faq
    .map((faq) => ({ faq, score: scoreFaq(cleanQuestion, faq) }))
    .sort((a, b) => b.score - a.score);

  const best = faqScores[0];

  if (best && best.score >= 3) {
    return {
      answer: best.faq.answer,
      source: "faq",
      confidence: Math.min(0.95, 0.55 + best.score * 0.06),
      matchedId: best.faq.id,
    };
  }

  return {
    answer: roseKnowledge.boundaries.unknownAnswer,
    source: "boundary",
    confidence: 0.15,
  };
}
