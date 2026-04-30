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
  title: 'Product Data Scraping | E-commerce Data Extraction | Pyronets',
  description: 'Extract product data at scale from any e-commerce platform. Product matching, pricing, reviews, inventory tracking. Real-time data delivery with 99.8% accuracy.',
  keywords: [
    'product data scraping',
    'ecommerce data extraction',
    'product data extraction',
    'catalog scraping',
    'product matching',
    'price data extraction',
  ],
  canonicalUrl: 'https://pyronets.com/product-data-scraping',
});

const schemaData = serviceSchema({
  name: 'Product Data Scraping',
  description: 'Extract product data from e-commerce platforms at scale.',
  url: 'https://pyronets.com/product-data-scraping',
});

const breadcrumbData = breadcrumbSchema([
  { name: 'Home', url: 'https://pyronets.com' },
  { name: 'Services', url: 'https://pyronets.com/solution' },
  { name: 'Product Data Scraping', url: 'https://pyronets.com/product-data-scraping' },
]);

const faqs = [
  {
    question: 'Which e-commerce platforms can you scrape?',
    answer: 'We scrape from all major platforms including Amazon, eBay, Shopify, WooCommerce, Alibaba, fashion retailers, and custom e-commerce sites.',
  },
  {
    question: 'What product data can you extract?',
    answer: 'Title, SKU, price, availability, images, descriptions, specifications, ratings, reviews, variants, shipping info, and custom fields.',
  },
  {
    question: 'How do you handle product deduplication?',
    answer: 'We use intelligent matching algorithms to identify duplicate products across catalogs and consolidate them with a canonical product record.',
  },
  {
    question: 'Can you track inventory changes?',
    answer: 'Yes. We can scrape inventory levels continuously and alert you to stock changes, new listings, or product removals.',
  },
  {
    question: 'How fresh is the data?',
    answer: 'Update frequency is customizable from hourly to daily. Real-time streaming available for critical SKUs.',
  },
];

export default function ProductDataScrapingPage() {
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
        title="Product Data"
        subtitle="at Any Scale"
        description="Extract product information from any e-commerce platform. Automated product matching, pricing intelligence, and inventory tracking. Real-time data delivery."
        cta={{
          label: CTA_VARIANTS.primary,
          href: '/contact',
        }}
      />

      {/* What We Extract */}
      <Section background="light">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          What We Can Extract
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Product Information',
              items: ['Title & SKU', 'Description', 'Specifications', 'Images', 'Categories'],
            },
            {
              title: 'Pricing Data',
              items: ['Regular Price', 'Sale Price', 'Discounts', 'Bulk Pricing', 'Shipping Cost'],
            },
            {
              title: 'Availability',
              items: ['Stock Level', 'Availability Status', 'Backorder Info', 'Shipping Estimate', 'In-Store'],
            },
            {
              title: 'Reviews & Ratings',
              items: ['Review Count', 'Rating Score', 'Review Text', 'Reviewer Info', 'Review Date'],
            },
            {
              title: 'Variants',
              items: ['Colors', 'Sizes', 'Materials', 'Variant Pricing', 'Variant Availability'],
            },
            {
              title: 'Seller Information',
              items: ['Seller Name', 'Rating', 'Fulfillment Type', 'Return Policy', 'Contact Info'],
            },
          ].map((category) => (
            <div key={category.title} className="glass glass-hover rounded-xl p-6 transition-all duration-300">
              <h3 className="text-lg font-bold text-foreground mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-secondary">&#10003;</span>
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
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Common Use Cases
        </h2>

        <div className="space-y-8">
          {[
            {
              title: 'Price Intelligence',
              description: 'Monitor competitor pricing across marketplaces and adjust your strategy in real-time.',
            },
            {
              title: 'Product Catalog Building',
              description: 'Aggregate products from multiple suppliers into a unified master catalog.',
            },
            {
              title: 'Market Analysis',
              description: 'Analyze product trends, pricing strategies, and competitive positioning.',
            },
            {
              title: 'Content Aggregation',
              description: 'Collect product data and reviews to power your catalog, marketplace, or comparison site.',
            },
            {
              title: 'Inventory Management',
              description: 'Track product availability across suppliers and alert when prices or stock change.',
            },
            {
              title: 'Dropshipping',
              description: 'Automatically sync product data, pricing, and inventory from suppliers to your store.',
            },
          ].map((useCase, idx) => (
            <div key={idx} className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-foreground mb-2">{useCase.title}</h3>
              <p className="text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Technical Features */}
      <Section background="light">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Technical Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Multi-Source Aggregation',
              description: 'Combine product data from hundreds of sources into a single canonical view.',
            },
            {
              title: 'Intelligent Matching',
              description: 'Machine learning algorithms identify and deduplicate the same product across platforms.',
            },
            {
              title: 'Image Extraction',
              description: 'Download and optimize product images, handle image variants and galleries.',
            },
            {
              title: 'Data Enrichment',
              description: 'Enrich product records with additional data (ratings, reviews, UGC).',
            },
            {
              title: 'Real-Time Updates',
              description: 'Hourly or real-time pricing and availability updates for dynamic data.',
            },
            {
              title: 'Quality Assurance',
              description: '50+ automated checks ensure data completeness, accuracy, and consistency.',
            },
          ].map((feature) => (
            <div key={feature.title} className="glass glass-hover rounded-xl p-6 transition-all duration-300">
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <h2 className="text-4xl font-bold text-foreground mb-12">
          Questions?
        </h2>
        <FAQ faqs={faqs} />
      </Section>

      {/* CTA */}
      <CTABanner
        title="Start Extracting Product Data"
        description="Let's discuss your product data needs. Get a free consultation and see samples of data we can extract."
        buttons={[
          { label: CTA_VARIANTS.primary, href: '/contact', variant: 'primary' },
          { label: 'View Pricing', href: '/prices', variant: 'secondary' },
        ]}
      />
    </>
  );
}
