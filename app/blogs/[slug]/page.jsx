import { getBlogBySlug } from '../../../lib/sanity'
import BlogPost from './BlogPost'

export async function generateMetadata({ params }) {
  const blog = await getBlogBySlug(params.slug)
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }

  const baseUrl = 'https://rakshitwaghmare.dev'
  
  return {
    title: blog.title,
    description: blog.excerpt || blog.body?.substring(0, 160) || 'Read this blog post by Rakshit Waghmare',
    keywords: [
      ...(blog.tags || []),
      ...(blog.categories || []),
      'Rakshit Waghmare',
      'Blog',
      'Web Development',
      'Programming',
      'Software Engineering'
    ],
    authors: [{ name: blog.author || 'Rakshit Waghmare' }],
    creator: blog.author || 'Rakshit Waghmare',
    publisher: 'Rakshit Waghmare',
    alternates: {
      canonical: `/blogs/${params.slug}`,
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: `${baseUrl}/blogs/${params.slug}`,
      title: blog.title,
      description: blog.excerpt || blog.body?.substring(0, 160),
      siteName: 'Rakshit Waghmare Portfolio',
      images: blog.mainImage ? [
        {
          url: blog.mainImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        }
      ] : [
        {
          url: 'https://avatars.githubusercontent.com/u/193617288?v=4',
          width: 1200,
          height: 630,
          alt: blog.title,
        }
      ],
      publishedTime: blog.publishedAt,
      modifiedTime: blog.publishedAt,
      authors: [blog.author || 'Rakshit Waghmare'],
      tags: blog.tags || [],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt || blog.body?.substring(0, 160),
      images: [blog.mainImage || 'https://avatars.githubusercontent.com/u/193617288?v=4'],
      creator: '@rakshitwaghmare', // Replace with actual handle
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
    other: {
      'article:published_time': blog.publishedAt,
      'article:modified_time': blog.publishedAt,
      'article:author': blog.author || 'Rakshit Waghmare',
      'article:section': blog.categories?.[0] || 'Technology',
      'article:tag': blog.tags?.join(', ') || '',
    },
  }
}

export default BlogPost