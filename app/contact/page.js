export const metadata = {
  title: 'Contact | Rakshit Waghmare',
  description: 'Contact Rakshit Waghmare for web development, collaboration, or professional inquiries.',
  openGraph: {
    title: 'Contact | Rakshit Waghmare',
    description: 'Contact Rakshit Waghmare for web development, collaboration, or professional inquiries.',
    url: 'https://rakshitwaghmare.dev/contact',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/193617288?v=4',
        width: 1200,
        height: 630,
        alt: 'Rakshit Waghmare - Contact',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Rakshit Waghmare',
    description: 'Contact Rakshit Waghmare for web development, collaboration, or professional inquiries.',
    images: ['https://avatars.githubusercontent.com/u/193617288?v=4'],
  },
};

import Contact from '../../components/sections/Contact';

export default function ContactPage() {
  return <Contact />;
}
