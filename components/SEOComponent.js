import Head from 'next/head';

const SEOComponent = ({
  title = 'Rakshit Waghmare - Full Stack Developer Portfolio',
  description = 'Full-stack developer and software engineer specializing in React, Next.js, Node.js, and modern web technologies.',
  keywords = 'Rakshit Waghmare, Full Stack Developer, React, Next.js, JavaScript, Web Developer',
  ogImage = 'https://avatars.githubusercontent.com/u/193617288?v=4',
  ogUrl = 'https://rakshitwaghmare.dev',
  structuredData = null,
  noindex = false,
  canonical = null
}) => {
  const siteUrl = 'https://rakshitwaghmare.dev'; // Replace with your actual domain
  const fullTitle = title.includes('Rakshit Waghmare') ? title : `${title} | Rakshit Waghmare`;
  const canonicalUrl = canonical || ogUrl;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Rakshit Waghmare" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Rakshit Waghmare Portfolio" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Rakshit Waghmare - Full Stack Developer" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@rakshitwaghmare" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Rakshit Waghmare - Full Stack Developer" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#64ffda" />
      <meta name="msapplication-TileColor" content="#0a192f" />
      <meta name="application-name" content="Rakshit Waghmare Portfolio" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://avatars.githubusercontent.com" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      {/* DNS Prefetch for External Resources */}
      <link rel="dns-prefetch" href="https://api.resend.com" />
      <link rel="dns-prefetch" href="https://www.google.com" />
      
      {/* Manifest for PWA (optional) */}
      {/* <link rel="manifest" href="/manifest.json" /> */}
    </Head>
  );
};

export default SEOComponent;