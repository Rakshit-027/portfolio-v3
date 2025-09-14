import { getBlogs } from '../lib/sanity'

export async function GET() {
  const baseUrl = 'https://rakshitwaghmare.dev' // Replace with your actual domain
  const blogs = await getBlogs()
  
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Rakshit Waghmare - Blog</title>
    <description>Latest blog posts about web development, React, Next.js, and software engineering</description>
    <link>${baseUrl}/blogs</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>your-email@domain.com (Rakshit Waghmare)</managingEditor>
    <webMaster>your-email@domain.com (Rakshit Waghmare)</webMaster>
    <category>Technology</category>
    <category>Web Development</category>
    <category>Programming</category>
    ${blogs.map(blog => `
    <item>
      <title><![CDATA[${blog.title}]]></title>
      <description><![CDATA[${blog.excerpt || blog.body?.substring(0, 200) || ''}]]></description>
      <link>${baseUrl}/blogs/${blog.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blogs/${blog.slug}</guid>
      <pubDate>${new Date(blog.publishedAt).toUTCString()}</pubDate>
      <author>your-email@domain.com (${blog.author || 'Rakshit Waghmare'})</author>
      ${blog.categories ? blog.categories.map(cat => `<category>${cat}</category>`).join('') : ''}
      ${blog.mainImage ? `<enclosure url="${blog.mainImage}" type="image/jpeg" />` : ''}
    </item>`).join('')}
  </channel>
</rss>`

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/rss+xml',
      'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600',
    },
  })
}