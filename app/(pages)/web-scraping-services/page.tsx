import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { ServiceCard } from '@/components/ServiceCard';
import { CTABanner } from '@/components/CTABanner';
import { FAQ } from '@/components/FAQ';
import { generateMetadata, generateJsonLd } from '@/lib/metadata';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';
import { SERVICES, INDUSTRY_SOLUTIONS, CTA_VARIANTS } from '@/lib/constants';
import Link from 'next/link';
import Script from 'next/script';

const service = SERVICES[0]; // Web Scraping Services

export const metadata: Metadata = generateMetadata({
  title: 'Managed Web Scraping Services | Enterprise Data Extraction | Pyronets',
  description: 'Professional managed web scraping services for enterprises. Custom scrapers, real-time data delivery, 99.8% accuracy, bypass anti-bot systems. Start free trial now.',
  keywords: [
    'managed web scraping services',
    'professional web scraping',
    'web scraping api',
    'enterprise data extraction',
    'custom web scraping',
    'web crawler service',
  ],
  canonicalUrl: 'https://pyronets.com/web-scraping-services',
});

const schemaData = serviceSchema({
  name: 'Managed Web Scraping Services',
  description: 'Professional managed web scraping and data extraction services for enterprises.',
  url: 'https://pyronets.com/web-scraping-services',
});

const breadcrumbData = breadcrumbSchema([
  { name: 'Home', url: 'https://pyronets.com' },
  { name: 'Services', url: 'https://pyronets.com/solution' },
  { name: 'Web Scraping Services', url: 'https://pyronets.com/web-scraping-services' },
]);

const faqs = [
  {
    question: 'What websites can you scrape?',
    answer: 'We can scrape virtually any public website, including e-commerce platforms, news sites, real estate portals, job boards, pricing aggregators, and more. Our anti-bot bypass technology handles Cloudflare, Akamai, and similar protections.',
  },
  {
    question: 'How often can data be updated?',
    answer: 'Update frequency is completely customizable — hourly, daily, weekly, or real-time streaming. We design the scraper to match your data freshness requirements.',
  },
  {
    question: 'What format is data delivered in?',
    answer: 'We support multiple delivery methods: REST API, GraphQL, CSV/JSON files, Google Sheets, AWS S3, direct database connection, or custom integrations.',
  },
  {
    question: 'How do you ensure data accuracy?',
    answer: 'Every scraper runs 50+ quality checks including row count validation, field type verification, duplicate detection, and freshness monitoring.',
  },
  {
    question: 'What about duplicate or missing data?',
    answer: 'Our system automatically deduplicates records, handles missing fields, and maintains data integrity with automatic retry logic.',
  },
];

export default function WebScrapingServicesPage() {
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
        title="Managed Web Scraping"
        subtitle="Built for Enterprise"
        description="Professional web scraping service for 200+ enterprises. Custom scrapers, real-time data, 99.8% accuracy. Bypass any anti-bot system with our battle-tested infrastructure."
        cta={{
          label: CTA_VARIANTS.primary,
          href: '/contact',
        }}
      />

      {/* Key Benefits */}
      <Section background="light">
        <h2 className="text-4xl font-bold text-dark mb-12 text-center">
          Why Choose Pyronets?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Anti-Bot Bypass',
              description: 'Bypass Cloudflare, Akamai, Imperva, and other anti-bot systems. Our residential proxies and browser emulation handle the hardest targets.',
            },
            {
              title: '99.8% Accuracy',
              description: '50+ built-in quality checks ensure your data is clean, deduplicated, and validated before delivery.',
            },
            {
              title: 'Real-Time Data',
              description: 'Hourly, daily, or real-time streaming. We design update frequency around your business needs.',
            },
            {
              title: 'Custom Integrations',
              description: 'REST API, GraphQL, Webhooks, Google Sheets, AWS S3, or direct database sync. We integrate with your stack.',
            },
            {
              title: '24/7 Monitoring',
              description: 'Dedicated support team monitors every scraper. Automatic alerts and fixes prevent data gaps.',
            },
            {
              title: 'JavaScript Support',
              description: 'Handle single-page apps, dynamic content, and infinite scroll. Our headless browsers render everything.',
            },
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-dark mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Use Cases */}
      <Section id="use-cases">
        <h2 className="text-4xl font-bold text-dark mb-12 text-center">
          Common Use Cases
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Price Intelligence',
              description: 'Track competitor prices across all channels. Adjust your pricing strategy in real-time based on market data.',
            },
            {
              title: 'Market Research',
              description: 'Collect product listings, reviews, and market data. Analyze trends and competitive landscape.',
            },
            {
              title: 'Lead Generation',
              description: 'Extract contact information from directories and business listings. Fuel your sales pipeline.',
            },
            {
              title: 'Real Estate',
              description: 'Monitor property listings, prices, and market trends. Power your real estate analytics.',
            },
            {
              title: 'Job Market Intelligence',
              description: 'Aggregate job postings to analyze skills demand, salary trends, and hiring patterns.',
            },
            {
              title: 'AI Training Data',
              description: 'Collect diverse, large-scale datasets for training machine learning and AI models.',
            },
          ].map((useCase, idx) => (
            <div
              key={idx}
              className="border-l-4 border-primary pl-6 py-4"
            >
              <h3 className="text-xl font-bold text-dark mb-2">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section background="light">
        <h2 className="text-4xl font-bold text-dark mb-12 text-center">
          Our Process
        </h2>

        <div className="space-y-8">
          {[
            {
              num: '1',
              title: 'Consultation & Analysis',
              description: 'We understand your data requirements, source complexity, and delivery needs. Our team assesses the scraping challenge.',
            },
            {
              num: '2',
              title: 'Custom Scraper Build',
              description: 'Our engineers design and build a custom scraper tailored to your targets. We handle anti-bot systems, JavaScript rendering, and data transformation.',
            },
            {
              num: '3',
              title: 'Testing & QA',
              description: 'We test the scraper against your sample URLs, verify data accuracy, and implement 50+ quality checks.',
            },
            {
              num: '4',
              title: 'Deployment & Monitoring',
              description: 'We deploy the scraper to our production infrastructure and monitor it 24/7. Automatic alerts notify you of issues.',
            },
            {
              num: '5',
              title: 'Continuous Delivery',
              description: 'Data flows to your system on schedule. We maintain and update scrapers as target websites change.',
            },
          ].map((step) => (
            <div key={step.num} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white font-bold text-lg">
                  {step.num}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section>
        <h2 className="text-4xl font-bold text-dark mb-12 text-center">
          Industry Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRY_SOLUTIONS.map((solution) => (
            <Link
              key={solution.id}
              href={solution.href}
              className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-bold text-dark mb-2 hover:text-primary">
                {solution.title}
              </h3>
              <p className="text-gray-600 text-sm">{solution.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section background="light">
        <h2 className="text-4xl font-bold text-dark mb-12">
          Frequently Asked Questions
        </h2>
        <FAQ faqs={faqs} />
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready to Get Started?"
        description="Let's discuss your web scraping needs. Get a free consultation and custom proposal from our team."
        buttons={[
          { label: CTA_VARIANTS.primary, href: '/contact', variant: 'primary' },
          { label: 'View Pricing', href: '/prices', variant: 'secondary' },
        ]}
      />
    </>
  );
}
