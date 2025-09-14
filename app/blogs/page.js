import { generateMetadata as generatePageMetadata } from '../lib/seo-utils';

export const metadata = generatePageMetadata({
  title: 'Blog Posts - Rakshit Waghmare',
  description: 'Read my latest blog posts about web development, React, Next.js, Node.js, and software engineering insights. Stay updated with the latest trends in technology.',
  keywords: [
    'blog', 
    'web development', 
    'React', 
    'Next.js', 
    'JavaScript', 
    'TypeScript',
    'Node.js',
    'software engineering',
    'programming',
    'frontend development',
    'backend development',
    'tutorials',
    'tech articles',
    'Rakshit Waghmare'
  ],
  ogTitle: 'Latest Blog Posts by Rakshit Waghmare',
  ogDescription: 'Explore insights, tutorials, and thoughts on modern web development, software engineering, and technology trends.',
  canonical: 'https://rakshitwaghmare.dev/blogs',
  alternates: {
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
  other: {
    'article:author': 'Rakshit Waghmare',
    'article:section': 'Technology',
    'og:type': 'website',
  },
});

export default function BlogsPage() {
  return (
    <div className="blogs_page">
      <h1>All Blog Posts</h1>
      <p>This will show all blog posts from Sanity CMS.</p>
      <p>The main blogs section is integrated in the home page. Visit <a href="/#blogs">Home Page Blogs Section</a></p>
    </div>
  );
}