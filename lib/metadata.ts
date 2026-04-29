// lib/metadata.ts
// Centralized metadata configuration for all pages
import { Metadata } from 'next';

export const siteConfig = {
  name: 'Pyronets',
  description: 'Managed web scraping and data extraction services for enterprises.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://pyronets.com',
  ogImage: '/og-pyronets.png',
  twitterHandle: '@pyronets',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact.pyronets@gmail.com',
  linkedIn: 'https://linkedin.com/company/pyronets',
  socialLinks: {
    twitter: 'https://twitter.com/pyronets',
    linkedin: 'https://linkedin.com/company/pyronets',
  },
};

interface MetadataParams {
  title: string;
  description: string;
  url?: string;
  ogImage?: string;
  keywords?: string[];
  author?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
}

export function generateMetadata(params: MetadataParams): Metadata {
  const {
    title,
    description,
    url = siteConfig.url,
    ogImage = siteConfig.ogImage,
    keywords,
    author,
    noIndex = false,
    canonicalUrl,
  } = params;

  const fullUrl = url.startsWith('http') ? url : `${siteConfig.url}${url}`;
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${siteConfig.url}${ogImage}`;

  return {
    title,
    description,
    keywords,
    authors: author ? [{ name: author }] : undefined,
    creator: 'Pyronets',
    openGraph: {
      type: 'website',
      url: fullUrl,
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: siteConfig.name,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title,
      description,
      images: [ogImageUrl],
    },
    robots: noIndex ? 'noindex' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    alternates: {
      canonical: canonicalUrl || fullUrl,
    },
  };
}

export function generateJsonLd(data: Record<string, any>) {
  return {
    __html: JSON.stringify(data),
  };
}
