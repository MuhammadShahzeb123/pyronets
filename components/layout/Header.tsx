'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { NAV_ITEMS, CTA_VARIANTS } from '@/lib/constants';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

const solutions = [
  { label: 'Web Scraping', href: '/web-scraping-services' },
  { label: 'Price Monitoring', href: '/competitor-price-monitoring' },
  { label: 'Product Data', href: '/product-data-scraping' },
  { label: 'Real Estate Data', href: '/real-estate-data' },
  { label: 'Job Data', href: '/job-listings-data' },
  { label: 'AI Training Data', href: '/data-for-ai' },
];

const industries = [
  { label: 'E-commerce', href: '/web-scraping-for-ecommerce' },
  { label: 'Finance', href: '/web-scraping-for-finance' },
  { label: 'Lead Generation', href: '/web-scraping-for-lead-generation' },
  { label: 'Market Research', href: '/web-scraping-for-market-research' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <svg width="36" height="36" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="p-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#22D3EE" />
                  </linearGradient>
                </defs>
                <g transform="scale(0.85) translate(3, 0)">
                  <path d="M 6 2 L 6 30 M 6 2 L 18 2 L 26 10 L 26 18 L 18 22 L 6 22 M 6 12 L 16 12 L 21 7 M 16 12 L 21 17 M 6 22 L 14 27" 
                        fill="none" stroke="url(#p-grad)" strokeWidth="3.5" strokeLinejoin="round" />
                  <circle cx="6" cy="2" r="3.5" fill="url(#p-grad)" />
                  <circle cx="6" cy="12" r="3.5" fill="url(#p-grad)" />
                  <circle cx="6" cy="22" r="3.5" fill="url(#p-grad)" />
                  <circle cx="6" cy="30" r="3.5" fill="url(#p-grad)" />
                  <circle cx="18" cy="2" r="3.5" fill="url(#p-grad)" />
                  <circle cx="26" cy="10" r="3.5" fill="url(#p-grad)" />
                  <circle cx="26" cy="18" r="3.5" fill="url(#p-grad)" />
                  <circle cx="18" cy="22" r="3.5" fill="url(#p-grad)" />
                  <circle cx="16" cy="12" r="3.5" fill="url(#p-grad)" />
                  <circle cx="21" cy="7" r="3.5" fill="url(#p-grad)" />
                  <circle cx="21" cy="17" r="3.5" fill="url(#p-grad)" />
                  <circle cx="14" cy="27" r="3.5" fill="url(#p-grad)" />
                </g>
              </svg>
            </div>
            <span className="text-lg font-bold text-foreground hidden sm:block">
              Pyronets
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                onBlur={() => setTimeout(() => setSolutionsOpen(false), 150)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-xl opacity-100 animate-fade-in-up">
                  <div className="p-2">
                    {solutions.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between px-4 py-2.5 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                        onClick={() => setSolutionsOpen(false)}
                      >
                        {item.label}
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIndustriesOpen(!industriesOpen)}
                onBlur={() => setTimeout(() => setIndustriesOpen(false), 150)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Industries
                <ChevronDown className={`w-4 h-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-xl opacity-100 animate-fade-in-up">
                  <div className="p-2">
                    {industries.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                        onClick={() => setIndustriesOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {NAV_ITEMS.filter(item => !item.href.includes('scraping') && !item.href.includes('data') && !item.href.includes('monitoring') && !item.href.includes('product')).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact Sales
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer"
            >
              {CTA_VARIANTS.primary}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="space-y-2 pt-2">
            {solutions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="h-px bg-border my-2" />
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full px-4 py-3 text-center text-sm font-medium rounded-lg bg-primary text-primary-foreground"
              >
                {CTA_VARIANTS.primary}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}