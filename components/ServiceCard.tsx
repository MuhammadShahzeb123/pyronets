'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features?: string[];
  cta?: {
    label: string;
    href: string;
  };
  index?: number;
}

export function ServiceCard({
  icon,
  title,
  description,
  features,
  cta,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative glass rounded-xl p-8 glass-hover transition-all duration-300"
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-br from-primary/50 via-transparent to-secondary/50">
          <div className="w-full h-full rounded-xl bg-card" />
        </div>
      </div>
      
      {/* Icon */}
      <motion.div 
        className="text-4xl mb-6 relative z-10"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        <span className="relative">
          {icon}
          <div className="absolute inset-0 blur-xl opacity-50 group-hover:opacity-80 transition-opacity">
            {icon}
          </div>
        </span>
      </motion.div>
      
      {/* Content */}
      <h3 className="text-xl font-bold text-foreground mb-3 relative z-10 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground mb-5 relative z-10 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="space-y-2.5 mb-6 relative z-10">
          {features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.05 }}
              className="flex items-start gap-3 text-sm text-muted-foreground"
            >
              <span className="mt-0.5 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      )}

      {/* CTA */}
      {cta && (
        <Link
          href={cta.href}
          className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors duration-300 relative z-10 group/link"
        >
          <span>{cta.label}</span>
          <motion.svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </motion.svg>
        </Link>
      )}
    </motion.div>
  );
}
