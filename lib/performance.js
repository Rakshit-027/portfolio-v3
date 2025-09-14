// Performance monitoring and web vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals';

function getConnectionSpeed() {
  return 'connection' in navigator &&
    'effectiveType' in navigator.connection
    ? navigator.connection.effectiveType
    : '';
}

function sendToAnalytics(metric, options) {
  const page = Object.assign(
    {
      path: window.location.pathname,
      search: window.location.search,
      hash: window.location.hash,
    },
    options
  );

  const body = {
    dsn: process.env.NEXT_PUBLIC_ANALYTICS_ID, // Replace with your analytics ID
    id: metric.id,
    page: page.path,
    href: location.href,
    event_name: metric.name,
    value: metric.value.toString(),
    speed: getConnectionSpeed(),
  };

  if (options.debug) {
    console.log('[Analytics]', metric.name, JSON.stringify(body, null, 2));
  }

  const blob = new Blob([new URLSearchParams(body).toString()], {
    type: 'application/x-www-form-urlencoded',
  });
  
  if (navigator.sendBeacon) {
    navigator.sendBeacon(vitalsUrl, blob);
  } else {
    fetch(vitalsUrl, {
      body: blob,
      method: 'POST',
      credentials: 'omit',
      keepalive: true,
    }).catch(console.error);
  }
}

export function reportWebVitals(options = {}) {
  try {
    getFID((metric) => sendToAnalytics(metric, options));
    getTTFB((metric) => sendToAnalytics(metric, options));
    getLCP((metric) => sendToAnalytics(metric, options));
    getCLS((metric) => sendToAnalytics(metric, options));
    getFCP((metric) => sendToAnalytics(metric, options));
  } catch (err) {
    console.error('[Web Vitals]', err);
  }
}

// SEO Performance utilities
export const preloadCriticalAssets = () => {
  // Preload critical fonts
  const fontPreloads = [
    { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
    // Add more fonts as needed
  ];

  fontPreloads.forEach(({ href, as, type, crossorigin }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    if (crossorigin) link.crossOrigin = crossorigin;
    document.head.appendChild(link);
  });
};

// Lazy load non-critical resources
export const lazyLoadResources = () => {
  // Lazy load analytics
  setTimeout(() => {
    if (typeof window !== 'undefined') {
      // Load analytics script here
      // Example: Google Analytics
      /*
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      script.async = true;
      document.head.appendChild(script);
      */
    }
  }, 3000); // Wait 3 seconds before loading non-critical resources
};

// Image optimization utilities
export const getOptimizedImageSrc = (src, width, quality = 75) => {
  // If using a CDN like Cloudinary or similar
  // return `${src}?w=${width}&q=${quality}&f=auto`;
  
  // For Next.js built-in optimization
  return src;
};

export const generateImageSizes = (breakpoints = [640, 768, 1024, 1280, 1920]) => {
  return breakpoints.map((bp, index) => {
    if (index === breakpoints.length - 1) {
      return `${bp}px`;
    }
    return `(max-width: ${bp}px) ${bp}px`;
  }).join(', ');
};