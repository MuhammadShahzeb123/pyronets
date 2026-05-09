import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { CTABanner } from '@/components/CTABanner';
import { FAQ } from '@/components/FAQ';
import { generateMetadata, generateJsonLd } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';
import { CTA_VARIANTS } from '@/lib/constants';
import Script from 'next/script';

export const metadata: Metadata = generateMetadata({
  title: 'Web Scraping for E-commerce | Product Data Extraction | Pyronets',
  description: 'Power your e-commerce business with web scraping. Extract product data, monitor competitor pricing, track inventory, and optimize pricing strategies automatically.',
  keywords: [
    'web scraping for ecommerce',
    'product data extraction',
    'competitor price monitoring',
    'inventory tracking',
    'pricing optimization',
    'ecommerce data scraping',
  ],
  canonicalUrl: 'https://pyronets.com/web-scraping-for-ecommerce',
});

const breadcrumbData = breadcrumbSchema([
  { name: 'Home', url: 'https://pyronets.com' },
  { name: 'Solutions', url: 'https://pyronets.com/solution' },
  { name: 'E-commerce', url: 'https://pyronets.com/web-scraping-for-ecommerce' },
]);

const faqs = [
  {
    question: 'What e-commerce platforms can you scrape?',
    answer: 'We can scrape virtually any e-commerce platform including Amazon, eBay, Walmart, Shopify stores, and thousands of other online retailers. Our technology handles anti-bot protections, JavaScript rendering, and dynamic content.',
  },
  {
    question: 'What product data can you extract?',
    answer: 'We extract full product information: titles, descriptions, images, prices, availability, reviews, ratings, specifications, seller information, and more. Data is structured and normalized for easy integration.',
  },
  {
    question: 'How often is product data updated?',
    answer: 'Update frequency is customizable based on your needs - hourly for fast-moving products, daily for standard monitoring, or weekly for stable catalogs. We can also provide real-time API access.',
  },
  {
    question: 'How do you handle competitor pricing changes?',
    answer: 'Our system monitors competitor prices in real-time and can trigger automated alerts when prices drop below your thresholds. You can also integrate with your pricing engine for automatic repricing.',
  },
  {
    question: 'Can you track inventory levels across competitors?',
    answer: 'Yes, we track real-time inventory availability across multiple competitors. Get alerts when competitors run out of stock, enabling you to capture additional sales.',
  },
  {
    question: 'What format is the data delivered in?',
    answer: 'Data can be delivered via REST API, webhooks, CSV/JSON exports, direct database sync, or integrated with your existing systems like Shopify, WooCommerce, or custom ERPs.',
  },
];

export default function EcommercePage() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(breadcrumbData)}
      />

      <Hero
        title="Web Scraping for"
        subtitle="E-commerce"
        description="Extract product data, monitor competitor prices, track inventory, and optimize your pricing strategy with enterprise-grade web scraping solutions."
        cta={{
          label: CTA_VARIANTS.primary,
          href: '/contact',
        }}
      />

      <Section background="light">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Why E-commerce Businesses Choose Pyronets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Competitor Monitoring',
              description: 'Track competitor pricing, product listings, and promotional strategies across thousands of sources in real-time.',
            },
            {
              title: 'Product Data Extraction',
              description: 'Extract detailed product information including images, specs, reviews, and ratings from any e-commerce platform.',
            },
            {
              title: 'Pricing Optimization',
              description: 'Make data-driven pricing decisions with comprehensive market intelligence and competitor price tracking.',
            },
            {
              title: 'Inventory Tracking',
              description: 'Monitor stock levels across competitors to identify opportunities and prevent lost sales.',
            },
            {
              title: 'Review Analysis',
              description: 'Aggregate customer reviews and ratings to understand market sentiment and product feedback.',
            },
            {
              title: 'Real-Time Alerts',
              description: 'Get instant notifications when competitors change prices, launch products, or run promotions.',
            },
          ].map((benefit, idx) => (
            <div key={idx} className="glass glass-hover rounded-xl p-6 transition-all duration-300">
              <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="use-cases">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          E-commerce Use Cases
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Competitor Price Intelligence',
              description: 'Monitor pricing strategies across competitors to optimize your own pricing. Track price changes, promotional campaigns, and seasonal adjustments.',
            },
            {
              title: 'Product Catalog Analysis',
              description: 'Analyze product listings to identify gaps in your catalog, discover trending products, and understand market offerings.',
            },
            {
              title: 'Dynamic Pricing',
              description: 'Feed real-time data to your pricing engine for automated repricing based on competitor prices, demand, and inventory levels.',
            },
            {
              title: 'Assortment Planning',
              description: 'Identify high-performing products in your category and make data-driven decisions about inventory and new product launches.',
            },
            {
              title: ' MAP Compliance Monitoring',
              description: 'Track unauthorized sellers and ensure your brand\'s minimum advertised price policies are enforced across marketplaces.',
            },
            {
              title: 'Market Share Analysis',
              description: 'Understand your market position by tracking share of search, product visibility, and competitor performance metrics.',
            },
          ].map((useCase, idx) => (
            <div key={idx} className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-xl font-bold text-foreground mb-2">{useCase.title}</h3>
              <p className="text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="light">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          How It Works
        </h2>

        <div className="space-y-8">
          {[
            {
              num: '1',
              title: 'Define Your Data Requirements',
              description: 'Tell us which products, competitors, and metrics you need to track. We\'ll design a custom scraping solution for your specific needs.',
            },
            {
              num: '2',
              title: 'Custom Scraper Development',
              description: 'Our engineers build optimized scrapers for your target platforms, handling anti-bot systems, JavaScript rendering, and data transformation.',
            },
            {
              num: '3',
              title: 'Quality Assurance',
              description: 'Every data point goes through 50+ validation checks for accuracy, completeness, and consistency before delivery.',
            },
            {
              num: '4',
              title: 'Seamless Integration',
              description: 'Data flows directly into your systems via API, webhooks, or dashboard. Get real-time access to actionable intelligence.',
            },
          ].map((step) => (
            <div key={step.num} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 border border-primary/40 text-primary font-bold text-lg">
                  {step.num}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Data Points We Extract
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            'Product Titles',
            'Descriptions',
            'Prices',
            'Discounts',
            'Availability',
            'Images',
            'Specifications',
            'Categories',
            'Brand Names',
            'SKU Numbers',
            'Reviews',
            'Ratings',
            'Seller Info',
            'Shipping Info',
            'Promotions',
            'Stock Levels',
          ].map((dataPoint) => (
            <div key={dataPoint} className="glass rounded-lg p-4 text-center">
              <span className="text-foreground font-medium">{dataPoint}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section background="light">
        <h2 className="text-4xl font-bold text-foreground mb-12">
          Frequently Asked Questions
        </h2>
        <FAQ faqs={faqs} />
      </Section>

      <CTABanner
        title="Ready to Transform Your E-commerce Strategy?"
        description="Get a free consultation and custom proposal for your e-commerce data needs. Our team will design a solution tailored to your business."
        buttons={[
          { label: CTA_VARIANTS.primary, href: '/contact', variant: 'primary' },
          { label: 'View Pricing', href: '/prices', variant: 'secondary' },
        ]}
      />
    </>
  );
}