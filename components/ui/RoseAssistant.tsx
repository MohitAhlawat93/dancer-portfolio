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
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="h-5 w-5"
      fill="none"
    >
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
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
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
          history: messages.slice(-8).map((item) => ({
            role: item.role,
            content: item.content,
          })),
        }),
      });

      const data = (await response.json()) as {
        answer?: string;
        error?: string;
      };

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
    <div className="fixed bottom-[4.9rem] left-3 z-[70] sm:bottom-6 sm:left-6">
      {open ? (
        <section
          role="dialog"
          aria-modal="false"
          aria-labelledby="rose-title"
          className="rose-panel mb-3 flex h-[min(34rem,calc(100dvh-7rem))] w-[calc(100vw-1.5rem)] max-w-[24rem] flex-col overflow-hidden rounded-[1.6rem] border shadow-[0_30px_90px_rgba(0,0,0,.68)] backdrop-blur-2xl sm:mb-4 sm:w-[24rem]"
        >
          <div className="relative overflow-hidden border-b border-accent/20 px-5 pb-5 pt-5">
            <div className="pointer-events-none absolute -right-12 -top-14 h-40 w-40 rounded-full bg-teal/45 blur-3xl" />
            <div className="relative flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="rose-mark flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/45 bg-accent text-[#071016]">
                  <RoseMark />
                </div>
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <h2 id="rose-title" className="font-[family-name:var(--font-display)] text-[1.65rem] leading-none text-foreground">
                      {roseKnowledge.assistant.name}
                    </h2>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,.7)]" />
                  </div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted">
                    {roseKnowledge.assistant.ownerName}’s personal assistant
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={`Close ${roseKnowledge.assistant.name} assistant`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/20 text-lg text-muted-strong transition hover:border-accent/40 hover:bg-accent/10 hover:text-white"
              >
                ×
              </button>
            </div>
          </div>

          <div ref={scrollRef} className="no-scrollbar flex-1 overflow-y-auto px-4 py-5 sm:px-5">
            <div className="max-w-[90%] rounded-[1.25rem] rounded-tl-md border border-white/[.08] bg-white/[.055] px-4 py-3.5">
              <p className="mb-1 font-[family-name:var(--font-display)] text-[1.12rem] text-foreground">
                {roseKnowledge.assistant.greeting}
              </p>
              <p className="text-[12px] leading-5 text-muted">
                {roseKnowledge.assistant.intro}
              </p>
            </div>

            {messages.map((item) =>
              item.role === "user" ? (
                <div key={item.id} className="ml-auto mt-3 max-w-[86%] rounded-[1.25rem] rounded-tr-md bg-accent-soft px-4 py-3 text-[#071016]">
                  <p className="text-[12px] leading-5">{item.content}</p>
                </div>
              ) : (
                <div key={item.id} className="mt-3 max-w-[90%] rounded-[1.25rem] rounded-tl-md border border-teal-soft/25 bg-teal/35 px-4 py-3.5">
                  <p className="text-[12px] leading-5 text-muted-strong">{item.content}</p>
                </div>
              ),
            )}

            {loading ? (
              <div className="mt-3 max-w-[55%] rounded-[1.25rem] rounded-tl-md border border-white/[.08] bg-white/[.045] px-4 py-3.5">
                <p className="text-[12px] tracking-[0.18em] text-muted">•••</p>
              </div>
            ) : null}

            {messages.length === 0 ? (
              <>
                <p className="mb-2 mt-5 text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
                  Try a quick question
                </p>
                <div className="flex flex-wrap gap-2">
                  {roseKnowledge.quickQuestions.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => showQuickReply(item.label, item.answer)}
                      className="rounded-full border border-accent/20 bg-white/[.035] px-3.5 py-2 text-[10px] font-medium text-muted-strong transition hover:border-accent/45 hover:bg-accent/10 hover:text-white"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </>
            ) : null}

            <div className="mt-5 flex items-center gap-2 border-t border-white/[.07] pt-4">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <p className="text-[9px] leading-4 text-muted">
                Personal assistant · Conversation stays visible
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="border-t border-white/[.08] bg-black/10 p-3 sm:p-4">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.045] p-1.5 pl-4 transition focus-within:border-accent/45 focus-within:bg-white/[.06]">
              <input
                ref={inputRef}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={roseKnowledge.assistant.inputPlaceholder}
                aria-label={`Ask ${roseKnowledge.assistant.name}`}
                className="min-w-0 flex-1 bg-transparent text-[12px] text-white outline-none placeholder:text-[#7f8a90]"
              />
              <button
                type="submit"
                aria-label="Send message"
                disabled={loading}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-[#071016] transition hover:scale-[1.03] hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
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
        className="rose-launcher group inline-flex min-h-12 items-center gap-2.5 rounded-full border border-[#e8c9b6]/20 bg-[#160d14]/92 px-3.5 py-2.5 text-foreground shadow-[0_14px_45px_rgba(0,0,0,.55)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#e8c9b6]/35 hover:bg-[#1d111a] sm:min-h-14 sm:px-4"
      >
        <span className="rose-mark flex h-8 w-8 items-center justify-center rounded-full bg-[#071016] text-[#f5f1e8] ring-1 ring-inset ring-accent/35 sm:h-9 sm:w-9">
          <RoseMark />
        </span>
        <span className="pr-1 text-left">
          <span className="block font-[family-name:var(--font-display)] text-base leading-4">
            Ask {roseKnowledge.assistant.name}
          </span>
          <span className="mt-1 hidden text-[8px] font-semibold uppercase tracking-[0.16em] text-[#35514f] sm:block">
            {roseKnowledge.assistant.ownerName}’s assistant
          </span>
        </span>
      </button>
    </div>
  );
}
