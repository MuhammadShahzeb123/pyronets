// lib/schema.ts
// JSON-LD schema generators for SEO

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pyronets',
    url: 'https://pyronets.com/',
    logo: 'https://pyronets.com/assets/images/logo.svg',
    description: 'Managed web scraping and data extraction services for enterprises.',
      email: 'contactus@pyronets.com',
    sameAs: [
      'https://linkedin.com/company/pyronets',
      'https://twitter.com/pyronets',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
    email: 'contactus@pyronets.com',
      contactType: 'Customer Service',
      availableLanguage: 'English',
    },
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    provider: {
      '@type': 'Organization',
      name: 'Pyronets',
    },
    description: service.description,
    serviceType: 'Web Scraping',
    areaServed: 'Worldwide',
    url: service.url,
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Organization',
      name: article.author || 'Pyronets',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pyronets',
      logo: 'https://pyronets.com/assets/images/logo.svg',
    },
  };
}
