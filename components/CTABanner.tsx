'use client';

import Link from 'next/link';

interface CTABannerProps {
  title: string;
  description: string;
  buttons?: Array<{
    label: string;
    href: string;
    variant: 'primary' | 'secondary';
  }>;
}

export function CTABanner({
  title,
  description,
  buttons = [
    { label: 'Contact Us', href: '/contact', variant: 'primary' },
    { label: 'View Pricing', href: '/prices', variant: 'secondary' },
  ],
}: CTABannerProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/10" />
      
      {/* CSS animated orbs - no JS required */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl orb orb-primary" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl orb orb-secondary" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="glass-strong rounded-2xl p-10 md:p-14 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground animate-fade-in-up delay-100">
            {title}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            {buttons.map((button) => (
              <Link
                key={button.href}
                href={button.href}
                className={`inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${
                  button.variant === 'primary'
                    ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg hover:shadow-primary/25'
                    : 'glass border-primary/30 text-primary hover:border-primary/50 hover:bg-primary/10'
                }`}
              >
                {button.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
