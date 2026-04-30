import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { CTABanner } from '@/components/CTABanner';
import { generateMetadata, generateJsonLd } from '@/lib/metadata';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';
import { CTA_VARIANTS } from '@/lib/constants';
import Script from 'next/script';

export const metadata: Metadata = generateMetadata({
  title: 'AI Training Data | ML Training Datasets | Pyronets',
  description: 'Large-scale, high-quality training data for AI and ML models. Diverse data sources, custom labeling, data quality assurance.',
  keywords: [
    'AI training data',
    'ML training data',
    'training dataset',
    'data for machine learning',
    'synthetic data',
  ],
  canonicalUrl: 'https://pyronets.com/data-for-ai',
});

const schemaData = serviceSchema({
  name: 'AI Training Data',
  description: 'High-quality training data collection for AI and machine learning models.',
  url: 'https://pyronets.com/data-for-ai',
});

const breadcrumbData = breadcrumbSchema([
  { name: 'Home', url: 'https://pyronets.com' },
  { name: 'Services', url: 'https://pyronets.com/solution' },
  { name: 'Data for AI', url: 'https://pyronets.com/data-for-ai' },
]);

export default function DataForAIPage() {
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
        title="Training Data"
        subtitle="for AI Models"
        description="Collect diverse, high-quality training datasets for AI and ML models. Large-scale data collection with custom labeling and quality assurance."
        cta={{
          label: CTA_VARIANTS.primary,
          href: '/contact',
        }}
      />

      {/* Data Services */}
      <Section background="light">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Our AI Data Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Data Collection',
              description:
                'Collect raw data from diverse sources at scale. Web scraping, APIs, IoT devices, and more.',
            },
            {
              title: 'Data Annotation',
              description:
                'Professional labeling and annotation services. Images, text, audio classification and tagging.',
            },
            {
              title: 'Data Cleaning',
              description:
                'Remove duplicates, handle missing values, outliers detection, and standardization.',
            },
            {
              title: 'Data Augmentation',
              description:
                'Synthetic data generation and augmentation to increase dataset size and diversity.',
            },
            {
              title: 'Domain Expertise',
              description:
                'Custom domain-specific data for specialized ML models (medical, legal, financial, etc.).',
            },
            {
              title: 'Compliance & Ethics',
              description:
                'GDPR compliant data collection and ethical AI practices throughout the process.',
            },
          ].map((service) => (
            <div key={service.title} className="glass glass-hover rounded-xl p-6 transition-all duration-300">
              <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Data Types */}
      <Section>
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Types of Training Data
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Image Data',
              items: ['Classification datasets', 'Object detection', 'Segmentation', 'Face recognition', 'Scene understanding'],
            },
            {
              title: 'Text Data',
              items: ['Sentiment analysis', 'NLP training', 'Classification', 'Entity extraction', 'Language translation'],
            },
            {
              title: 'Time Series',
              items: ['Stock prices', 'Weather data', 'Traffic patterns', 'Sensor data', 'Log data'],
            },
            {
              title: 'Video Data',
              items: ['Action recognition', 'Object tracking', 'Scene detection', 'Activity detection'],
            },
            {
              title: 'Audio Data',
              items: ['Speech recognition', 'Audio classification', 'Music tagging', 'Noise detection'],
            },
            {
              title: 'Custom Data',
              items: ['Domain-specific', 'Industry-specific', 'Proprietary formats', 'Multi-modal datasets'],
            },
          ].map((dataType) => (
            <div key={dataType.title} className="glass glass-hover rounded-xl p-6 transition-all duration-300">
              <h3 className="text-lg font-bold text-foreground mb-4">{dataType.title}</h3>
              <ul className="space-y-2">
                {dataType.items.map((item) => (
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

      {/* Quality Assurance */}
      <Section background="light">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Quality Assurance Process
        </h2>

        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            {
              step: '1',
              title: 'Data Source Validation',
              description: 'Verify data source quality, relevance, and compliance before collection begins.',
            },
            {
              step: '2',
              title: 'Collection & Extraction',
              description: 'Large-scale automated data collection with error handling and retry logic.',
            },
            {
              step: '3',
              title: 'Cleaning & Preparation',
              description: 'Remove duplicates, handle missing values, standardize formats.',
            },
            {
              step: '4',
              title: 'Annotation & Labeling',
              description: 'Professional annotation with multi-level review and QA checks.',
            },
            {
              step: '5',
              title: 'Validation & Testing',
              description: 'Statistical validation and ML model testing to ensure data quality.',
            },
            {
              step: '6',
              title: 'Documentation',
              description: 'Complete documentation including metadata, schema, and usage guidelines.',
            },
          ].map((step) => (
            <div key={step.step} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 border border-primary/40 text-primary font-bold text-lg">
                  {step.step}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Get High-Quality Training Data"
        description="Build better AI models with quality training datasets. Free consultation to discuss your AI data needs."
        buttons={[
          { label: CTA_VARIANTS.primary, href: '/contact', variant: 'primary' },
          { label: 'View Pricing', href: '/prices', variant: 'secondary' },
        ]}
      />
    </>
  );
}
