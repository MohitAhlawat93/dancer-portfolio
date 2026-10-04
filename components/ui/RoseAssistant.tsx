"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { roseKnowledge } from "@/content/rose-knowledge";

type ChatMessage = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

function RoseMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-5 w-5" fill="none">
      <path d="M16 27.5c.7-4.2.15-8.2-1.55-11.25" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <path d="M15.2 21.4c-2.85.15-5.05-1-6.5-3.2 2.8-.55 5.05.3 6.75 2.25" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 14.7c-2.55.05-5.8-1.65-6.15-4.55-.3-2.45 1.55-4.6 4.2-4.85.7-2.25 2.75-3.7 5.1-3.25 2.3.45 3.7 2.45 3.35 4.7 2.3.85 3.55 3.25 2.65 5.5-.95 2.35-3.6 3.35-6.05 2.45-.85 1.2-1.8 1.8-3.1 1.8s-2.3-.6-3.1-1.8" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.2 7.9c1.35-1.25 3.7-1.35 5.2-.15 1.7 1.35 1.75 3.85.1 5.25-1.45 1.25-3.75 1.15-5.1-.2-1.3-1.3-1.4-3.65-.2-4.9Z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
    </svg>
  );
}

export function RoseAssistant() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const nextIdRef = useRef(1);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 180);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  const addMessage = (role: ChatMessage["role"], content: string) => {
    const id = nextIdRef.current++;
    setMessages((current) => [...current, { id, role, content }]);
  };

  const showQuickReply = (label: string, answer: string) => {
    addMessage("user", label);
    addMessage("assistant", answer);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const question = message.trim();
    if (!question || loading) return;

    addMessage("user", question);
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/rose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: question,
          history: messages.slice(-8).map((item) => ({ role: item.role, content: item.content })),
        }),
      });

      const data = (await response.json()) as { answer?: string; error?: string };

      if (!response.ok) {
        addMessage("assistant", data.error ?? "I couldn’t answer that just now. Please try again.");
        return;
      }

      addMessage("assistant", data.answer ?? roseKnowledge.boundaries.unknownAnswer);
    } catch {
      addMessage("assistant", "I couldn’t reach my knowledge service just now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-[4.6rem] left-3 z-[70] sm:bottom-5 sm:left-5">
      {open ? (
        <section
          role="dialog"
          aria-modal="false"
          aria-labelledby="rose-title"
          className="mb-3 flex h-[min(34rem,calc(100dvh-7rem))] w-[calc(100vw-1.5rem)] max-w-[23rem] flex-col overflow-hidden rounded-[1.35rem] border border-[#1f2926]/12 bg-[#fffdf9] text-[#1b211f] shadow-[0_26px_70px_rgba(43,35,26,.20)] sm:w-[23rem]"
        >
          <div className="border-b border-[#1f2926]/10 bg-[#f3ede4] px-5 py-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6f4442] text-white">
                  <RoseMark />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 id="rose-title" className="font-[family-name:var(--font-display)] text-[1.55rem] leading-none text-[#123338]">
                      {roseKnowledge.assistant.name}
                    </h2>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2f8b69]" />
                  </div>
                  <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#777d79]">
                    {roseKnowledge.assistant.ownerName}’s personal assistant
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={"Close " + roseKnowledge.assistant.name + " assistant"}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1f2926]/10 text-lg text-[#6f7572] transition hover:bg-white"
              >
                ×
              </button>
            </div>
          </div>

          <div ref={scrollRef} className="no-scrollbar flex-1 overflow-y-auto px-4 py-4 sm:px-5">
            <div className="max-w-[90%] rounded-[1.1rem] rounded-tl-md bg-[#f3ede4] px-4 py-3.5">
              <p className="mb-1 font-[family-name:var(--font-display)] text-[1.08rem] text-[#123338]">
                {roseKnowledge.assistant.greeting}
              </p>
              <p className="text-[12px] leading-5 text-[#707773]">{roseKnowledge.assistant.intro}</p>
            </div>

            {messages.map((item) =>
              item.role === "user" ? (
                <div key={item.id} className="ml-auto mt-3 max-w-[86%] rounded-[1.1rem] rounded-tr-md bg-[#123338] px-4 py-3 text-white">
                  <p className="text-[12px] leading-5">{item.content}</p>
                </div>
              ) : (
                <div key={item.id} className="mt-3 max-w-[90%] rounded-[1.1rem] rounded-tl-md bg-[#f3ede4] px-4 py-3.5">
                  <p className="text-[12px] leading-5 text-[#59615e]">{item.content}</p>
                </div>
              ),
            )}

            {loading ? (
              <div className="mt-3 max-w-[55%] rounded-[1.1rem] rounded-tl-md bg-[#f3ede4] px-4 py-3.5">
                <p className="text-[12px] tracking-[0.18em] text-[#777d79]">•••</p>
              </div>
            ) : null}

            {messages.length === 0 ? (
              <>
                <p className="mb-2 mt-5 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#777d79]">
                  Try a quick question
                </p>
                <div className="flex flex-wrap gap-2">
                  {roseKnowledge.quickQuestions.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => showQuickReply(item.label, item.answer)}
                      className="rounded-full border border-[#1f2926]/12 bg-white px-3.5 py-2 text-[10px] font-medium text-[#59615e] transition hover:border-[#9a6a3a]/50 hover:text-[#123338]"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </>
            ) : null}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-[#1f2926]/10 bg-[#fbf8f2] p-3">
            <div className="flex items-center gap-2 rounded-full border border-[#1f2926]/12 bg-white p-1.5 pl-4">
              <input
                ref={inputRef}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={roseKnowledge.assistant.inputPlaceholder}
                aria-label={"Ask " + roseKnowledge.assistant.name}
                className="min-w-0 flex-1 bg-transparent text-[12px] text-[#1b211f] outline-none placeholder:text-[#8a8f8b]"
              />
              <button
                type="submit"
                aria-label="Send message"
                disabled={loading}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#6f4442] text-white transition hover:bg-[#5e3937] disabled:opacity-50"
              >
                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                  <path d="m5 10 9-5-3 10-1.8-3.2L5 10Z" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </form>
        </section>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="rose-title"
        className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-[#6f4442] bg-[#6f4442] px-3 py-2 text-white shadow-[0_12px_30px_rgba(74,42,41,.22)] transition hover:-translate-y-0.5 hover:bg-[#5e3937] sm:min-h-12 sm:px-3.5"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/12 ring-1 ring-inset ring-white/20">
          <RoseMark />
        </span>
        <span className="pr-1 font-[family-name:var(--font-display)] text-sm leading-none sm:text-base">
          Ask {roseKnowledge.assistant.name}
        </span>
      </button>
    </div>
  );
}
