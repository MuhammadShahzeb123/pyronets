'use client';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
}

interface FAQProps {
  faqs: FAQItemProps[];
  title?: string;
}

import { useState } from 'react';

export function FAQItem({ question, answer, isOpen: initialOpen }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(initialOpen ?? false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-semibold text-dark hover:text-primary transition-colors"
      >
        {question}
        <span className="text-secondary text-2xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <p className="mt-4 text-gray-600 text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export function FAQ({ faqs, title }: FAQProps) {
  return (
    <div className="space-y-4">
      {title && <h2 className="text-2xl font-bold text-dark mb-6">{title}</h2>}
      {faqs.map((faq, idx) => (
        <FAQItem
          key={idx}
          question={faq.question}
          answer={faq.answer}
          isOpen={idx === 0}
        />
      ))}
    </div>
  );
}
