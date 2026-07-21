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
    <div className="flex flex-col divide-y divide-terracota/30 border-t border-b border-terracota/30">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
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
            {isOpen ? (
              <p className="pb-6 leading-relaxed text-oliva-escuro">
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
