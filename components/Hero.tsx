'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { ArrowRight, Shield, CheckCircle, BarChart3, Terminal, Database, Cpu, Globe, Check } from 'lucide-react';

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

function TerminalAnimation() {
  const codeLines = [
    { text: 'pyronets@server:~$ python scrape.py --target=ecommerce', type: 'command' },
    { text: '[+] Connecting to target: shopify-store.com', type: 'info', delay: 0.5 },
    { text: '[+] Bypassing Cloudflare... SUCCESS', type: 'success', delay: 1.2 },
    { text: '[+] Extracting product data...', type: 'info', delay: 2.0 },
    { text: '    → Found 1,247 products', type: 'result', delay: 2.8 },
    { text: '[+] Processing images & variants...', type: 'info', delay: 3.5 },
    { text: '    → 50,392 data points collected', type: 'result', delay: 4.2 },
    { text: '[+] Quality check: VERIFIED', type: 'success', delay: 5.0 },
    { text: '[+] Exporting to JSON... 100%', type: 'success', delay: 5.8 },
    { text: '✓ Scraping complete: 12.4MB in 6.2s', type: 'complete', delay: 6.5 },
    { text: '', type: 'blank', delay: 7.2 },
    { text: 'pyronets@server:~$ _', type: 'cursor', delay: 7.5 },
  ];

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block w-[480px] opacity-40">
      <div className="glass rounded-lg overflow-hidden font-mono text-xs">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.05] border-b border-white/[0.08]">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-muted-foreground text-xs">Pyronets Scraper v2.4</span>
        </div>
        
        {/* Terminal body */}
        <div className="p-4 space-y-1 max-h-[320px] overflow-hidden">
          {codeLines.map((line, index) => (
            <div
              key={index}
              className={`animate-fade-in-up opacity-0`}
              style={{ 
                animationDelay: `${line.delay}s`,
                animationFillMode: 'forwards'
              }}
            >
              <span className={
                line.type === 'command' ? 'text-secondary' :
                line.type === 'info' ? 'text-muted-foreground' :
                line.type === 'success' ? 'text-green-400' :
                line.type === 'result' ? 'text-primary' :
                line.type === 'complete' ? 'text-green-400 font-semibold' :
                line.type === 'cursor' ? 'text-secondary animate-pulse' :
                ''
              }>
                {line.type === 'result' && '    '}
                {line.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DataParticles() {
  const particles = [
    { icon: Database, x: '10%', y: '20%', delay: 0 },
    { icon: Globe, x: '85%', y: '15%', delay: 0.3 },
    { icon: Cpu, x: '70%', y: '60%', delay: 0.6 },
    { icon: Terminal, x: '15%', y: '70%', delay: 0.9 },
    { icon: Check, x: '50%', y: '40%', delay: 1.2 },
    { icon: Database, x: '90%', y: '80%', delay: 1.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-20"
          style={{
            left: particle.x,
            top: particle.y,
            animationDelay: `${particle.delay}s`,
          }}
        >
          <particle.icon className="w-8 h-8 text-primary" />
        </div>
      ))}
    </div>
  );
}

function TrustBadge({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Icon className="w-4 h-4 text-primary" />
      <span>{text}</span>
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
    <div className="relative min-h-[80vh] flex items-center py-16 md:py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
        <DataParticles />
      </div>

      {/* Live Terminal Animation */}
      <TerminalAnimation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl space-y-8">
          {/* Trust badges row */}
          <div className="flex flex-wrap items-center gap-6 animate-fade-in-up">
            <TrustBadge icon={Shield} text="SOC 2 Certified" />
            <TrustBadge icon={CheckCircle} text="99.8% Data Accuracy" />
            <TrustBadge icon={BarChart3} text="10B+ Data Points/Month" />
          </div>

          {/* Title */}
          <div className="animate-fade-in-up delay-100">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground">
              {title}
              <span className="block text-primary mt-2">{subtitle}</span>
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
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 cursor-pointer"
              >
                {cta.label}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/solution"
                className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl border border-border text-foreground hover:bg-muted/50 transition-all duration-300 cursor-pointer"
              >
                View Solutions
              </Link>
            </div>
          )}

          {/* Trust stats */}
          <div className="pt-8 animate-fade-in-up delay-400">
            <p className="text-sm text-muted-foreground mb-4">Trusted by 200+ enterprises worldwide</p>
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-bold text-foreground">99.8%</p>
                <p className="text-sm text-muted-foreground">Accuracy</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Quality Checks</p>
              </div>
            </div>
          </div>

          {children}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}