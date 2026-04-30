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
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Blog', href: '/blog' },
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
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                Pyronets
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Enterprise-grade web scraping and data extraction services you can trust.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.socialLinks.twitter}
                className="w-10 h-10 glass rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 hover:scale-110 transition-all duration-300"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={siteConfig.socialLinks.linkedin}
                className="w-10 h-10 glass rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 hover:scale-110 transition-all duration-300"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
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
