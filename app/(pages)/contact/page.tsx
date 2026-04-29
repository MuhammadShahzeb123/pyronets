import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { CTABanner } from '@/components/CTABanner';
import { generateMetadata } from '@/lib/metadata';
import { CTA_VARIANTS } from '@/lib/constants';

export const metadata: Metadata = generateMetadata({
  title: 'Contact Pyronets | Web Scraping Services Quote',
  description: 'Contact Pyronets for a free consultation. Get a custom quote for your web scraping and data extraction needs. Email or call today.',
  keywords: [
    'contact pyronets',
    'web scraping quote',
    'data extraction quote',
    'pyronets contact',
  ],
  canonicalUrl: 'https://pyronets.com/contact',
});

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Get in"
        subtitle="Touch"
        description="Have questions about our web scraping services? Let's talk. We'll discuss your needs and provide a custom proposal."
      />

      {/* Contact Form Section */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-dark mb-2">Email</h3>
                  <a
                    href="mailto:contact.pyronets@gmail.com"
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    contact.pyronets@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-dark mb-2">Response Time</h3>
                  <p className="text-gray-600">We typically respond within 2 hours during business hours.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-dark mb-2">Available</h3>
                  <p className="text-gray-600">Monday - Friday, 9 AM - 6 PM EST</p>
                </div>

                <div>
                  <h3 className="font-semibold text-dark mb-2">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/company/pyronets"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://twitter.com/pyronets"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">Send us a Message</h2>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Company Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Tell us about your web scraping needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                >
                  Send Message
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4">
                We'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Other Ways to Connect */}
      <Section background="light">
        <h2 className="text-3xl font-bold text-dark mb-8 text-center">
          Other Ways to Get Started
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
            <h3 className="text-xl font-bold text-dark mb-2">Free Trial</h3>
            <p className="text-gray-600 mb-4">
              Start with a free trial. Test our service with your data.
            </p>
            <a
              href="/web-scraping-services"
              className="text-primary font-semibold hover:text-secondary"
            >
              Learn More →
            </a>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
            <h3 className="text-xl font-bold text-dark mb-2">View Pricing</h3>
            <p className="text-gray-600 mb-4">
              Check out our transparent pricing plans and pick what works for you.
            </p>
            <a
              href="/prices"
              className="text-primary font-semibold hover:text-secondary"
            >
              See Plans →
            </a>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
            <h3 className="text-xl font-bold text-dark mb-2">Schedule a Call</h3>
            <p className="text-gray-600 mb-4">
              Book a demo with our team. We'll walk you through everything.
            </p>
            <a
              href="mailto:contact.pyronets@gmail.com"
              className="text-primary font-semibold hover:text-secondary"
            >
              Schedule Call →
            </a>
          </div>
        </div>
      </Section>

      {/* FAQ CTA */}
      <CTABanner
        title="Questions About Our Services?"
        description="Check out our FAQ or reach out directly. We're here to help."
        buttons={[
          { label: 'View FAQ', href: '/web-scraping-learning-center', variant: 'primary' },
          { label: 'Email Us', href: 'mailto:contact.pyronets@gmail.com', variant: 'secondary' },
        ]}
      />
    </>
  );
}
