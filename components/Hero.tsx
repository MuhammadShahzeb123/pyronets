'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
  };
  children?: ReactNode;
}

export function Hero({
  title,
  subtitle,
  description,
  cta,
  children,
}: HeroProps) {
  return (
    <div className="bg-gradient-to-br from-dark to-primary/10 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                {' '}
                {subtitle}
              </span>
            </h1>
          </div>

          {description && (
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              {description}
            </p>
          )}

          {cta && (
            <div className="pt-4">
              <Link
                href={cta.href}
                className="inline-block px-8 py-3 bg-gradient-to-r from-secondary to-primary text-dark font-bold rounded-lg hover:shadow-lg transition-all"
              >
                {cta.label}
              </Link>
            </div>
          )}

          {children}
        </div>
      </div>
    </div>
  );
}
