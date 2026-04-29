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
  title: 'About Pyronets | Web Scraping Company',
  description: 'Pyronets is the leading provider of managed web scraping services for enterprises. Learn about our mission, team, and 200+ successful clients.',
  keywords: [
    'about pyronets',
    'web scraping company',
    'data extraction services',
    'enterprise data solutions',
  ],
  canonicalUrl: 'https://pyronets.com/about',
});

const breadcrumbData = breadcrumbSchema([
  { name: 'Home', url: 'https://pyronets.com' },
  { name: 'About', url: 'https://pyronets.com/about' },
]);

export default function AboutPage() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(breadcrumbData)}
      />

      {/* Hero */}
      <Hero
        title="About"
        subtitle="Pyronets"
        description="Enterprise web scraping and data extraction solutions for businesses worldwide. Founded on principles of reliability, accuracy, and customer success."
      />

      {/* Mission */}
      <Section background="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-dark mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Pyronets was founded to simplify how enterprises access and leverage web data. We believe that
            accurate, timely data should be accessible to any business — without the complexity of building
            and maintaining in-house web scraping infrastructure.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We serve 200+ enterprises across e-commerce, finance, real estate, and technology industries,
            delivering billions of data points daily with 99.8% accuracy.
          </p>
        </div>
      </Section>

      {/* Why Pyronets */}
      <Section>
        <h2 className="text-4xl font-bold text-dark mb-12 text-center">
          Why Businesses Choose Pyronets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Reliability',
              description:
                'Our infrastructure is built for enterprise scale. 99.8% uptime with 24/7 dedicated support.',
            },
            {
              title: 'Expertise',
              description:
                'Our team has 10+ years combined experience in web scraping, data engineering, and anti-bot systems.',
            },
            {
              title: 'Speed',
              description:
                'From requirement to delivery in days. We build, test, and deploy custom scrapers quickly.',
            },
            {
              title: 'Accuracy',
              description:
                '50+ quality checks per data point. Deduplication, validation, and enrichment included.',
            },
            {
              title: 'Flexibility',
              description:
                'Any data source, any format, any schedule. We integrate with your existing systems seamlessly.',
            },
            {
              title: 'Security',
              description:
                'Enterprise-grade security, compliance, and data privacy. SOC 2 Type II certified.',
            },
          ].map((reason) => (
            <div key={reason.title} className="bg-white rounded-lg p-8 border border-gray-200 text-center">
              <h3 className="text-xl font-bold text-dark mb-4">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section background="light">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-5xl font-bold text-primary mb-2">200+</p>
            <p className="text-gray-600 font-semibold">Enterprise Clients</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary mb-2">10B+</p>
            <p className="text-gray-600 font-semibold">Data Points/Month</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary mb-2">99.8%</p>
            <p className="text-gray-600 font-semibold">Data Accuracy</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary mb-2">24/7</p>
            <p className="text-gray-600 font-semibold">Dedicated Support</p>
          </div>
        </div>
      </Section>

      {/* Team Values */}
      <Section>
        <h2 className="text-4xl font-bold text-dark mb-12 text-center">
          Our Values
        </h2>

        <div className="space-y-8 max-w-3xl mx-auto">
          {[
            {
              title: 'Customer Success',
              description:
                'Your success is our success. We invest in understanding your business and delivering measurable value.',
            },
            {
              title: 'Technical Excellence',
              description:
                'We stay ahead of anti-bot technologies and continuously improve our infrastructure and processes.',
            },
            {
              title: 'Transparency',
              description:
                'Clear communication, honest pricing, and transparent reporting. No surprises, no hidden fees.',
            },
            {
              title: 'Reliability',
              description:
                'Enterprise-grade uptime, redundancy, and failover systems. Your data delivery never stops.',
            },
            {
              title: 'Innovation',
              description:
                'We invest in R&D to solve new scraping challenges and deliver cutting-edge solutions.',
            },
          ].map((value) => (
            <div key={value.title} className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-bold text-dark mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section background="light">
        <h2 className="text-4xl font-bold text-dark mb-12 text-center">
          Industries We Serve
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            'E-commerce',
            'Finance',
            'Real Estate',
            'Travel',
            'Retail',
            'Insurance',
            'Technology',
            'Education',
          ].map((industry) => (
            <div
              key={industry}
              className="bg-white rounded-lg p-6 border border-gray-200 text-center font-semibold text-dark"
            >
              {industry}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Join 200+ Enterprises Using Pyronets"
        description="Get started with a free consultation. We'll discuss your data needs and show you what's possible."
        buttons={[
          { label: CTA_VARIANTS.primary, href: '/contact', variant: 'primary' },
          { label: 'View Case Studies', href: '/case-studies', variant: 'secondary' },
        ]}
      />
    </>
  );
}
