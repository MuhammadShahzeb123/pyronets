'use client';

import { ReactNode, useRef, useEffect, useState } from 'react';

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
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '-100px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const bgClasses = {
    default: 'bg-transparent',
    white: 'bg-transparent',
    light: 'bg-white/[0.03] backdrop-blur-sm',
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
      <div
        className={`${containerClasses[container]} mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-600 ease-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {children}
      </div>
    </section>
  );
}
