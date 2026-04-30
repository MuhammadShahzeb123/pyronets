'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="glass rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left p-6 font-semibold text-foreground hover:text-primary transition-colors duration-300"
      >
        <span className="pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"
        >
          <svg
            className="w-4 h-4 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6">
              <div className="pt-2 border-t border-border">
                <p className="mt-4 text-muted-foreground leading-relaxed">{answer}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ({ faqs, title }: FAQProps) {
  return (
    <div className="space-y-4">
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-foreground mb-8"
        >
          {title}
        </motion.h2>
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
