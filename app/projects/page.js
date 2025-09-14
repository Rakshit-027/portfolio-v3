export const metadata = {
  title: 'Projects | Rakshit Waghmare',
  description: 'Explore web development projects by Rakshit Waghmare, including React, Next.js, Node.js, and more.',
  openGraph: {
    title: 'Projects | Rakshit Waghmare',
    description: 'Explore web development projects by Rakshit Waghmare, including React, Next.js, Node.js, and more.',
    url: 'https://rakshitwaghmare.dev/projects',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/193617288?v=4',
        width: 1200,
        height: 630,
        alt: 'Rakshit Waghmare - Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Rakshit Waghmare',
    description: 'Explore web development projects by Rakshit Waghmare, including React, Next.js, Node.js, and more.',
    images: ['https://avatars.githubusercontent.com/u/193617288?v=4'],
  },
};

import Projects from '../../components/sections/Projects';

export default function ProjectsPage() {
  return <Projects />;
}
