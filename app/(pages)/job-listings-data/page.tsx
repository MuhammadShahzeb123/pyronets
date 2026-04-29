import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { CTABanner } from '@/components/CTABanner';
import { generateMetadata, generateJsonLd } from '@/lib/metadata';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';
import { CTA_VARIANTS } from '@/lib/constants';
import Script from 'next/script';

export const metadata: Metadata = generateMetadata({
  title: 'Job Listings Data | Job Market Intelligence | Pyronets',
  description: 'Collect job posting data from all major job boards. Job listings, salary data, skills demand. Build job market intelligence.',
  keywords: [
    'job listings data',
    'job market intelligence',
    'job board scraping',
    'salary data',
    'skills demand',
  ],
  canonicalUrl: 'https://pyronets.com/job-listings-data',
});

const schemaData = serviceSchema({
  name: 'Job Listings Data',
  description: 'Collect and analyze job posting data from all major job boards.',
  url: 'https://pyronets.com/job-listings-data',
});

const breadcrumbData = breadcrumbSchema([
  { name: 'Home', url: 'https://pyronets.com' },
  { name: 'Services', url: 'https://pyronets.com/solution' },
  { name: 'Job Listings Data', url: 'https://pyronets.com/job-listings-data' },
]);

export default function JobListingsDataPage() {
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
        title="Job Market"
        subtitle="Intelligence"
        description="Aggregate job postings from all major job boards. Analyze talent trends, skills demand, and salary data to make smarter hiring and career decisions."
        cta={{
          label: CTA_VARIANTS.primary,
          href: '/contact',
        }}
      />

      {/* Data Extraction */}
      <Section background="light">
        <h2 className="text-4xl font-bold text-dark mb-12 text-center">
          Job Posting Data We Extract
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Job Details',
              items: ['Job Title', 'Company', 'Location', 'Job ID', 'Posting Date', 'Job Type', 'Experience Level'],
            },
            {
              title: 'Compensation',
              items: ['Salary Range', 'Bonus Structure', 'Benefits', 'Stock Options', 'Signing Bonus'],
            },
            {
              title: 'Requirements',
              items: ['Required Skills', 'Required Experience', 'Education', 'Certifications', 'Languages'],
            },
            {
              title: 'Company Info',
              items: ['Company Name', 'Industry', 'Company Size', 'Website', 'Glassdoor Rating'],
            },
            {
              title: 'Full Description',
              items: ['Full Job Description', 'Responsibilities', 'Qualifications', 'Application URL', 'Contact Info'],
            },
            {
              title: 'Market Data',
              items: ['Job Board Source', 'Posting Duration', 'Number of Applicants', 'Status', 'Last Updated'],
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
          Use Cases
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Talent Market Analysis',
              description: 'Analyze talent supply, demand, and trends across industries and regions.',
            },
            {
              title: 'Skills Gap Analysis',
              description: 'Identify emerging skills demand and plan your workforce development accordingly.',
            },
            {
              title: 'Salary Intelligence',
              description: 'Benchmark compensation across roles, industries, and locations.',
            },
            {
              title: 'Competitive Intelligence',
              description: 'Monitor competitor hiring activity and organizational changes.',
            },
            {
              title: 'Recruitment Optimization',
              description: 'Optimize job posting content based on data from successful competitors.',
            },
            {
              title: 'Career Planning',
              description: 'Research salary trends and skills demand for your career development.',
            },
          ].map((useCase) => (
            <div key={useCase.title} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-dark mb-2">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Build Job Market Intelligence"
        description="Access comprehensive job market data. Free consultation with our recruitment intelligence specialists."
        buttons={[
          { label: CTA_VARIANTS.primary, href: '/contact', variant: 'primary' },
          { label: 'View Pricing', href: '/prices', variant: 'secondary' },
        ]}
      />
    </>
  );
}
