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

function DataParticles() {
  // Reduced from 20 to 8 particles for better performance
  const particles = [
    { x: 15, y: 20, delay: 0 },
    { x: 85, y: 15, delay: 0.5 },
    { x: 45, y: 80, delay: 1 },
    { x: 70, y: 45, delay: 1.5 },
    { x: 25, y: 60, delay: 2 },
    { x: 90, y: 70, delay: 0.3 },
    { x: 10, y: 85, delay: 1.2 },
    { x: 55, y: 25, delay: 0.8 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full particle"
          style={{ 
            left: `${particle.x}%`, 
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  );
}

// Static code lines visual - no JS animation
function ScrapingVisual() {
  const codeLines = [
    '{ "data": "extracting..." }',
    '<html> parsing content </html>',
    'API response: 200 OK',
    'Records: 10,000+ fetched',
    'Quality: 99.8% verified',
  ];

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block w-96 opacity-30">
      <div className="glass rounded-xl p-4 font-mono text-xs space-y-2">
        {codeLines.map((line, index) => (
          <div
            key={index}
            className="flex items-center gap-2 animate-fade-in-up"
            style={{ animationDelay: `${0.8 + index * 0.2}s` }}
          >
            <span className="w-2 h-2 rounded-full bg-secondary pulse-glow" />
            <span className="text-muted-foreground">{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero({
  title,
  subtitle,
  description,
  cta,
  children,
}: HeroProps) {
  return (
    <div className="relative min-h-[85vh] flex items-center py-16 md:py-24 overflow-hidden">
      <DataParticles />
      <ScrapingVisual />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl space-y-8">
          {/* Badge */}
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-secondary pulse-glow" />
              Enterprise-Grade Data Extraction
            </span>
          </div>

          {/* Title */}
          <div className="animate-fade-in-up delay-100">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-balance">
              <span className="text-foreground">{title}</span>
              <br />
              <span className="text-gradient">{subtitle}</span>
            </h1>
          </div>

          {/* Description */}
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-up delay-200">
              {description}
            </p>
          )}

          {/* CTA */}
          {cta && (
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up delay-300">
              <Link
                href={cta.href}
                className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-secondary to-primary" />
                <span className="relative text-primary-foreground flex items-center gap-2">
                  {cta.label}
                  <svg
                    className="w-5 h-5 arrow-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl glass glass-hover transition-all duration-300 text-foreground hover:-translate-y-0.5"
              >
                See How It Works
              </Link>
            </div>
          )}

          {children}
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
