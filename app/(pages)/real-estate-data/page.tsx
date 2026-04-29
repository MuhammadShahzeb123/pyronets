import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { CTABanner } from '@/components/CTABanner';
import { generateMetadata, generateJsonLd } from '@/lib/metadata';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';
import { CTA_VARIANTS } from '@/lib/constants';
import Script from 'next/script';

export const metadata: Metadata = generateMetadata({
  title: 'Real Estate Data Scraping | Property Data Extraction | Pyronets',
  description: 'Extract real estate data from property listings, MLS, and real estate platforms. Property prices, listings, market data. Real-time automated collection.',
  keywords: [
    'real estate data scraping',
    'property data extraction',
    'real estate data mining',
    'mls data extraction',
  ],
  canonicalUrl: 'https://pyronets.com/real-estate-data',
});

const schemaData = serviceSchema({
  name: 'Real Estate Data Scraping',
  description: 'Extract property data from real estate platforms and MLS listings.',
  url: 'https://pyronets.com/real-estate-data',
});

const breadcrumbData = breadcrumbSchema([
  { name: 'Home', url: 'https://pyronets.com' },
  { name: 'Services', url: 'https://pyronets.com/solution' },
  { name: 'Real Estate Data', url: 'https://pyronets.com/real-estate-data' },
]);

export default function RealEstateDataPage() {
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
        title="Real Estate"
        subtitle="Market Intelligence"
        description="Extract property data from MLS, Zillow, Redfin, and custom real estate platforms. Track listings, prices, and market trends automatically."
        cta={{
          label: CTA_VARIANTS.primary,
          href: '/contact',
        }}
      />

      {/* What We Extract */}
      <Section background="light">
        <h2 className="text-4xl font-bold text-dark mb-12 text-center">
          Property Data We Extract
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Property Information',
              items: ['Address', 'Property Type', 'Square Footage', 'Year Built', 'Lot Size', 'Bedrooms', 'Bathrooms'],
            },
            {
              title: 'Pricing Data',
              items: ['List Price', 'Sale Price', 'Price Changes', 'Price History', 'Tax Assessment', 'HOA Fees'],
            },
            {
              title: 'Market Metrics',
              items: ['Days on Market', 'Listing Status', 'Market Trends', 'Neighborhood Stats', 'School Ratings', 'Crime Data'],
            },
            {
              title: 'Agent Information',
              items: ['Agent Name', 'Agency', 'Contact Info', 'Agent Rating', 'Reviews', 'Listings Count'],
            },
            {
              title: 'Property Features',
              items: ['Garage', 'Pool', 'Fireplace', 'Basement', 'Deck', 'Recent Renovations'],
            },
            {
              title: 'Images & Documents',
              items: ['Property Photos', 'Floor Plans', 'Virtual Tours', 'Disclosures', 'Inspection Reports'],
            },
          ].map((category) => (
            <div key={category.title} className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-dark mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-600">
                    <span className="text-secondary">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Use Cases */}
      <Section>
        <h2 className="text-4xl font-bold text-dark mb-12 text-center">
          Real Estate Use Cases
        </h2>

        <div className="space-y-6">
          {[
            {
              title: 'Investment Analysis',
              description:
                'Analyze neighborhoods, compare properties, and identify investment opportunities based on market data.',
            },
            {
              title: 'Market Research',
              description: 'Track market trends, pricing patterns, and competitive landscape in your target markets.',
            },
            {
              title: 'Lead Generation',
              description:
                'Identify and track hot properties, recently listed homes, and motivated sellers for your pipeline.',
            },
            {
              title: 'Comparative Market Analysis',
              description:
                'Build automated CMA reports with comparable properties and market data for clients.',
            },
            {
              title: 'Pricing Intelligence',
              description: 'Track competitor pricing strategies and market rate changes in real-time.',
            },
            {
              title: 'Portfolio Monitoring',
              description:
                'Monitor properties in your portfolio and track valuation changes over time.',
            },
          ].map((useCase) => (
            <div key={useCase.title} className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-dark mb-2">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Start Extracting Real Estate Data"
        description="Get property data for your market. Free consultation with our real estate data specialists."
        buttons={[
          { label: CTA_VARIANTS.primary, href: '/contact', variant: 'primary' },
          { label: 'View Pricing', href: '/prices', variant: 'secondary' },
        ]}
      />
    </>
  );
}
