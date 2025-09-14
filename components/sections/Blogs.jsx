'use client'

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogs } from '../../lib/sanity';
import '../../styles/Blogs.css';

const Blogs = () => {
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
        const data = await getBlogs();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
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
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut', type: 'spring', stiffness: 100 },
    },
  };

  if (loading) {
    return (
      <section className="blogs" id="blogs" ref={ref}>
        <div className="blogs_container">
          <motion.div 
            className="blogs_header"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <h2 className="blogs_title">Latest Blogs</h2>
            <p className="blogs_subtitle">Loading blog posts...</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="blogs" id="blogs" ref={ref}>
      <div className="blogs_container">
        <motion.div 
          className="blogs_header"
          initial="hidden"
          animate={controls}
          variants={itemVariants}
        >
          <h2 className="blogs_title">Latest Blogs</h2>
          <p className="blogs_subtitle">
            Thoughts, tutorials, and insights about web development
          </p>
        </motion.div>

        <motion.div
          className="blogs_grid"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {blogs.length > 0 ? (
            blogs.slice(0, 6).map((blog) => (
              <motion.div 
                key={blog._id}
                className="blog_card"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="blog_image">
                  {blog.coverImage ? (
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      width={400}
                      height={250}
                      className="blog_img"
                    />
                  ) : (
                    <div className="blog_placeholder">
                      <FaUser size={50} />
                    </div>
                  )}
                </div>

                <div className="blog_content">
                  <h3 className="blog_title">{blog.title}</h3>
                  <p className="blog_excerpt">
                    {blog.content ? blog.content.substring(0, 150) + '...' : 'No content preview available'}
                  </p>

                  <div className="blog_meta">
                    <div className="blog_author">
                      <FaUser />
                      <span>{blog.author || 'Rakshit Waghmare'}</span>
                    </div>
                    <div className="blog_date">
                      <FaCalendar />
                      <span>
                        {blog.publishedAt 
                          ? new Date(blog.publishedAt).toLocaleDateString()
                          : 'Date not available'
                        }
                      </span>
                    </div>
                  </div>

                  <Link 
                    href={`/blog/${blog.slug?.current || blog._id}`}
                    className="blog_read_more"
                  >
                    Read More
                    <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="blogs_empty"
              variants={itemVariants}
            >
              <p>No blog posts available. Add some posts in your Sanity Studio!</p>
            </motion.div>
          )}
        </motion.div>

        {blogs.length > 6 && (
          <motion.div 
            className="blogs_view_all"
            variants={itemVariants}
            initial="hidden"
            animate={controls}
          >
            <Link href="/blog" className="view_all_btn">
              View All Posts
              <FaArrowRight />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blogs;