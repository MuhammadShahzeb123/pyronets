import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { CTABanner } from '@/components/CTABanner';
import { FAQ } from '@/components/FAQ';
import { generateMetadata, generateJsonLd } from '@/lib/metadata';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';
import { CTA_VARIANTS } from '@/lib/constants';
import Script from 'next/script';

export const metadata: Metadata = generateMetadata({
  title: 'Competitor Price Monitoring | Price Intelligence | Pyronets',
  description: 'Real-time competitor price monitoring and intelligence. Track pricing across 1000s of competitors automatically. Dynamic pricing, alerts, market analytics.',
  keywords: [
    'competitor price monitoring',
    'price intelligence',
    'competitive pricing',
    'price tracking',
    'dynamic pricing',
    'price monitoring tool',
  ],
  canonicalUrl: 'https://pyronets.com/competitor-price-monitoring',
});

const schemaData = serviceSchema({
  name: 'Competitor Price Monitoring',
  description: 'Real-time competitor price monitoring and market intelligence.',
  url: 'https://pyronets.com/competitor-price-monitoring',
});

const breadcrumbData = breadcrumbSchema([
  { name: 'Home', url: 'https://pyronets.com' },
  { name: 'Services', url: 'https://pyronets.com/solution' },
  { name: 'Price Monitoring', url: 'https://pyronets.com/competitor-price-monitoring' },
]);

const faqs = [
  {
    question: 'How often is pricing updated?',
    answer: 'Hourly, daily, or real-time depending on your requirements. Most e-commerce pricing changes are captured within 2 hours.',
  },
  {
    question: 'Which competitors can you monitor?',
    answer: 'Any website with public pricing. Amazon, eBay, Shopify stores, niche retailers, DTC brands, and international sites.',
  },
  {
    question: 'How do you match products across competitors?',
    answer: 'We use UPC/GTIN matching first, then apply ML algorithms for fuzzy matching on title, description, and attributes.',
  },
  {
    question: 'Can you track pricing by SKU or product variant?',
    answer: 'Yes. We track each SKU and variant separately, including color, size, and configuration-specific pricing.',
  },
  {
    question: 'What alerts can you set up?',
    answer: 'Price drops/increases, new product listings, out-of-stock alerts, competitor entry/exit, and custom threshold alerts.',
  },
];

export default function CompetitorPriceMonitoringPage() {
  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(schemaData)}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(breadcrumbData)}
      />

      {/* Hero */}
      <Hero
        title="Price Monitoring"
        subtitle="Never Miss a Beat"
        description="Real-time competitor price tracking across 1000+ competitors. Automated alerts, market analytics, and dynamic pricing recommendations."
        cta={{
          label: CTA_VARIANTS.primary,
          href: '/contact',
        }}
      />

      {/* Key Benefits */}
      <Section background="light">
        <h2 className="text-4xl font-bold text-dark mb-12 text-center">
          Monitor Competitor Prices 24/7
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Real-Time Pricing Data',
              description: 'Hourly or real-time price updates from all competitors. Never miss a pricing change.',
            },
            {
              title: 'Intelligent Matching',
              description: 'Automatically match your products to competitors using UPC, title, and ML-powered fuzzy matching.',
            },
            {
              title: 'Automated Alerts',
              description: 'Get notified of significant price changes, new listings, or competitor entry/exit from any market.',
            },
            {
              title: 'Market Analytics',
              description: 'Visualize pricing trends, identify price leaders, and understand competitive positioning.',
            },
            {
              title: 'Dynamic Pricing Recommendations',
              description: 'Data-driven recommendations for optimal pricing based on market conditions.',
            },
            {
              title: 'Historical Price Tracking',
              description: 'Track price history to identify patterns, seasonality, and predict future changes.',
            },
          ].map((benefit) => (
            <div key={benefit.title} className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-bold text-dark mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Use Cases */}
      <Section>
        <h2 className="text-4xl font-bold text-dark mb-12 text-center">
          Use Cases
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'E-commerce Price Optimization',
              description: 'Track marketplace pricing and automatically adjust your prices to remain competitive.',
            },
            {
              title: 'Retail Margin Protection',
              description: 'Monitor discount levels and protect gross margins with intelligent pricing rules.',
            },
            {
              title: 'Travel & Hospitality',
              description: 'Track competitor rates and seasonality. Optimize your room rates and package pricing.',
            },
            {
              title: 'SaaS Pricing Strategy',
              description: 'Monitor competitor SaaS pricing and packaging. Identify market opportunities.',
            },
            {
              title: 'Marketplace Intelligence',
              description: 'Understand marketplace dynamics and competitive landscape.',
            },
            {
              title: 'Consumer Products',
              description: 'Track branded product pricing across all retailers. Monitor brand consistency.',
            },
          ].map((useCase) => (
            <div key={useCase.title} className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-dark mb-2">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section background="light">
        <h2 className="text-4xl font-bold text-dark mb-12 text-center">
          Powerful Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Smart Matching',
              description: 'UPC/GTIN matching + ML fuzzy matching for accurate product identification.',
            },
            {
              title: 'Pricing Alerts',
              description: 'Threshold-based alerts for price changes, stock status, and market events.',
            },
            {
              title: 'Price History',
              description: 'Complete historical pricing data for trend analysis and forecasting.',
            },
            {
              title: 'Competitor Network',
              description: 'Add or remove competitors anytime. Monitor 1000s of sources.',
            },
            {
              title: 'Dynamic Pricing',
              description: 'Automatic pricing recommendations based on market data.',
            },
            {
              title: 'Custom Dashboards',
              description: 'Real-time dashboards with custom KPIs and analytics.',
            },
            {
              title: 'API Integration',
              description: 'REST API for seamless integration with your pricing engine.',
            },
            {
              title: 'Data Export',
              description: 'Export to CSV, Google Sheets, or direct database sync.',
            },
            {
              title: '24/7 Monitoring',
              description: 'Dedicated monitoring team ensures continuous data delivery.',
            },
          ].map((feature) => (
            <div key={feature.title} className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <h2 className="text-4xl font-bold text-dark mb-12">
          Common Questions
        </h2>
        <FAQ faqs={faqs} />
      </Section>

      {/* CTA */}
      <CTABanner
        title="Get Real-Time Price Intelligence"
        description="Start monitoring competitor prices today. Free demo with your top competitors."
        buttons={[
          { label: CTA_VARIANTS.primary, href: '/contact', variant: 'primary' },
          { label: 'View Pricing', href: '/prices', variant: 'secondary' },
        ]}
      />
    </>
  );
}
