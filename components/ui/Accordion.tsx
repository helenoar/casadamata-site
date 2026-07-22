"use client";

// Accordion simples (client component, useState, sem dependência externa),
// usado em /faq para os pares pergunta/resposta de content/data/faq.ts.

import { useState } from "react";

export type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-6">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="backdrop-blur-sm bg-off-2/40 border border-terracota/20 rounded-lg p-6">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 text-left"
            >
              <span className="text-lg font-medium text-oliva-escuro">
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className="shrink-0 text-xl text-terracota"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="leading-relaxed text-oliva-escuro">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
