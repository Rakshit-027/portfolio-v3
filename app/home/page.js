export const metadata = {
  title: 'Home | Rakshit Waghmare',
  description: 'Welcome to the portfolio of Rakshit Waghmare, full-stack developer specializing in React, Next.js, and modern web technologies.',
  openGraph: {
    title: 'Home | Rakshit Waghmare',
    description: 'Welcome to the portfolio of Rakshit Waghmare, full-stack developer specializing in React, Next.js, and modern web technologies.',
    url: 'https://rakshitwaghmare.dev',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/193617288?v=4',
        width: 1200,
        height: 630,
        alt: 'Rakshit Waghmare - Home',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home | Rakshit Waghmare',
    description: 'Welcome to the portfolio of Rakshit Waghmare, full-stack developer specializing in React, Next.js, and modern web technologies.',
    images: ['https://avatars.githubusercontent.com/u/193617288?v=4'],
  },
};

import Home from '../../components/sections/Home';

export default function HomePage() {
  return <Home />;
}
