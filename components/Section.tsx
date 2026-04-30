'use client';

import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Section {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: 'default' | 'light' | 'dark' | 'white';
  container?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Section({
  id,
  children,
  className = '',
  background = 'default',
  container = 'lg',
}: Section) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const bgClasses = {
    default: 'bg-transparent',
    white: 'bg-transparent',
    light: 'glass',
    dark: 'bg-card/50 backdrop-blur-sm',
  };

  const containerClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-7xl',
    xl: 'max-w-7xl',
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`${bgClasses[background]} py-16 md:py-24 relative ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`${containerClasses[container]} mx-auto px-4 sm:px-6 lg:px-8`}
      >
        {children}
      </motion.div>
    </section>
  );
}
