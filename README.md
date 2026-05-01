# Pyronets - Next.js Web Scraping Services Platform

A modern, SEO-optimized Next.js 14 application for enterprise web scraping and data extraction services.

## 🚀 Features

- **Next.js 14** with App Router for optimal performance
- **TypeScript** with strict mode for type safety
- **React 18** with Server Components support
- **Tailwind CSS** with custom Pyronets color theme
- **next-seo** for comprehensive SEO optimization
- **Responsive Design** optimized for mobile and desktop
- **Dynamic Content Support** with variable-based templates
- **Schema.org Markup** for rich search results
- **Open Graph & Twitter Cards** for social sharing
- **Performance Optimized** with image optimization and code splitting

## 📁 Project Structure

```
pyronets-nextjs/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with HTML structure
│   ├── page.tsx                 # Homepage
│   └── (pages)/                 # Route group for all pages
│       ├── about/
│       ├── contact/
│       ├── competitor-price-monitoring/
│       ├── data-for-ai/
│       ├── how-it-works/
│       ├── job-listings-data/
│       ├── privacy-policy/
│       ├── prices/
│       ├── product-data-scraping/
│       ├── real-estate-data/
│       ├── security/
│       ├── solution/
│       ├── terms-conditions/
│       └── web-scraping-services/
├── components/                  # React components
│   ├── layout/
│   │   ├── Header.tsx          # Navigation header with mobile menu
│   │   ├── Footer.tsx          # Footer with links
│   │   └── Layout.tsx          # Layout wrapper
│   ├── CTABanner.tsx           # Call-to-action section
│   ├── FAQ.tsx                 # FAQ accordion component
│   ├── Hero.tsx                # Hero section component
│   ├── Section.tsx             # Reusable section container
│   └── ServiceCard.tsx         # Service card component
├── lib/                         # Utilities and configuration
│   ├── constants.ts            # Global constants and services data
│   ├── metadata.ts             # SEO metadata generation
│   ├── schema.ts               # JSON-LD schema generators
│   └── utils.ts                # Utility functions
├── styles/
│   └── globals.css             # Global Tailwind styles
├── public/                      # Static assets (add images here)
├── package.json                # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── .env.example               # Environment variables template
└── .gitignore                 # Git ignore rules
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
```bash
cd e:\Code\pyronets-nextjs
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Setup environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```
NEXT_PUBLIC_SITE_URL=https://pyronets.com
NEXT_PUBLIC_CONTACT_EMAIL=contact.pyronets@gmail.com
NEXT_PUBLIC_COMPANY_NAME=Pyronets
```

4. **Run development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🏗️ Building for Production

```bash
npm run build
npm run start
```

## 📄 Pages Overview

### Core Pages (Completed)
- **Homepage** (`/`) - Main landing page with services overview
- **Web Scraping Services** (`/web-scraping-services`) - Main service page
- **Product Data Scraping** (`/product-data-scraping`) - E-commerce data extraction
- **Competitor Price Monitoring** (`/competitor-price-monitoring`) - Price intelligence
- **Real Estate Data** (`/real-estate-data`) - Property data extraction
- **Job Listings Data** (`/job-listings-data`) - Job market intelligence
- **Data for AI** (`/data-for-ai`) - AI training data collection
- **Solutions** (`/solution`) - Services overview page
- **How It Works** (`/how-it-works`) - Process explanation
- **About** (`/about`) - Company information
- **Contact** (`/contact`) - Contact form and information
- **Pricing** (`/prices`) - Pricing plans
- **Security** (`/security`) - Security and compliance
- **Privacy Policy** (`/privacy-policy`) - Privacy policy
- **Terms of Service** (`/terms-conditions`) - Terms and conditions

### Remaining Pages to Create
These are placeholder pages that follow the same pattern as completed pages:
- Blog and Learning Center
- Case Studies  
- Industry-specific pages (ecommerce, finance, lead generation, market research, etc.)
- Comparison pages (vs-apify, vs-brightdata, vs-octoparse, vs-scrapy)
- Utility pages (api-documentation, robots-txt-checker, roi-calculator)

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize colors:
```js
primary: '#6C63FF',      // Purple
secondary: '#00D4AA',    // Teal
dark: '#0A2540',         // Dark blue
```

### Content
Most content is stored in `lib/constants.ts`:
- Services data
- Navigation items
- CTA text variants
- Industry solutions

### SEO
- Page metadata is generated using `generateMetadata()` from `lib/metadata.ts`
- Schema.org markup is generated using functions in `lib/schema.ts`
- Add JSON-LD scripts to pages using `<Script>` component

## 📱 Responsive Design

All components are fully responsive:
- Mobile-first approach
- Tailwind CSS breakpoints (sm, md, lg, xl)
- Mobile menu in header
- Optimized images for all screen sizes

## ⚡ Performance Optimizations

- **Image Optimization**: Next.js Image component with AVIF/WebP support
- **Code Splitting**: Automatic per-page code splitting
- **CSS-in-JS**: Tailwind CSS with purging
- **Minification**: SWC compiler for fast minification
- **Caching**: Browser caching headers configured in `next.config.js`

## 🔒 Security

- Security headers configured in `next.config.js`
- No sensitive data in client-side code
- Environment variables for configuration
- HTTPS recommended for production

## 📊 SEO Features

- Meta titles and descriptions optimized
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs
- JSON-LD structured data
- Breadcrumb navigation
- Mobile-friendly design
- Fast loading times
- XML sitemap support

## 🔐 HTTPS Configuration (REQUIRED for Production)

All PRs MUST include proper HTTPS configuration. Do not deploy without HTTPS.

### Self-Hosted HTTPS Setup

1. **Generate SSL Certificates** (on server):
```bash
mkdir -p ssl
openssl req -x509 -newkey rsa:2048 -keyout ssl/key.pem -out ssl/cert.pem -days 365 -nodes -subj '/CN=yourdomain.com'
```

2. **Environment Variables**:
```bash
export SSL_KEY_PATH=./ssl/key.pem
export SSL_CERT_PATH=./ssl/cert.pem
export PORT=80
```

3. **Start Server with HTTPS**:
```bash
# Using custom server.js (recommended for HTTPS)
node server.js

# Or set environment variables and run:
SSL_KEY_PATH=./ssl/key.pem SSL_CERT_PATH=./ssl/cert.pem node server.js
```

4. **For Production with Real SSL** (Let's Encrypt):
```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Generate certificate
sudo certbot --nginx -d pyronets.com -d www.pyronets.com

# Or for standalone (Next.js must be running):
sudo certbot certonly --standalone -d pyronets.com -d www.pyronets.com
```

5. **Update nginx config** (if using nginx as reverse proxy):
```nginx
server {
    listen 80;
    server_name pyronets.com www.pyronets.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name pyronets.com www.pyronets.com;
    
    ssl_certificate /etc/letsencrypt/live/pyronets.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/pyronets.com/privkey.pem;
    
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Cloudflare SSL Settings
If using Cloudflare, set SSL/TLS mode to:
- **Full** (strict) - recommended for self-hosted
- **Flexible** - not recommended (security risk)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
Next.js can be deployed to:
- AWS Amplify
- Netlify
- Docker containers
- Self-hosted servers

See [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)

## 📝 Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run export     # Export static site (if needed)
```

## 🔧 Technology Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3.3
- **Language**: TypeScript 5.3
- **SEO**: next-seo 6.4
- **Package Manager**: npm

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🤝 Contributing

Guidelines for extending the project:

1. **Adding a new page**:
   - Create new directory under `app/(pages)/[pagename]/`
   - Create `page.tsx` file with proper metadata
   - Follow existing page structure and components

2. **Creating new components**:
   - Place in `components/` directory
   - Use TypeScript interfaces for props
   - Include proper accessibility attributes

3. **SEO Best Practices**:
   - Use `generateMetadata()` for page metadata
   - Include JSON-LD schema markup
   - Optimize meta descriptions (150-160 chars)
   - Add breadcrumb navigation

## 📄 License

All content and code are property of Pyronets.

## ✉️ Contact

For questions about this project:
- Email: contact.pyronets@gmail.com
- Website: https://pyronets.com

---

**Last Updated**: 2024
