'use client'

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogs } from '../../lib/sanity';
import '../../styles/Blogs.css';

const BlogsNew = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const sanityBlogs = await getBlogs();
        setBlogs(sanityBlogs || []);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section className="blogs">
        <div className="blogs_container">
          <div className="loading_container">
            <div className="loading_spinner"></div>
            <p>Loading blogs...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="blogs">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={containerVariants}
        className="blogs_container"
      >
        <motion.div className="blogs_header" variants={itemVariants}>
          <p className="blogs_subtitle">Latest Articles</p>
          <h2 className="blogs_title">Blog Posts</h2>
        </motion.div>

        <motion.div className="blogs_grid" variants={containerVariants}>
          {blogs.length > 0 ? (
            blogs.slice(0, 6).map((blog) => (
              <motion.article 
                className="blog_card" 
                key={blog._id}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="blog_image">
                  {blog.mainImage ? (
                    <img
                      src={blog.mainImage}
                      alt={blog.title}
                      className="blog_img"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : (
                    <div className="blog_placeholder" style={{display: 'flex'}}>
                      📝 Blog Post
                    </div>
                  )}
                  <div className="blog_placeholder" style={{display: 'none'}}>
                    📝 Blog Post
                  </div>
                </div>
                
                <div className="blog_content">
                  <h3 className="blog_title">{blog.title}</h3>
                  
                  {blog.excerpt && (
                    <p className="blog_excerpt">{blog.excerpt}</p>
                  )}
                  
                  <div className="blog_meta">
                    <div className="blog_author">
                      <FaUser />
                      <span>{blog.author || 'Rakshit Waghmare'}</span>
                    </div>
                    
                    <div className="blog_date">
                      <FaCalendar />
                      <span>{formatDate(blog.publishedAt)}</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/blogs/${blog.slug}`} 
                    className="blog_read_more"
                  >
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </motion.article>
            ))
          ) : (
            <motion.div 
              className="blogs_empty" 
              variants={itemVariants}
            >
              No blog posts available at the moment.
            </motion.div>
          )}
        </motion.div>

        {blogs.length > 6 && (
          <motion.div className="blogs_view_all" variants={itemVariants}>
            <Link href="/blogs" className="view_all_btn">
              View All Posts <FaArrowRight />
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default BlogsNew;