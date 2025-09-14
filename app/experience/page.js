export const metadata = {
  title: 'Experience | Rakshit Waghmare',
  description: 'Professional experience of Rakshit Waghmare in web development, React, Next.js, and more.',
  openGraph: {
    title: 'Experience | Rakshit Waghmare',
    description: 'Professional experience of Rakshit Waghmare in web development, React, Next.js, and more.',
    url: 'https://rakshitwaghmare.dev/experience',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/193617288?v=4',
        width: 1200,
        height: 630,
        alt: 'Rakshit Waghmare - Experience',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experience | Rakshit Waghmare',
    description: 'Professional experience of Rakshit Waghmare in web development, React, Next.js, and more.',
    images: ['https://avatars.githubusercontent.com/u/193617288?v=4'],
  },
};

import Experience from '../../components/sections/Experience';

export default function ExperiencePage() {
  return <Experience />;
}
