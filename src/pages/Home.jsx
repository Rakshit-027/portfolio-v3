import { useEffect, useRef } from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import '../styles/Home.css'

const Home = () => {
  const parallaxRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!parallaxRef.current) return
      
      const elements = parallaxRef.current.querySelectorAll('.home_parallax_element')
      
      elements.forEach(element => {
        const speed = element.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX * speed) / 100
        const y = (window.innerHeight - e.pageY * speed) / 100
        
        element.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
    }
    
    document.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section className="home_container">
      <div className="home_parallax_wrapper" ref={parallaxRef}>
        <div className="home_parallax_element home_circle1" data-speed="2"></div>
        <div className="home_parallax_element home_circle2" data-speed="5"></div>
        <div className="home_parallax_element home_square1" data-speed="3"></div>
        <div className="home_parallax_element home_square2" data-speed="4"></div>
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
          <Link to="projects" className="home_cta_button">
            View My Work <FaArrowRight className="home_cta_icon" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Home