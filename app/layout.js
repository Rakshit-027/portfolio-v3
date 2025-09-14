import './globals.css'
import StyledComponentsRegistry from '../lib/registry'

export const metadata = {
  title: {
    default: 'Rakshit Waghmare - Full Stack Developer Portfolio',
    template: '%s | Rakshit Waghmare'
  },
  description: 'Full-stack developer and software engineer specializing in React, Next.js, Node.js, and modern web technologies. View my portfolio, projects, and get in touch for collaboration.',
  keywords: [
    'Rakshit Waghmare',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'JavaScript Developer',
    'Frontend Developer',
    'Backend Developer',
    'Web Developer',
    'Software Engineer',
    'Portfolio',
    'Node.js',
    'TypeScript',
    'Python',
    'Web Development',
    'Software Development'
  ],
  authors: [{ name: 'Rakshit Waghmare' }],
  creator: 'Rakshit Waghmare',
  publisher: 'Rakshit Waghmare',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rakshitwaghmare.dev'), // Replace with your actual domain
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
  other: {
    'google-site-verification': 'your-google-verification-code', // Add your verification code
    'msvalidate.01': 'your-bing-verification-code', // Add Bing verification
    'p:domain_verify': 'your-pinterest-verification-code', // Add Pinterest verification
    'sitemap': '/sitemap.xml',
    'robots': '/robots.txt',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rakshitwaghmare.dev', // Replace with your actual domain
    title: 'Rakshit Waghmare - Full Stack Developer Portfolio',
    description: 'Full-stack developer and software engineer specializing in React, Next.js, Node.js, and modern web technologies. View my portfolio, projects, and get in touch.',
    siteName: 'Rakshit Waghmare Portfolio',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/193617288?v=4',
        width: 1200,
        height: 630,
        alt: 'Rakshit Waghmare - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rakshit Waghmare - Full Stack Developer Portfolio',
    description: 'Full-stack developer specializing in React, Next.js, and modern web technologies.',
    images: ['https://avatars.githubusercontent.com/u/193617288?v=4'],
    creator: '@rakshitwaghmare', // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: 'https://avatars.githubusercontent.com/u/193617288?v=4', sizes: '32x32', type: 'image/png' },
      { url: 'https://avatars.githubusercontent.com/u/193617288?v=4', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: 'https://avatars.githubusercontent.com/u/193617288?v=4', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rakshit Waghmare',
    jobTitle: 'Full Stack Developer',
    description: 'Full-stack developer and software engineer specializing in React, Next.js, Node.js, and modern web technologies.',
    url: 'https://rakshitwaghmare.dev', // Replace with your actual domain
    image: 'https://avatars.githubusercontent.com/u/193617288?v=4',
    sameAs: [
      'https://github.com/rakshitwaghmare', // Replace with your actual profiles
      'https://linkedin.com/in/rakshitwaghmare',
      'https://twitter.com/rakshitwaghmare',
      'https://instagram.com/rakshitwaghmare'
    ],
    knowsAbout: [
      'JavaScript',
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'Python',
      'Web Development',
      'Software Engineering',
      'Frontend Development',
      'Backend Development',
      'Full Stack Development'
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Your University/College' // Update with actual education
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance/Your Company' // Update with actual work info
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#64ffda" />
        <meta name="color-scheme" content="dark light" />
        
        {/* Preload Critical Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* DNS Prefetch for External Resources */}
        <link rel="dns-prefetch" href="//avatars.githubusercontent.com" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Performance Hints */}
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        
        {/* Add Google Analytics or other tracking here */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script> */}
      </head>
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}