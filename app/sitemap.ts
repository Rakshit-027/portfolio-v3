import { MetadataRoute } from 'next'
import { getBlogs, getProjects } from '../lib/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://rakshitwaghmare.dev' // Replace with your actual domain
  const currentDate = new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#experience`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#blogs`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]

  try {
    // Dynamic blog pages
    const blogs = await getBlogs()
    const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
      url: `${baseUrl}/blogs/${blog.slug}`,
      lastModified: blog.publishedAt ? new Date(blog.publishedAt) : currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    // Dynamic project pages (if you decide to create individual project pages)
    const projects = await getProjects()
    const projectPages: MetadataRoute.Sitemap = projects
      .filter(project => project.slug)
      .map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: project.date ? new Date(project.date) : currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }))

    return [...staticPages, ...blogPages, ...projectPages]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return staticPages
  }
}