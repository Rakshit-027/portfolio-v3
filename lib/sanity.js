import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'svacyxrb',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'portfolio',
  apiVersion: '2025-09-14',
  useCdn: true, // Enable for production
})

// GROQ queries
export const queries = {
  allProjects: `*[_type == "project"] | order(featured desc, date desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "image": image.asset->url,
    url,
    github,
    technologies,
    category,
    subcategory,
    date,
    featured,
    status
  }`,
  
  allBlogs: `*[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    body,
    "mainImage": mainImage.asset->url,
    publishedAt,
    author,
    categories,
    tags,
    views,
    featured
  }`,
  
  projectById: `*[_type == "project" && _id == $id][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    "image": image.asset->url,
    url,
    github,
    technologies,
    category,
    subcategory,
    date,
    featured,
    status
  }`,
  
  blogBySlug: `*[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    body,
    "mainImage": mainImage.asset->url,
    publishedAt,
    author,
    categories,
    tags,
    views,
    featured
  }`
}

// Helper functions
export async function getProjects() {
  try {
    return await client.fetch(queries.allProjects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export async function getBlogs() {
  try {
    return await client.fetch(queries.allBlogs)
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return []
  }
}

export async function getProjectById(id) {
  try {
    return await client.fetch(queries.projectById, { id })
  } catch (error) {
    console.error('Error fetching project:', error)
    return null
  }
}

export async function getBlogBySlug(slug) {
  try {
    return await client.fetch(queries.blogBySlug, { slug })
  } catch (error) {
    console.error('Error fetching blog:', error)
    return null
  }
}