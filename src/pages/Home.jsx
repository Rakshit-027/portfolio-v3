import { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaInstagram } from 'react-icons/fa'; // Added Instagram and GitHub icons
import '../styles/Home.css';
import Insta from '../components/Insta';
import Git from '../components/Git';
import LinkedIn from '../components/LinkedIn';
import X from '../components/X';

const Home = () => {
  const parallaxRef = useRef(null);

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

  return (
    <section className="home_container">
      <div className="home_parallax_wrapper" ref={parallaxRef}>
        <motion.div 
          className="home_parallax_element home_circle1" 
          data-speed="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1, transition: { duration: 1.5, delay: 0.2 } }}
        />
        <motion.div 
          className="home_parallax_element home_circle2" 
          data-speed="5"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1, transition: { duration: 1.5, delay: 0.4 } }}
        />
        <motion.div 
          className="home_parallax_element home_square1" 
          data-speed="3"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1, transition: { duration: 1.5, delay: 0.6 } }}
        />
        <motion.div 
          className="home_parallax_element home_square2" 
          data-speed="4"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1, transition: { duration: 1.5, delay: 0.8 } }}
        />
      </div>

      <motion.div 
        className="home_content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="home_greeting" variants={itemVariants}>
          Hi, my name is
        </motion.p>
        <motion.h1 className="home_name" variants={itemVariants}>
          Rakshit Waghmare
        </motion.h1>
        <motion.h2 className="home_title" variants={itemVariants}>
          I build things for the web.
        </motion.h2>
        <motion.p className="home_description" variants={itemVariants}>
          I'm a full-stack web developer specializing in building exceptional digital experiences. 
          Currently, I'm focused on building accessible, human-centered products.
        </motion.p>
        
        <motion.div className="home_cta_container" variants={itemVariants}>
          <Link 
            to="projects" 
            className="home_cta_button"
            smooth={true}
            duration={500}
          >
            View My Work <FaArrowRight className="home_cta_icon" />
          </Link>
        </motion.div>

        <motion.div 
          className="home_social_links"
          variants={socialVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a 
            href="https://github.com/Rakshit-027" 
            target="_blank" 
            rel="noopener noreferrer"
            // className="home_social_link"
            // whileHover={{ scale: 1.2, rotate: 10 }}
            // whileTap={{ scale: 0.9 }}
          >
            <Git/>
          </motion.a>
          <motion.a 
            href="https://instagram.com/rakshit_waghmare" 
            target="_blank" 
            rel="noopener noreferrer"
            // className="home_social_link"
            // whileHover={{ scale: 1.2, rotate: 10 }}
            // whileTap={{ scale: 0.9 }}
          >
            <Insta/>
          </motion.a>
          <motion.a 
            href="https://instagram.com/rakshit_waghmare" 
            target="_blank" 
            rel="noopener noreferrer"
            // className="home_social_link"
            // whileHover={{ scale: 1.2, rotate: 10 }}
            // whileTap={{ scale: 0.9 }}
          >
            <LinkedIn/>
          </motion.a>
          <motion.a 
            href="https://instagram.com/rakshit_waghmare" 
            target="_blank" 
            rel="noopener noreferrer"
            // className="home_social_link"
            // whileHover={{ scale: 1.2, rotate: 10 }}
            // whileTap={{ scale: 0.9 }}
          >
            <X/>
          </motion.a>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;