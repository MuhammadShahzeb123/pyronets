import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { CTABanner } from '@/components/CTABanner';
import { generateMetadata, generateJsonLd } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';
import { CTA_VARIANTS } from '@/lib/constants';
import Script from 'next/script';

export const metadata: Metadata = generateMetadata({
  title: 'Web Scraping for Lead Generation | B2B Lead Data Extraction | Pyronets',
  description: 'Generate qualified B2B leads with web scraping. Extract contact emails, phone numbers, business data from directories and databases. Scale your sales pipeline.',
  keywords: [
    'web scraping lead generation',
    'B2B lead generation',
    'email extraction service',
    'business directory scraping',
    'contact data extraction',
    'B2B data provider',
  ],
  canonicalUrl: 'https://pyronets.com/web-scraping-for-lead-generation',
});

const breadcrumbData = breadcrumbSchema([
  { name: 'Home', url: 'https://pyronets.com' },
  { name: 'Solutions', url: 'https://pyronets.com/solution' },
  { name: 'Lead Generation', url: 'https://pyronets.com/web-scraping-for-lead-generation' },
]);

const benefits = [
  {
    title: 'Contact Information Extraction',
    description: 'Extract emails, phone numbers, LinkedIn profiles, and social media handles from business listings and websites.',
  },
  {
    title: 'Business Directory Scraping',
    description: 'Pull data from Yelp, Yellow Pages, industry-specific directories, and local business databases.',
  },
  {
    title: 'Company Data Enrichment',
    description: 'Enrich your existing leads with firmographics, employee counts, revenue estimates, and tech stack data.',
  },
  {
    title: 'Verified Email Finding',
    description: 'Find and verify work email addresses for decision makers using advanced detection algorithms.',
  },
  {
    title: 'Real-Time Updates',
    description: 'Keep your lead database fresh with automated updates whenever source websites change.',
  },
  {
    title: 'CRM Integration',
    description: 'Push extracted leads directly to Salesforce, HubSpot, or any CRM via API or webhook.',
  },
];

const dataPoints = [
  { icon: '📧', title: 'Email Addresses', description: 'Work and personal emails with verification' },
  { icon: '📞', title: 'Phone Numbers', description: 'Direct line and company switchboard' },
  { icon: '🏢', title: 'Company Details', description: 'Name, address, size, revenue, industry' },
  { icon: '👤', title: 'Contact Names', description: 'Decision makers and key contacts' },
  { icon: '🔗', title: 'LinkedIn Profiles', description: 'Professional profiles and connections' },
  { icon: '🌐', title: 'Website Data', description: 'Technologies, traffic estimates, rankings' },
];

const industries = [
  {
    title: 'SaaS Companies',
    description: 'Find companies using specific tools and technologies for targeted outreach.',
  },
  {
    title: 'Real Estate',
    description: 'Build lists of property managers, real estate agents, and investors.',
  },
  {
    title: 'Financial Services',
    description: 'Identify banks, insurance companies, and fintech startups for B2B sales.',
  },
  {
    title: 'Healthcare',
    description: 'Extract data from hospitals, clinics, and healthcare providers.',
  },
  {
    title: 'Manufacturing',
    description: 'Find suppliers, distributors, and manufacturing companies.',
  },
  {
    title: 'Professional Services',
    description: 'Build lists of agencies, consultants, and service providers.',
  },
];

export default function LeadGenerationPage() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(breadcrumbData)}
      />

      <Hero
        title="Web Scraping for"
        subtitle="Lead Generation"
        description="Build high-quality B2B lead lists at scale. Extract contact info, company data, and business intelligence from directories, websites, and databases."
        cta={{
          label: CTA_VARIANTS.primary,
          href: '/contact',
        }}
      />

      <Section background="light">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Why Use Web Scraping for Lead Generation?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="glass glass-hover rounded-xl p-6 transition-all duration-300">
              <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          What Data We Extract
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataPoints.map((point, idx) => (
            <div key={idx} className="border-l-4 border-primary pl-6 py-4">
              <div className="text-2xl mb-2">{point.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{point.title}</h3>
              <p className="text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="light">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Industries We Serve
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, idx) => (
            <div key={idx} className="glass glass-hover rounded-xl p-6 transition-all duration-300">
              <h3 className="text-lg font-bold text-foreground mb-2">{industry.title}</h3>
              <p className="text-muted-foreground">{industry.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          How It Works
        </h2>

        <div className="space-y-8">
          {[
            {
              num: '1',
              title: 'Define Your Ideal Customer',
              description: 'Tell us your target criteria — industry, company size, location, technologies used, or any other parameters.',
            },
            {
              num: '2',
              title: 'Identify Source Websites',
              description: 'We identify the best data sources: business directories, LinkedIn, industry databases, and relevant websites.',
            },
            {
              num: '3',
              title: 'Build Custom Scrapers',
              description: 'Our engineers create tailored scrapers for each source, handling anti-bot systems and dynamic content.',
            },
            {
              num: '4',
              title: 'Data Extraction & Enrichment',
              description: 'We extract and enrich your leads with additional data points like emails, phone numbers, and firmographics.',
            },
            {
              num: '5',
              title: 'Delivery & Integration',
              description: 'Receive your leads via API, CSV, or direct CRM integration. Set up automated updates to keep data fresh.',
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

      <CTABanner
        title="Ready to Build Your Lead Pipeline?"
        description="Get a free consultation and custom quote for your lead generation needs. We'll help you reach the right decision makers."
        buttons={[
          { label: CTA_VARIANTS.primary, href: '/contact', variant: 'primary' },
          { label: 'View Pricing', href: '/prices', variant: 'secondary' },
        ]}
      />
    </>
  );
}