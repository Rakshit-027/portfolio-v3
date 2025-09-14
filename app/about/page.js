export const metadata = {
  title: 'About | Rakshit Waghmare',
  description: 'Learn more about Rakshit Waghmare, a full-stack developer specializing in React, Next.js, and modern web technologies.',
  openGraph: {
    title: 'About | Rakshit Waghmare',
    description: 'Learn more about Rakshit Waghmare, a full-stack developer specializing in React, Next.js, and modern web technologies.',
    url: 'https://rakshitwaghmare.dev/about',
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
    title: 'About | Rakshit Waghmare',
    description: 'Learn more about Rakshit Waghmare, a full-stack developer specializing in React, Next.js, and modern web technologies.',
    images: ['https://avatars.githubusercontent.com/u/193617288?v=4'],
  },
};

import About from '../../components/sections/About';

export default function AboutPage() {
  return <About />;
}
