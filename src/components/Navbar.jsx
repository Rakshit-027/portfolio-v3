import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, duration: 0.5 }
    }
  };

  return (
    <motion.header 
      className={`navbar_container ${scrolled ? 'navbar_scrolled' : ''}`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="navbar_content">
        <NavLink to="/" className="navbar_logo">
          <span className="navbar_logo_text">Rakshit Waghmare</span>
        </NavLink>

        <div className="navbar_mobile_toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`navbar_links ${isOpen ? 'navbar_active' : ''}`}>
          <Link to="home" smooth={true} duration={500} className="navbar_link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="navbar_link" onClick={closeMenu}>
            About
          </Link>
          <Link to="experience" smooth={true} duration={500} className="navbar_link" onClick={closeMenu}>
            Experience
          </Link>
          <Link to="projects" smooth={true} duration={500} className="navbar_link" onClick={closeMenu}>
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="navbar_link" onClick={closeMenu}>
            Contact
          </Link>
          <a 
            href="/resume.pdf" 
            className="navbar_resume_btn"
            onClick={closeMenu}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
