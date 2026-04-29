import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { ServiceCard } from '@/components/ServiceCard';
import { CTABanner } from '@/components/CTABanner';
import { FAQ } from '@/components/FAQ';
import { generateMetadata, generateJsonLd } from '@/lib/metadata';
import { organizationSchema, faqSchema } from '@/lib/schema';
import { SERVICES, CTA_VARIANTS } from '@/lib/constants';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = generateMetadata({
  title: 'Web Scraping Services | Managed Data Extraction | Pyronets',
  description: 'Pyronets delivers managed web scraping services for enterprises. Accurate, real-time data extraction with 50+ quality checks. Get your free trial today.',
  keywords: [
    'web scraping services',
    'managed web scraping',
    'data extraction',
    'web scraping api',
    'enterprise web scraping',
  ],
});

const faqs = [
  {
    question: 'What is managed web scraping?',
    answer: 'Managed web scraping is a fully handled service where a provider like Pyronets builds, runs, and maintains web scrapers on your behalf — delivering clean, structured data directly to your systems.',
  },
  {
    question: 'How does Pyronets handle anti-bot systems?',
    answer: 'Pyronets uses residential proxy rotation, TLS fingerprint mimicking, and browser automation to bypass Cloudflare, Akamai, and other anti-bot systems reliably.',
  },
  {
    question: 'How is web scraping data delivered?',
    answer: 'Data is delivered via API, CSV, Google Sheets, or directly into your database — on a schedule that matches your needs (daily, hourly, or real-time).',
  },
  {
    question: 'How much does web scraping cost?',
    answer: 'Pricing depends on the number of websites, data points, and delivery frequency. Pyronets provides custom quotes — contact us for a free assessment.',
  },
  {
    question: 'Is web scraping legal?',
    answer: 'Web scraping publicly available data is generally legal. Pyronets operates within legal boundaries and respects robots.txt guidelines and applicable data laws.',
  },
];

export default function Home() {
  const selectedServices = SERVICES.slice(0, 6);

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(organizationSchema())}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(faqSchema(faqs))}
      />

      {/* Hero Section */}
      <Hero
        title="Web Scraping"
        subtitle="at Enterprise Scale"
        description="Managed web scraping and data extraction for 200+ enterprises worldwide. Automated data collection with 99.8% accuracy."
        cta={{
          label: CTA_VARIANTS.primary,
          href: '/contact',
        }}
      />

      {/* Trust Badges */}
      <Section background="light">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-3xl font-bold text-primary">200+</p>
            <p className="text-gray-600">Enterprise Clients</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">99.8%</p>
            <p className="text-gray-600">Data Accuracy</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">50+</p>
            <p className="text-gray-600">Quality Checks</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">24/7</p>
            <p className="text-gray-600">Dedicated Support</p>
          </div>
        </div>
      </Section>

      {/* Main Services */}
      <Section id="services">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-dark mb-4">
            Data Solutions for Every Industry
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            From competitive pricing to AI training data, we deliver accurate web data at enterprise scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedServices.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features.slice(0, 4)}
              cta={{
                label: 'Learn More',
                href: service.href,
              }}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/solution"
            className="inline-block px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all"
          >
            View All Solutions →
          </Link>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="light" id="how-it-works">
        <h2 className="text-4xl font-bold text-dark mb-12 text-center">
          How Pyronets Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Consultation',
              description: 'We analyze your data requirements and identify the best approach.',
            },
            {
              step: '02',
              title: 'Custom Build',
              description: 'Our engineers build and test custom scrapers for your sources.',
            },
            {
              step: '03',
              title: 'Quality Assurance',
              description: 'We validate accuracy with 50+ checks before delivery.',
            },
            {
              step: '04',
              title: 'Continuous Delivery',
              description: 'Automated data delivery on your schedule, 24/7 monitoring.',
            },
          ].map((item) => (
            <div key={item.step} className="bg-white rounded-lg p-6 text-center border border-gray-200">
              <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
              <h3 className="font-bold text-dark mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <h2 className="text-4xl font-bold text-dark mb-12">
          Frequently Asked Questions
        </h2>
        <FAQ faqs={faqs} />
      </Section>

      {/* Final CTA */}
      <CTABanner
        title="Ready to Transform Your Data?"
        description="Get a free consultation and custom proposal for your web scraping needs. Discover how Pyronets can deliver the data your business needs."
        buttons={[
          { label: CTA_VARIANTS.primary, href: '/contact', variant: 'primary' },
          { label: 'View Pricing', href: '/prices', variant: 'secondary' },
        ]}
      />
    </>
  );
}
