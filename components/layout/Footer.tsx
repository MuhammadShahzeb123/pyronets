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
    <footer className="bg-dark text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Pyronets</h3>
            <p className="text-sm text-gray-400 mb-4">
              Enterprise web scraping and data extraction services.
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.socialLinks.twitter}
                className="text-gray-400 hover:text-white transition-colors"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href={siteConfig.socialLinks.linkedin}
                className="text-gray-400 hover:text-white transition-colors"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
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
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} Pyronets. All rights reserved.</p>
          <p>
            Contact:{' '}
            <a href={`mailto:${siteConfig.email}`} className="text-white hover:text-secondary">
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
