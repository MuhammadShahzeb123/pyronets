'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/metadata';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'Web Scraping', href: '/web-scraping-services' },
        { label: 'Price Monitoring', href: '/competitor-price-monitoring' },
        { label: 'Product Data', href: '/product-data-scraping' },
        { label: 'Data for AI', href: '/data-for-ai' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'E-commerce', href: '/web-scraping-for-ecommerce' },
        { label: 'Finance', href: '/web-scraping-for-finance' },
        { label: 'Lead Generation', href: '/web-scraping-for-lead-generation' },
        { label: 'Market Research', href: '/web-scraping-for-market-research' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Our Commitment', href: '/our-commitment' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms of Service', href: '/terms-conditions' },
        { label: 'Security', href: '/security' },
      ],
    },
  ];

  return (
    <footer className="relative mt-20 pt-20 pb-10 border-t border-border overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 animate-fade-in-up">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <svg width="40" height="40" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="p-grad-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#22D3EE" />
                  </linearGradient>
                </defs>
                <g transform="scale(0.9) translate(2, 0)">
                  <path d="M 6 2 L 6 30 M 6 2 L 18 2 L 26 10 L 26 18 L 18 22 L 6 22 M 6 12 L 16 12 L 21 7 M 16 12 L 21 17 M 6 22 L 14 27" 
                        fill="none" stroke="url(#p-grad-footer)" strokeWidth="3.5" strokeLinejoin="round" />
                  <circle cx="6" cy="2" r="3.5" fill="url(#p-grad-footer)" />
                  <circle cx="6" cy="12" r="3.5" fill="url(#p-grad-footer)" />
                  <circle cx="6" cy="22" r="3.5" fill="url(#p-grad-footer)" />
                  <circle cx="6" cy="30" r="3.5" fill="url(#p-grad-footer)" />
                  <circle cx="18" cy="2" r="3.5" fill="url(#p-grad-footer)" />
                  <circle cx="26" cy="10" r="3.5" fill="url(#p-grad-footer)" />
                  <circle cx="26" cy="18" r="3.5" fill="url(#p-grad-footer)" />
                  <circle cx="18" cy="22" r="3.5" fill="url(#p-grad-footer)" />
                  <circle cx="16" cy="12" r="3.5" fill="url(#p-grad-footer)" />
                  <circle cx="21" cy="7" r="3.5" fill="url(#p-grad-footer)" />
                  <circle cx="21" cy="17" r="3.5" fill="url(#p-grad-footer)" />
                  <circle cx="14" cy="27" r="3.5" fill="url(#p-grad-footer)" />
                </g>
              </svg>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                Pyronets
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Enterprise-grade web scraping and data extraction services you can trust.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <div 
              key={section.title} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${(sectionIndex + 1) * 100}ms` }}
            >
              <h4 className="text-foreground font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm link-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground animate-fade-in-up delay-500">
          <p>&copy; {currentYear} Pyronets. All rights reserved.</p>
          <p>
            Contact:{' '}
            <a 
              href={`mailto:${siteConfig.email}`} 
              className="text-foreground hover:text-primary transition-colors"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
