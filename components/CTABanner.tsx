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
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {buttons.map((button) => (
            <Link
              key={button.href}
              href={button.href}
              className={`px-8 py-3 font-semibold rounded-lg transition-all ${
                button.variant === 'primary'
                  ? 'bg-white text-primary hover:shadow-lg'
                  : 'border-2 border-white text-white hover:bg-white/10'
              }`}
            >
              {button.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
