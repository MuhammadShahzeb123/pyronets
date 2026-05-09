// lib/constants.ts
// Content and configuration constants with variables support

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  keyword: string;
  icon: string;
  fullDescription: string;
  features: string[];
  cta: string;
  href: string;
}

export interface PageContent {
  title: string;
  description: string;
  heading: string;
  subheading: string;
  content: string;
}

// Main Services with variable support
export const SERVICES: ServiceItem[] = [
  {
    id: 'web-scraping-services',
    title: 'Enterprise Web Scraping',
    slug: 'web-scraping-services',
    description: 'Full-service web scraping solutions for 200+ enterprises worldwide.',
    keyword: 'managed web scraping services',
    icon: '🌐',
    fullDescription: 'Full-service web scraping solutions for enterprise businesses. Delivering accurate, large-scale data with 99.8% precision and 24/7 dedicated support.',
    features: [
      'Anti-bot bypass and detection',
      'JavaScript rendering support',
      'Real-time data delivery',
      '50+ quality checks',
      'Dedicated support team',
      'Custom integrations',
    ],
    cta: 'Start Your Free Trial',
    href: '/web-scraping-services',
  },
  {
    id: 'competitor-price-monitoring',
    title: 'Competitor Price Monitoring',
    slug: 'competitor-price-monitoring',
    description: 'Real-time competitor pricing data to maximize your profits.',
    keyword: 'competitor price monitoring',
    icon: '📈',
    fullDescription: 'Stay ahead with accurate, real-time competitor pricing data. Maximize your profits and streamline operations with reliable web scraping solutions.',
    features: [
      'Real-time price tracking',
      'Automated alerts',
      'Competitive analysis reports',
      'Price history tracking',
      'Market trend analysis',
      'Custom dashboards',
    ],
    cta: 'Monitor Competitor Prices',
    href: '/competitor-price-monitoring',
  },
  {
    id: 'product-data-scraping',
    title: 'Product Data Scraping',
    slug: 'product-data-scraping',
    description: 'Accurate product data scraping and matching across e-commerce sites.',
    keyword: 'product data scraping',
    icon: '📦',
    fullDescription: 'Comprehensive product information from any e-commerce platform at scale. Achieve precise product matching and drive better business decisions.',
    features: [
      'Multi-source product data',
      'Product matching & deduplication',
      'Price and availability updates',
      'Review and rating aggregation',
      'Inventory tracking',
      'Real-time integration',
    ],
    cta: 'Extract Product Data',
    href: '/product-data-scraping',
  },
  {
    id: 'data-for-ai',
    title: 'Web Scraping for AI Training Data',
    slug: 'data-for-ai',
    description: 'High-volume, clean web data for training machine learning models.',
    keyword: 'AI training data web scraping',
    icon: '🤖',
    fullDescription: 'Custom web scraping pipelines for AI data collection. Power your machine learning models with dependable, high-quality data.',
    features: [
      'Large-scale data collection',
      'Data quality assurance',
      'Custom labeling support',
      'Diverse data sources',
      'Regular updates',
      'Compliance and ethics',
    ],
    cta: 'Get AI Training Data',
    href: '/data-for-ai',
  },
  {
    id: 'real-estate-data',
    title: 'Real Estate Data Scraping',
    slug: 'real-estate-data',
    description: 'Real estate data scraping service for agencies and investors.',
    keyword: 'real estate data scraping',
    icon: '🏠',
    fullDescription: 'Track property listings, prices, and market trends automatically. Unlock accurate property information and market trends to make informed investment decisions.',
    features: [
      'Property listing data',
      'Market analysis',
      'Price tracking',
      'Market trend reports',
      'Investment insights',
      'Neighborhood data',
    ],
    cta: 'Get Real Estate Data',
    href: '/real-estate-data',
  },
  {
    id: 'job-listings-data',
    title: 'Job Listings Data Collection',
    slug: 'job-listings-data',
    description: 'Collect millions of job postings from any job board automatically.',
    keyword: 'job listings data collection',
    icon: '💼',
    fullDescription: 'Structured job listings data for recruitment intelligence. Gather millions of job postings to gain a competitive edge in hiring and workforce planning.',
    features: [
      'Multi-board aggregation',
      'Skill analysis',
      'Salary intelligence',
      'Market trends',
      'Talent insights',
      'Real-time updates',
    ],
    cta: 'Collect Job Data',
    href: '/job-listings-data',
  },
];

// Industry-specific solutions
export const INDUSTRY_SOLUTIONS = [
  {
    id: 'ecommerce',
    title: 'Web Scraping for E-commerce',
    slug: 'web-scraping-for-ecommerce',
    keyword: 'web scraping for ecommerce',
    description: 'Extract product data, pricing, reviews from any ecommerce platform.',
    href: '/web-scraping-for-ecommerce',
  },
  {
    id: 'finance',
    title: 'Web Scraping for Finance',
    slug: 'web-scraping-for-finance',
    keyword: 'web scraping for finance',
    description: 'Extract financial data and alternative data for investment firms.',
    href: '/web-scraping-for-finance',
  },
  {
    id: 'lead-generation',
    title: 'Web Scraping for Lead Generation',
    slug: 'web-scraping-for-lead-generation',
    keyword: 'web scraping lead generation',
    description: 'Extract qualified business leads from directories and portals.',
    href: '/web-scraping-for-lead-generation',
  },
  {
    id: 'market-research',
    title: 'Web Scraping for Market Research',
    slug: 'web-scraping-for-market-research',
    keyword: 'web scraping market research',
    description: 'Power market research with automated web data extraction.',
    href: '/web-scraping-for-market-research',
  },
  {
    id: 'real-estate',
    title: 'Web Scraping for Real Estate',
    slug: 'web-scraping-for-real-estate',
    keyword: 'web scraping real estate',
    description: 'Extract real estate data for market analysis and investment.',
    href: '/web-scraping-for-real-estate',
  },
];

// Navigation items
export const NAV_ITEMS = [
  { label: 'Web Scraping', href: '/web-scraping-services' },
  { label: 'Price Monitoring', href: '/competitor-price-monitoring' },
  { label: 'Product Data', href: '/product-data-scraping' },
  { label: 'Real Estate', href: '/real-estate-data' },
  { label: 'Job Data', href: '/job-listings-data' },
  { label: 'Data for AI', href: '/data-for-ai' },
  { label: 'About', href: '/about' },
];

// CTA text variants for A/B testing
export const CTA_VARIANTS = {
  primary: 'Start Free Trial →',
  secondary: 'Get a Quote',
  tertiary: 'Contact Us',
  consultation: 'Schedule Consultation',
};
