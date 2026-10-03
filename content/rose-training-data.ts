export type RoseQaEntry = {
  id: string;
  question: string;
  answer: string;
  category?: string;
  aliases?: string[];
};

export type RoseConversationExample = {
  id: string;
  messages: Array<{
    role: "user" | "assistant";
    content: string;
  }>;
};

/**
 * ADD YOUR REAL DATA HERE.
 *
 * You can paste 50-80 Q&A items into qa.
 * No keyword list is required.
 *
 * You can also paste example conversations into conversations.
 * The RAG layer automatically turns user -> assistant turns into searchable knowledge.
 */
export const roseTrainingData = {
  qa: [
    {
      id: "owner",
      category: "assistant",
      question: "Who is your boss?",
      answer: "Anora is the person I assist.",
      aliases: ["Who do you work for?", "Who is your owner?"],
    },
    {
      id: "night-bookings",
      category: "booking",
      question: "Does Anora do night bookings?",
      answer:
        "Night bookings can be discussed by prior arrangement. Final timing and availability should be confirmed directly with Anora.",
      aliases: [
        "Can I book at night?",
        "Does she accept late-night bookings?",
        "Are evening bookings possible?",
      ],
    },
  ] satisfies RoseQaEntry[],

  conversations: [
    {
      id: "sample-booking-conversation",
      messages: [
        {
          role: "user",
          content: "Can I book her in the evening?",
        },
        {
          role: "assistant",
          content:
            "Evening or night bookings can be discussed by prior arrangement. Final timing and availability should be confirmed directly with Anora.",
        },
      ],
    },
  ] satisfies RoseConversationExample[],
} as const;
