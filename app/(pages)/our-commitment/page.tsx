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
  title: 'Our Commitment | Pyronets',
  description: 'Pyronets is committed to delivering exceptional web scraping services. Learn about our dedication to quality, transparency, and client success.',
  keywords: [
    'our commitment',
    'web scraping services',
    'pyronets promise',
    'data extraction commitment',
  ],
  canonicalUrl: 'https://pyronets.com/our-commitment',
});

const breadcrumbData = breadcrumbSchema([
  { name: 'Home', url: 'https://pyronets.com' },
  { name: 'Our Commitment', url: 'https://pyronets.com/our-commitment' },
]);

const caseStudy = {
  industry: 'Social Media Analytics',
  project: 'Facebook Scraper Project',
  challenge: 'Large-scale Facebook data extraction requiring handling of dynamic content, pagination, authentication, and rate limiting across millions of public posts, pages, and groups.',
  solution: 'Built a robust Python-based scraping system using Playwright and Selenium with multi-threaded architecture, intelligent request scheduling, CAPTCHA handling, and comprehensive error recovery mechanisms. Implemented proxy rotation, session management, and data validation pipelines.',
  results: [
    'Successfully extracted 1M+ posts, comments, and reactions',
    'Handled complex pagination across 10,000+ pages',
    'Achieved 99.5% data accuracy with automated validation',
    'Reduced data collection time by 80% vs manual methods',
    'Built scalable infrastructure handling 100K+ requests/day',
  ],
  githubUrl: 'https://github.com/MuhammadShahzeb123/facebook-scraper',
  techStack: ['Python', 'Playwright', 'Selenium', 'BeautifulSoup', 'Redis', 'PostgreSQL'],
};

export default function CaseStudiesPage() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(breadcrumbData)}
      />

      {/* Hero */}
      <Hero
        title="Our Commitment"
        subtitle="Your Success Is Our Priority"
        description="We may not have enterprise clients yet, but we have the expertise, dedication, and passion to make your project our top priority. You will be our first priority customer."
      />

      {/* Honesty Section */}
      <Section background="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Us?</h2>
          <div className="glass rounded-xl p-8">
            <p className="text-lg text-muted-foreground mb-6">
              We are honest about where we are. Pyronets is a growing company without enterprise clients yet. 
              But what we lack in experience, we make up for with dedication, hard work, and proven technical expertise.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              When you work with us, <span className="text-primary font-semibold">you become our priority</span>. 
              We don't have a roster of clients to juggle — we can focus entirely on your project and ensure it gets 
              the attention it deserves.
            </p>
            <p className="text-lg text-muted-foreground">
              We've worked on projects like the one mentioned below, and we know the work inside and out. 
              Your project will receive our full effort because your success is our success.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Actual Case Study */}
      <Section>
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Our Work
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass glass-hover rounded-xl p-8 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">📊</span>
              <div>
                <p className="text-sm text-primary font-semibold">{caseStudy.industry}</p>
                <h3 className="text-2xl font-bold text-foreground">{caseStudy.project}</h3>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Challenge</p>
                <p className="text-muted-foreground">{caseStudy.challenge}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Solution</p>
                <p className="text-muted-foreground">{caseStudy.solution}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Results</p>
                <ul className="space-y-1">
                  {caseStudy.results.map((result) => (
                    <li key={result} className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                View Project on GitHub
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Why We're Different */}
      <Section background="light">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Why Work With Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="glass glass-hover rounded-xl p-6 text-center transition-all duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-foreground mb-2">You Are Our Priority</h3>
            <p className="text-muted-foreground">
              Without existing enterprise clients, we can dedicate our full attention to your project. Your success is our only focus.
            </p>
          </div>

          <div className="glass glass-hover rounded-xl p-6 text-center transition-all duration-300">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="text-xl font-bold text-foreground mb-2">Proven Expertise</h3>
            <p className="text-muted-foreground">
              We have the technical skills and knowledge to handle complex web scraping projects. Our GitHub project demonstrates our capabilities.
            </p>
          </div>

          <div className="glass glass-hover rounded-xl p-6 text-center transition-all duration-300">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-foreground mb-2">Transparent & Honest</h3>
            <p className="text-muted-foreground">
              No exaggerated claims or fake case studies. We tell it like it is and let our work speak for itself.
            </p>
          </div>
        </div>
      </Section>

      {/* Commitment Statement */}
      <Section>
        <div className="glass rounded-2xl p-12 animate-fade-in-up">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Promise to You</h2>
            <blockquote className="text-xl text-muted-foreground mb-8 italic">
              "We may not have a long list of enterprise clients, but what we offer is something those companies can't — 
              undivided attention, genuine dedication, and a team that will work as hard as possible to prove ourselves through your project."
            </blockquote>
            <p className="text-lg font-semibold text-foreground">
              Let's build something great together.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready to Get Started?"
        description="Contact us today to discuss your project. We'll work hard to deliver results that exceed your expectations."
        buttons={[
          { label: CTA_VARIANTS.primary, href: '/contact', variant: 'primary' },
          { label: 'View Our Services', href: '/web-scraping-services', variant: 'secondary' },
        ]}
      />
    </>
  );
}