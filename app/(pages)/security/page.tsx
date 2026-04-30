import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Security | Pyronets Data Protection',
  description: 'Enterprise-grade security, compliance, and data privacy at Pyronets. SOC 2 Type II certified.',
  keywords: ['data security', 'data privacy', 'compliance', 'GDPR', 'SOC 2'],
  canonicalUrl: 'https://pyronets.com/security',
});

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Enterprise"
        subtitle="Security"
        description="Your data security is our top priority. Enterprise-grade protection, compliance, and privacy."
      />

      {/* Security Features */}
      <Section background="light">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Our Security Commitment
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Data Encryption',
              description:
                'All data in transit is encrypted with TLS 1.3. Data at rest is encrypted using AES-256 encryption.',
            },
            {
              title: 'Access Control',
              description:
                'Role-based access control, multi-factor authentication, and principle of least privilege for all systems.',
            },
            {
              title: 'Infrastructure Security',
              description:
                'Private cloud infrastructure, network isolation, firewall rules, and DDoS protection.',
            },
            {
              title: 'Monitoring & Auditing',
              description:
                'Real-time security monitoring, automated intrusion detection, and comprehensive audit logging.',
            },
            {
              title: 'Compliance',
              description:
                'SOC 2 Type II certified. GDPR, CCPA, and HIPAA compliant. Regular security audits and penetration testing.',
            },
            {
              title: 'Incident Response',
              description:
                'Dedicated incident response team, 24/7 monitoring, and documented response procedures.',
            },
          ].map((feature) => (
            <div key={feature.title} className="glass glass-hover rounded-xl p-6 transition-all duration-300">
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section>
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Certifications &amp; Compliance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              cert: 'SOC 2 Type II',
              description: 'Independently audited and certified for security, availability, and integrity.',
            },
            {
              cert: 'GDPR Compliant',
              description: 'Full GDPR compliance for processing personal data of EU residents.',
            },
            {
              cert: 'CCPA Compliant',
              description: 'California Consumer Privacy Act compliance and data subject rights support.',
            },
            {
              cert: 'HIPAA Ready',
              description: 'Healthcare data handling with Business Associate Agreements available.',
            },
            {
              cert: 'ISO 27001',
              description: 'Information Security Management System certification in progress.',
            },
            {
              cert: 'Regular Audits',
              description: 'Annual penetration testing and security audits by independent auditors.',
            },
          ].map((item) => (
            <div key={item.cert} className="glass glass-hover rounded-xl p-6 transition-all duration-300">
              <h3 className="text-lg font-bold text-foreground mb-2">{item.cert}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Data Privacy */}
      <Section background="light">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Data Privacy
        </h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {[
            {
              title: 'Data Ownership',
              description: 'You own all data you provide to Pyronets. We never sell or share your data.',
            },
            {
              title: 'Data Retention',
              description:
                'Data is retained only as long as necessary. Automatic deletion policies comply with your retention requirements.',
            },
            {
              title: 'Subprocessors',
              description: 'We use vetted subprocessors for cloud infrastructure and other services. Full transparency provided.',
            },
            {
              title: 'Data Localization',
              description: 'Data can be stored in specific regions (US, EU, etc.) to meet regulatory requirements.',
            },
            {
              title: 'Data Export',
              description: 'You can export your data at any time in standard formats. No lock-in.',
            },
            {
              title: 'Deletion',
              description: 'Request complete data deletion anytime. Deletion is irreversible and permanent.',
            },
          ].map((item) => (
            <div key={item.title} className="border-l-4 border-primary pl-6">
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Security Team */}
      <Section>
        <div className="max-w-2xl mx-auto glass-strong rounded-2xl p-12 text-center border border-primary/20">
          <h2 className="text-3xl font-bold text-foreground mb-4">Security Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Our security team is ready to discuss your security and compliance requirements.
          </p>
          <a
            href="mailto:security@pyronets.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
          >
            Contact Security Team
          </a>
        </div>
      </Section>
    </>
  );
}
