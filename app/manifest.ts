import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rakshit Waghmare - Full Stack Developer Portfolio',
    short_name: 'Rakshit Waghmare',
    description: 'Full-stack developer and software engineer specializing in React, Next.js, Node.js, and modern web technologies.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a192f',
    theme_color: '#64ffda',
    lang: 'en',
    orientation: 'portrait-primary',
    categories: ['portfolio', 'developer', 'technology'],
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    shortcuts: [
      {
        name: 'About',
        short_name: 'About',
        description: 'Learn more about Rakshit Waghmare',
        url: '/#about',
        icons: [{ src: '/icon-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'Projects',
        short_name: 'Projects',
        description: 'View portfolio projects',
        url: '/#projects',
        icons: [{ src: '/icon-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'Blog',
        short_name: 'Blog',
        description: 'Read latest blog posts',
        url: '/#blogs',
        icons: [{ src: '/icon-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'Contact',
        short_name: 'Contact',
        description: 'Get in touch',
        url: '/#contact',
        icons: [{ src: '/icon-192x192.png', sizes: '192x192' }],
      },
    ],
  }
}