'use client';

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  index?: number;
}

interface FAQProps {
  faqs: Omit<FAQItemProps, 'index'>[];
  title?: string;
}

export function FAQItem({ question, answer, isOpen: initialOpen, index = 0 }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(initialOpen ?? false);

  return (
    <div
      className="glass rounded-xl overflow-hidden animate-fade-in-up"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left p-6 font-semibold text-foreground hover:text-primary transition-colors duration-300"
      >
        <span className="pr-4">{question}</span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-200 ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        >
          <svg
            className="w-4 h-4 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6">
            <div className="pt-2 border-t border-border">
              <p className="mt-4 text-muted-foreground leading-relaxed">{answer}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQ({ faqs, title }: FAQProps) {
  return (
    <div className="space-y-4">
      {title && (
        <h2 className="text-2xl font-bold text-foreground mb-8 animate-fade-in-up">
          {title}
        </h2>
      )}
      {faqs.map((faq, idx) => (
        <FAQItem
          key={idx}
          question={faq.question}
          answer={faq.answer}
          isOpen={idx === 0}
          index={idx}
        />
      ))}
    </div>
  );
}
