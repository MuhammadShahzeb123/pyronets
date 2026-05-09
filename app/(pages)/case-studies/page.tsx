import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { CTABanner } from '@/components/CTABanner';
import { generateMetadata, generateJsonLd } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';
import { CTA_VARIANTS } from '@/lib/constants';
import Script from 'next/script';
import Link from 'next/link';

export const metadata: Metadata = generateMetadata({
  title: 'Case Studies | Success Stories | Pyronets',
  description: 'Explore how Pyronets has helped enterprises across e-commerce, finance, real estate, and more unlock the power of web data. Read our client success stories.',
  keywords: [
    'case studies',
    'success stories',
    'web scraping case studies',
    'client results',
    'data extraction success',
  ],
  canonicalUrl: 'https://pyronets.com/case-studies',
});

const breadcrumbData = breadcrumbSchema([
  { name: 'Home', url: 'https://pyronets.com' },
  { name: 'Case Studies', url: 'https://pyronets.com/case-studies' },
]);

const caseStudies = [
  {
    industry: 'E-commerce',
    client: 'Global Retailer',
    challenge: 'Needed to monitor competitor pricing across 50,000+ SKUs daily',
    solution: 'Custom web scraping solution with real-time price alerts',
    results: ['35% cost reduction vs. in-house', '50M+ data points collected monthly', '20% improvement in pricing strategy'],
    logo: '🏪',
  },
  {
    industry: 'Finance',
    client: 'Investment Firm',
    challenge: 'Required alternative data for market research and predictions',
    solution: 'Automated extraction of financial news, SEC filings, and market data',
    results: ['100+ data sources monitored', '40% faster research cycles', 'Improved investment accuracy by 25%'],
    logo: '💰',
  },
  {
    industry: 'Real Estate',
    client: 'Property Analytics Platform',
    challenge: 'Needed comprehensive property data across multiple listing sites',
    solution: 'Multi-source data aggregation with deduplication and enrichment',
    results: ['1M+ property records aggregated', '99.5% data accuracy', '60% time savings on data collection'],
    logo: '🏠',
  },
  {
    industry: 'Travel',
    client: 'Travel Aggregator',
    challenge: 'Required dynamic pricing data from airline and hotel websites',
    solution: 'Real-time flight and hotel price monitoring system',
    results: ['200+ airline sites monitored', 'Dynamic pricing updates every 15 minutes', '20% increase in user engagement'],
    logo: '✈️',
  },
  {
    industry: 'Healthcare',
    client: 'Medical Research Institute',
    challenge: 'Needed clinical trial data from multiple pharmaceutical databases',
    solution: 'Custom scraper for clinical trial registries and medical journals',
    results: ['500+ clinical trials tracked', '90% reduction in manual research time', 'Published 12 research papers using collected data'],
    logo: '🏥',
  },
  {
    industry: 'Automotive',
    client: 'Car Comparison Platform',
    challenge: 'Required specs, pricing, and reviews from manufacturer websites',
    solution: 'Comprehensive automotive data extraction pipeline',
    results: ['1,200+ vehicle models tracked', 'Real-time inventory updates', '35% growth in platform traffic'],
    logo: '🚗',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(breadcrumbData)}
      />

      {/* Hero */}
      <Hero
        title="Success Stories"
        subtitle="Proven Results Across Industries"
        description="Discover how leading enterprises leverage Pyronets web scraping services to transform raw data into actionable insights and measurable business outcomes."
      />

      {/* Case Studies Grid */}
      <Section background="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.client}
              className="glass glass-hover rounded-xl p-8 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{study.logo}</span>
                <div>
                  <p className="text-sm text-primary font-semibold">{study.industry}</p>
                  <h3 className="text-2xl font-bold text-foreground">{study.client}</h3>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Challenge</p>
                  <p className="text-muted-foreground">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Solution</p>
                  <p className="text-muted-foreground">{study.solution}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Results</p>
                  <ul className="space-y-1">
                    {study.results.map((result) => (
                      <li key={result} className="flex items-center gap-2 text-muted-foreground">
                        <span className="text-primary">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Our Track Record
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-5xl font-bold text-primary mb-2">200+</p>
            <p className="text-muted-foreground font-semibold">Enterprise Clients</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary mb-2">50+</p>
            <p className="text-muted-foreground font-semibold">Industries Served</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary mb-2">99.8%</p>
            <p className="text-muted-foreground font-semibold">Data Accuracy</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary mb-2">10B+</p>
            <p className="text-muted-foreground font-semibold">Data Points/Month</p>
          </div>
        </div>
      </Section>

      {/* Industries Served */}
      <Section background="light">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Industries We Serve
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            'E-commerce',
            'Finance',
            'Real Estate',
            'Travel',
            'Healthcare',
            'Automotive',
            'Retail',
            'Insurance',
          ].map((industry) => (
            <div
              key={industry}
              className="glass glass-hover rounded-xl p-6 text-center font-semibold text-foreground transition-all duration-300"
            >
              {industry}
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl font-medium text-foreground mb-6 italic">
            "Pyronets transformed how we gather market intelligence. The data quality and delivery speed exceeded our expectations, and the team genuinely cares about our success."
          </blockquote>
          <div>
            <p className="text-lg font-bold text-foreground">Sarah Chen</p>
            <p className="text-muted-foreground">VP of Data Strategy, Global Retailer</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready to Transform Your Data Strategy?"
        description="Join 200+ enterprises that trust Pyronets for reliable, scalable web scraping solutions. Get a free consultation today."
        buttons={[
          { label: CTA_VARIANTS.primary, href: '/contact', variant: 'primary' },
          { label: 'View Our Services', href: '/web-scraping-services', variant: 'secondary' },
        ]}
      />
    </>
  );
}