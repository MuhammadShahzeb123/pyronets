'use client';

import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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

// Animated data particles for visual effect
function DataParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// Animated code lines for scraping visual
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
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
              className="w-2 h-2 rounded-full bg-secondary"
            />
            <span className="text-muted-foreground">{line}</span>
          </motion.div>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-muted-foreground">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-secondary"
              />
              Enterprise-Grade Data Extraction
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-balance">
              <span className="text-foreground">{title}</span>
              <br />
              <span className="text-gradient">{subtitle}</span>
            </h1>
          </motion.div>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {/* CTA */}
          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href={cta.href}
                className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl overflow-hidden transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-secondary to-primary" />
                <span className="relative text-primary-foreground flex items-center gap-2">
                  {cta.label}
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
              </Link>
              
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl glass glass-hover transition-all duration-300 text-foreground"
              >
                See How It Works
              </Link>
            </motion.div>
          )}

          {children}
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
