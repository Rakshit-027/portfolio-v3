export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title', maxLength: 96 } },
    { name: 'content', type: 'text', title: 'Content' },
    { name: 'coverImage', type: 'image', title: 'Cover Image' },
    { name: 'publishedAt', type: 'datetime', title: 'Published At' },
    { name: 'author', type: 'string', title: 'Author' }
  ]
}
