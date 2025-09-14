'use client'

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaClock, FaEye } from 'react-icons/fa';
import { getBlogBySlug } from '../../../lib/sanity';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import '../../../styles/BlogPost.css';

const BlogPost = () => {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        if (params.slug) {
          const blogData = await getBlogBySlug(params.slug);
          if (blogData) {
            setBlog(blogData);
            
            // Add structured data for blog post
            const structuredData = {
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: blogData.title,
              description: blogData.excerpt || blogData.body?.substring(0, 160),
              image: blogData.mainImage || 'https://avatars.githubusercontent.com/u/193617288?v=4',
              author: {
                '@type': 'Person',
                name: blogData.author || 'Rakshit Waghmare',
                url: 'https://rakshitwaghmare.dev'
              },
              publisher: {
                '@type': 'Person',
                name: 'Rakshit Waghmare',
                url: 'https://rakshitwaghmare.dev'
              },
              datePublished: blogData.publishedAt,
              dateModified: blogData.publishedAt,
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `https://rakshitwaghmare.dev/blogs/${params.slug}`
              }
            };
            
            // Add structured data to head
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(structuredData);
            document.head.appendChild(script);
            
            // Cleanup function to remove script when component unmounts
            return () => {
              if (script.parentNode) {
                script.parentNode.removeChild(script);
              }
            };
          } else {
            setError('Blog post not found');
          }
        }
      } catch (err) {
        setError('Error loading blog post');
        console.error('Blog fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="blog_loading">
        <Navbar />
        <div className="loading_container">
          <div className="loading_spinner"></div>
          <p>Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog_error">
        <Navbar />
        <div className="error_container">
          <h1>Oops! Something went wrong</h1>
          <p>{error}</p>
          <Link href="/#blogs" className="back_btn">
            <FaArrowLeft /> Back to Blogs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="blog_not_found">
        <Navbar />
        <div className="not_found_container">
          <h1>Blog Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist or has been moved.</p>
          <Link href="/#blogs" className="back_btn">
            <FaArrowLeft /> Back to Blogs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const estimateReadTime = (content) => {
    if (!content) return '5 min read';
    const wordsPerMinute = 200;
    const words = content.length / 5; // Rough estimation
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <div className="blog_post_page">
      <Navbar />
      
      <motion.article 
        className="blog_post_container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Navigation */}
        <div className="blog_post_nav">
          <Link href="/#blogs" className="back_link">
            <FaArrowLeft /> Back to Blogs
          </Link>
        </div>

        {/* Header */}
        <header className="blog_post_header">
          {blog.mainImage && (
            <div className="blog_post_image">
              <Image
                src={blog.mainImage}
                alt={blog.title}
                width={800}
                height={400}
                quality={90}
                priority
                className="blog_hero_img"
              />
            </div>
          )}
          
          <div className="blog_post_title_section">
            <h1 className="blog_post_title">{blog.title}</h1>
            
            {blog.excerpt && (
              <p className="blog_post_excerpt">{blog.excerpt}</p>
            )}
            
            <div className="blog_post_meta">
              <div className="meta_item">
                <FaUser />
                <span>{blog.author || 'Rakshit Waghmare'}</span>
              </div>
              
              <div className="meta_item">
                <FaCalendarAlt />
                <span>{formatDate(blog.publishedAt)}</span>
              </div>
              
              <div className="meta_item">
                <FaClock />
                <span>{estimateReadTime(blog.body)}</span>
              </div>
              
              {blog.views && (
                <div className="meta_item">
                  <FaEye />
                  <span>{blog.views} views</span>
                </div>
              )}
            </div>

            {blog.categories && blog.categories.length > 0 && (
              <div className="blog_post_categories">
                {blog.categories.map((category, index) => (
                  <span key={index} className="category_tag">
                    {category}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <div className="blog_post_content">
          {blog.body ? (
            <div className="blog_content_text">
              {/* For now, display as plain text. Later you can integrate @portabletext/react */}
              <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8' }}>
                {blog.body}
              </p>
            </div>
          ) : (
            <p className="no_content">Content not available.</p>
          )}
        </div>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="blog_post_tags">
            <h3>Tags:</h3>
            <div className="tags_list">
              {blog.tags.map((tag, index) => (
                <span key={index} className="tag_item">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Share and Actions */}
        <div className="blog_post_actions">
          <Link href="/#blogs" className="more_blogs_btn">
            Read More Blogs
          </Link>
          
          <div className="share_buttons">
            <button 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ 
                    title: blog.title, 
                    url: window.location.href 
                  });
                } else {
                  // Fallback to copying URL
                  navigator.clipboard.writeText(window.location.href);
                  alert('URL copied to clipboard!');
                }
              }}
              className="share_btn"
            >
              Share Article
            </button>
          </div>
        </div>
      </motion.article>
      
      <Footer />
    </div>
  );
};

export default BlogPost;