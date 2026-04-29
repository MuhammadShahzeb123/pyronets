'use client';

import { ReactNode } from 'react';

interface Section {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'dark';
  container?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Section({
  id,
  children,
  className = '',
  background = 'white',
  container = 'lg',
}: Section) {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-dark text-white',
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
      className={`${bgClasses[background]} py-16 md:py-24 ${className}`}
    >
      <div className={`${containerClasses[container]} mx-auto px-4 sm:px-6 lg:px-8`}>
        {children}
      </div>
    </section>
  );
}
