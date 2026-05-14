'use client';

import Link from 'next/link';
import { Globe, TrendingUp, Package, Bot, Home, Briefcase, ArrowRight, Check } from 'lucide-react';

type IconName = 'globe' | 'trendingUp' | 'package' | 'bot' | 'home' | 'briefcase';

const iconMap: Record<IconName, React.ElementType> = {
  globe: Globe,
  trendingUp: TrendingUp,
  package: Package,
  bot: Bot,
  home: Home,
  briefcase: Briefcase,
};

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
  const IconComponent = iconMap[icon as IconName];

  return (
    <Link
      href={cta?.href || '#'}
      className="group relative block glass rounded-xl p-8 glass-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-br from-primary/50 via-transparent to-secondary/50">
          <div className="w-full h-full rounded-xl bg-card" />
        </div>
      </div>
      
      {/* Icon */}
      {IconComponent && (
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 relative z-10 transition-transform duration-300 group-hover:scale-110">
          <IconComponent className="w-6 h-6 text-primary" />
        </div>
      )}
      
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
            <li
              key={idx}
              className="flex items-start gap-3 text-sm text-muted-foreground"
            >
              <span className="mt-0.5 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-secondary" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      {cta && (
        <span className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors duration-300 relative z-10 group/link">
          <span>{cta.label}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </span>
      )}
    </Link>
  );
}
