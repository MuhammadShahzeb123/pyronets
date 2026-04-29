// lib/utils.ts
// Utility functions for common operations

export function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

export function generateCanonicalUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pyronets.com';
  return `${baseUrl}${path}`;
}

export interface SEOVariable {
  keyword: string;
  keywordVariants: string[];
  longTailKeywords: string[];
  semanticRelated: string[];
}

// Dynamic SEO variables for different pages
export const seoVariables: Record<string, SEOVariable> = {
  webScrapingServices: {
    keyword: 'web scraping services',
    keywordVariants: ['managed web scraping', 'web scraping api', 'data extraction service'],
    longTailKeywords: [
      'managed web scraping services for enterprises',
      'professional web scraping service',
      'enterprise grade web scraping',
    ],
    semanticRelated: [
      'web crawling',
      'data extraction',
      'web automation',
      'screen scraping',
    ],
  },
  competitorMonitoring: {
    keyword: 'competitor price monitoring',
    keywordVariants: ['price monitoring', 'competitive intelligence', 'price tracking'],
    longTailKeywords: [
      'real-time competitor price monitoring',
      'automated price tracking',
      'competitive pricing intelligence',
    ],
    semanticRelated: [
      'competitor analysis',
      'market intelligence',
      'pricing strategy',
      'competitive intelligence tool',
    ],
  },
  productDataScraping: {
    keyword: 'product data scraping',
    keywordVariants: ['ecommerce data extraction', 'product data extraction', 'catalog scraping'],
    longTailKeywords: [
      'product data scraping for ecommerce',
      'automated product data collection',
      'ecommerce product data extraction',
    ],
    semanticRelated: [
      'product catalog',
      'ecommerce data',
      'product matching',
      'inventory data',
    ],
  },
};
