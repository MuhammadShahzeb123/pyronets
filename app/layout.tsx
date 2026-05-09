import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '@/styles/globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#6C63FF',
};

export const metadata: Metadata = {
  title: {
    template: '%s | Pyronets',
    default: 'Web Scraping Services | Pyronets',
  },
  description: 'Enterprise web scraping and data extraction services for businesses worldwide.',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://pyronets.com'),
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta name="theme-color" content="#6C63FF" />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <div className="flex flex-col min-h-screen relative">
          {/* Background effects */}
          <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none" />
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <div className="orb orb-primary w-96 h-96 -top-48 -left-48" />
            <div className="orb orb-secondary w-80 h-80 top-1/3 -right-40" />
            <div className="orb orb-primary w-64 h-64 bottom-0 left-1/4 opacity-20" />
          </div>
          
          <Header />
          <main className="flex-grow relative z-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
