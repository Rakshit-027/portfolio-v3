// SEO utilities for structured data
export const generatePersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rakshit Waghmare',
  jobTitle: 'Full Stack Developer',
  description: 'Full-stack developer and software engineer specializing in React, Next.js, Node.js, and modern web technologies.',
  url: 'https://rakshitwaghmare.dev',
  image: 'https://avatars.githubusercontent.com/u/193617288?v=4',
  sameAs: [
    'https://github.com/rakshitwaghmare',
    'https://linkedin.com/in/rakshitwaghmare',
    'https://twitter.com/rakshitwaghmare',
    'https://instagram.com/rakshitwaghmare'
  ],
  knowsAbout: [
    'JavaScript', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Python',
    'Web Development', 'Software Engineering', 'Frontend Development',
    'Backend Development', 'Full Stack Development'
  ]
});

export const generateProjectSchema = (projects) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Rakshit Waghmare - Projects Portfolio',
  description: 'A collection of web development projects and applications',
  itemListElement: projects.map((project, index) => ({
    '@type': 'CreativeWork',
    position: index + 1,
    name: project.title,
    description: project.description,
    url: project.liveUrl || project.githubUrl,
    author: {
      '@type': 'Person',
      name: 'Rakshit Waghmare'
    },
    programmingLanguage: project.technologies || [],
    dateCreated: project.dateCreated || new Date().toISOString(),
  }))
});

export const generateBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Rakshit Waghmare - Full Stack Developer',
  url: 'https://rakshitwaghmare.dev',
  logo: 'https://avatars.githubusercontent.com/u/193617288?v=4',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Professional Inquiry',
    availableLanguage: ['English', 'Hindi']
  },
  founder: {
    '@type': 'Person',
    name: 'Rakshit Waghmare'
  }
});