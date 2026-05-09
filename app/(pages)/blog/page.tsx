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
  title: 'Blog | Web Scraping Insights & Industry Updates',
  description: 'Explore the latest insights on web scraping, data automation, and industry best practices. Stay ahead with expert analysis and trends from Pyronets.',
  keywords: [
    'web scraping blog',
    'data automation insights',
    'web scraping trends',
    'data extraction best practices',
    'enterprise data solutions',
  ],
  canonicalUrl: 'https://pyronets.com/blog',
});

const breadcrumbData = breadcrumbSchema([
  { name: 'Home', url: 'https://pyronets.com' },
  { name: 'Blog', url: 'https://pyronets.com/blog' },
]);

const blogPosts = [
  {
    id: 1,
    title: 'Enterprise Web Scraping in 2026: Trends and Predictions',
    date: 'May 5, 2026',
    excerpt: 'As anti-bot technologies evolve, enterprises must adapt their data extraction strategies. Discover the key trends shaping web scraping this year.',
    slug: 'enterprise-web-scraping-trends-2026',
  },
  {
    id: 2,
    title: 'How to Build Scalable Data Pipelines for Large-Scale Scraping',
    date: 'April 22, 2026',
    excerpt: 'Learn the architecture and tools needed to build robust data pipelines that handle millions of pages daily.',
    slug: 'scalable-data-pipelines',
  },
  {
    id: 3,
    title: 'AI-Powered Data Extraction: Beyond Traditional Scraping',
    date: 'April 8, 2026',
    excerpt: 'Explore how machine learning is revolutionizing web data extraction and enabling smarter parsing strategies.',
    slug: 'ai-powered-data-extraction',
  },
  {
    id: 4,
    title: 'Legal Best Practices for Web Scraping',
    date: 'March 25, 2026',
    excerpt: 'Navigate the legal landscape of web scraping with our comprehensive guide to compliance and ethical data collection.',
    slug: 'legal-best-practices-web-scraping',
  },
  {
    id: 5,
    title: 'Competitor Price Monitoring: A Complete Guide',
    date: 'March 12, 2026',
    excerpt: 'Discover how to set up automated price monitoring systems to stay competitive in dynamic markets.',
    slug: 'competitor-price-monitoring-guide',
  },
  {
    id: 6,
    title: 'Data Quality Assurance: Ensuring Accurate Results',
    date: 'February 28, 2026',
    excerpt: 'Learn proven methods to validate and clean scraped data, ensuring your business decisions are based on reliable information.',
    slug: 'data-quality-assurance-methods',
  },
];

export default function BlogPage() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(breadcrumbData)}
      />

      {/* Hero */}
      <Hero
        title="Web Scraping & Data"
        subtitle="Automation Insights"
        description="Stay ahead of the curve with expert analysis, industry trends, and best practices for enterprise data extraction."
      />

      {/* Blog Posts */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
            Latest Articles
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            Expert insights on web scraping, data automation, and industry trends
          </p>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="glass glass-hover rounded-xl p-8 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-primary font-semibold mb-2">{post.date}</p>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary font-semibold hover:underline md:ml-6 md:shrink-0"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* Topics */}
      <Section>
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Explore Topics
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            'Web Scraping',
            'Data Automation',
            'Price Monitoring',
            'E-commerce Data',
            'Real Estate Data',
            'AI & Machine Learning',
            'Data Quality',
            'Industry Trends',
          ].map((topic) => (
            <Link
              key={topic}
              href="/blog"
              className="glass glass-hover rounded-full px-6 py-3 text-foreground font-semibold transition-all duration-300 hover:border-primary"
            >
              {topic}
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready to Unlock Your Data?"
        description="Get started with enterprise web scraping services tailored to your business needs. Contact us for a free consultation."
        buttons={[
          { label: CTA_VARIANTS.primary, href: '/contact', variant: 'primary' },
          { label: 'View Services', href: '/web-scraping-services', variant: 'secondary' },
        ]}
      />
    </>
  );
}