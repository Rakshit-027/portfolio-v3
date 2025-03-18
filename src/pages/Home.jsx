import { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaInstagram } from 'react-icons/fa';
import '../styles/Home.css';
import Insta from '../components/Insta';
import Git from '../components/Git';
import LinkedIn from '../components/LinkedIn';
import X from '../components/X';
import Loader from '../components/Loader'; // Adjust path as needed
// import PhoneLoader from '../components/PhoneLoader';

// Define your custom image URL here
const customMacbookImage = "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/photos/mac3.png"; // Replace with your image path

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

  const loaderVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut', delay: 0.3 },
    },
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

      <div className="home_content_wrapper">
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
            Rakshit 
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
            >
              <Git/>
            </motion.a>
            <motion.a 
              href="https://instagram.com/rakshit_waghmare" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Insta/>
            </motion.a>
            <motion.a 
              href="https://instagram.com/rakshit_waghmare" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <LinkedIn/>
            </motion.a>
            <motion.a 
              href="https://instagram.com/rakshit_waghmare" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <X/>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="home_loader_container"
          variants={loaderVariants}
          initial="hidden"
          animate="visible"
        >
          <Loader imageUrl={customMacbookImage} /> {/* Pass the image URL */}
          {/* <PhoneLoader/> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Home;