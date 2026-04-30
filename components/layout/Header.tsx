'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { NAV_ITEMS, CTA_VARIANTS } from '@/lib/constants';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      className={`sticky top-0 z-50 transition-all duration-300 animate-fade-in-up ${
        scrolled 
          ? 'glass-strong shadow-lg shadow-black/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center glow-primary-sm transition-transform duration-300 group-hover:scale-105">
              <span className="text-primary-foreground font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:inline group-hover:text-primary transition-colors duration-300">
              Pyronets
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item, index) => (
              <div
                key={item.href}
                className="animate-fade-in-up"
                style={{ animationDelay: `${100 + index * 50}ms` }}
              >
                <Link
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block animate-fade-in-up delay-300">
            <Link
              href="/contact"
              className="group relative px-6 py-2.5 font-medium rounded-lg overflow-hidden inline-block transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] shimmer" />
              <span className="relative text-primary-foreground">
                {CTA_VARIANTS.primary}
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors active:scale-95"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ transform: mobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass rounded-xl p-4 space-y-2">
            {NAV_ITEMS.map((item, index) => (
              <div
                key={item.href}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <div>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full px-4 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium rounded-lg text-center mt-2"
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
