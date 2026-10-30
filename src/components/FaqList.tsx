"use client";

import { useMemo, useState } from "react";
import { FAQ_ITEMS, type FaqCategory } from "@/lib/site";

const CATEGORIES: FaqCategory[] = [
  "Getting Started",
  "Schedule & Grades",
  "Method",
  "Tuition",
];

export function FaqList({ limit }: { limit?: number }) {
  const [query, setQuery] = useState("");
  const [openKey, setOpenKey] = useState<string | null>(FAQ_ITEMS[0]?.question ?? null);

  const items = useMemo(() => {
    const base = limit ? FAQ_ITEMS.slice(0, limit) : FAQ_ITEMS;
    const q = query.trim().toLowerCase();
    if (!q) return base;
    return base.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.shortAnswer.toLowerCase().includes(q) ||
        item.detailedAnswer.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [limit, query]);

  const grouped = useMemo(() => {
    return CATEGORIES.map((category) => ({
      category,
      items: items.filter((item) => item.category === category),
    })).filter((group) => group.items.length > 0);
  }, [items]);

  return (
    <div className="space-y-8 max-w-3xl">
      <label className="block">
        <span className="sr-only">Search parent FAQ</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search questions (level test, hours, tuition…)"
          className="w-full min-h-[44px] rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
        />
      </label>

      {grouped.length === 0 ? (
        <p className="text-sm text-slate-600" role="status">
          No questions matched “{query}”. Try another word, or call us and we’ll help.
        </p>
      ) : null}

      {grouped.map((group) => (
        <section key={group.category} aria-labelledby={`faq-${group.category}`}>
          <h2
            id={`faq-${group.category}`}
            className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700 mb-3"
          >
            {group.category}
          </h2>
          <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl bg-white overflow-hidden">
            {group.items.map((item) => {
              const isOpen = openKey === item.question;
              return (
                <div key={item.question}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenKey(isOpen ? null : item.question)
                      }
                      className="w-full text-left px-5 py-4 min-h-[44px] flex items-start justify-between gap-4 hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-semibold text-slate-900 text-sm sm:text-base">
                        {item.question}
                      </span>
                      <span
                        className="text-amber-700 font-bold text-lg leading-none shrink-0"
                        aria-hidden="true"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  {isOpen ? (
                    <div className="px-5 pb-5 space-y-3 text-sm text-slate-600 leading-relaxed">
                      <p className="text-slate-900 font-medium">{item.shortAnswer}</p>
                      <p>{item.detailedAnswer}</p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
