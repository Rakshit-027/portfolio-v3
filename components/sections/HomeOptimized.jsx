import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaInstagram } from 'react-icons/fa';
import '../../styles/Home.css';
import Insta from '../Insta';
import Git from '../Git';
import LinkedIn from '../LinkedIn';
import X from '../X';
import Loader from '../Loader';

const Home = () => {
  const parallaxRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!parallaxRef.current) return;

      const elements = parallaxRef.current.querySelectorAll('.home_parallax_element');

      elements.forEach(element => {
        const speed = parseFloat(element.getAttribute('data-speed')) || 1;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
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

  const socialVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 1 } },
  };

  if (isLoading) {
    return (
      <section className="home_loading_section" aria-label="Loading portfolio">
        <div className="loading_container">
          <Loader imageUrl="https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/photos/mac3.png" />
        </div>
      </section>
    );
  }

  return (
    <section className="home" id="home" ref={parallaxRef} aria-label="Home - Introduction">
      {/* Structured Data for the HomePage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Rakshit Waghmare Portfolio",
            "url": "https://rakshitwaghmare.dev",
            "author": {
              "@type": "Person",
              "name": "Rakshit Waghmare",
              "jobTitle": "Full Stack Developer"
            },
            "description": "Full-stack developer and software engineer portfolio showcasing web development projects and skills",
            "keywords": "full stack developer, web developer, React, Next.js, JavaScript, portfolio"
          })
        }}
      />

      <motion.div
        className="home_container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        role="banner"
      >
        {/* Main heading with proper SEO hierarchy */}
        <motion.div className="home_content" variants={itemVariants}>
          <header className="home_header">
            <motion.p className="home_greeting" variants={itemVariants} aria-label="Greeting">
              Hi, my name is
            </motion.p>
            
            <motion.h1 className="home_name" variants={itemVariants}>
              Rakshit Waghmare.
            </motion.h1>
            
            <motion.h2 className="home_title" variants={itemVariants}>
              I build things for the web.
            </motion.h2>
            
            <motion.p className="home_description" variants={itemVariants}>
              I'm a <strong>full-stack developer</strong> specializing in building exceptional digital experiences. 
              Currently, I'm focused on building accessible, human-centered products with modern web technologies 
              including <em>React</em>, <em>Next.js</em>, <em>Node.js</em>, and <em>TypeScript</em>.
            </motion.p>
          </header>

          {/* Call-to-action with proper accessibility */}
          <motion.div className="home_cta" variants={itemVariants}>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="home_cta_button"
              aria-label="View my portfolio projects"
              role="button"
            >
              Check out my work!
              <FaArrowRight className="home_cta_icon" aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Social links with proper accessibility */}
        <motion.aside 
          className="home_social_links" 
          variants={socialVariants}
          aria-label="Social media links"
          role="complementary"
        >
          <nav>
            <ul className="social_links_list">
              <li>
                <Git aria-label="GitHub profile" />
              </li>
              <li>
                <LinkedIn aria-label="LinkedIn profile" />
              </li>
              <li>
                <Insta aria-label="Instagram profile" />
              </li>
              <li>
                <X aria-label="Twitter/X profile" />
              </li>
            </ul>
          </nav>
        </motion.aside>

        {/* Background elements with proper labeling */}
        <div className="home_background_elements" aria-hidden="true">
          <div className="home_parallax_element" data-speed="0.5"></div>
          <div className="home_parallax_element" data-speed="0.8"></div>
          <div className="home_parallax_element" data-speed="1.2"></div>
        </div>
      </motion.div>

      {/* Skip link for accessibility */}
      <a href="#about" className="skip_link" aria-label="Skip to about section">
        Skip to main content
      </a>
    </section>
  );
};

export default Home;