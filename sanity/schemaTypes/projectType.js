export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { 
      name: 'title', 
      type: 'string', 
      title: 'Title',
      validation: Rule => Rule.required()
    },
    { 
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' }
    },
    { 
      name: 'description', 
      type: 'text', 
      title: 'Description',
      validation: Rule => Rule.required()
    },
    { 
      name: 'image', 
      type: 'image', 
      title: 'Project Image',
      options: { hotspot: true }
    },
    { 
      name: 'url', 
      type: 'url', 
      title: 'Live Project URL' 
    },
    { 
      name: 'github', 
      type: 'url', 
      title: 'GitHub Repository' 
    },
    {
      name: 'category',
      type: 'string',
      title: 'Main Category',
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          { title: 'Full Stack', value: 'fullstack' },
          { title: 'Mobile', value: 'mobile' },
          { title: 'Desktop', value: 'desktop' },
          { title: 'DevOps', value: 'devops' },
          { title: 'Other', value: 'other' }
        ]
      }
    },
    {
      name: 'subcategory',
      type: 'string',
      title: 'Subcategory',
      options: {
        list: [
          { title: 'Web Application', value: 'web-app' },
          { title: 'E-commerce', value: 'ecommerce' },
          { title: 'Landing Page', value: 'landing' },
          { title: 'Dashboard', value: 'dashboard' },
          { title: 'Portfolio', value: 'portfolio' },
          { title: 'Blog', value: 'blog' },
          { title: 'API', value: 'api' },
          { title: 'Database', value: 'database' },
          { title: 'Authentication', value: 'auth' },
          { title: 'React App', value: 'react' },
          { title: 'Next.js App', value: 'nextjs' },
          { title: 'Node.js App', value: 'nodejs' },
          { title: 'Mobile App', value: 'mobile-app' },
          { title: 'Game', value: 'game' },
          { title: 'Tool/Utility', value: 'tool' },
          { title: 'Open Source', value: 'opensource' }
        ]
      }
    },
    {
      name: 'technologies',
      type: 'array',
      title: 'Technologies Used',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    { 
      name: 'date', 
      type: 'date', 
      title: 'Project Date',
      validation: Rule => Rule.required()
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured Project',
      description: 'Show this project prominently'
    },
    {
      name: 'status',
      type: 'string',
      title: 'Project Status',
      options: {
        list: [
          { title: 'Completed', value: 'completed' },
          { title: 'In Progress', value: 'progress' },
          { title: 'On Hold', value: 'hold' },
          { title: 'Archived', value: 'archived' }
        ]
      },
      initialValue: 'completed'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      category: 'category',
      subcategory: 'subcategory'
    },
    prepare({ title, media, category, subcategory }) {
      return {
        title,
        subtitle: `${category}${subcategory ? ` • ${subcategory}` : ''}`,
        media
      }
    }
  }
}
