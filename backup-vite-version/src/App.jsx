import { Routes, Route } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import './App.css';
import PortfolioLoader from './components/PortfolioLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000); // 2 seconds loading time - adjust as needed
  
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
  
    const loaderVariants = {
      hidden: { x: 100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, ease: 'easeOut', delay: 0.3 },
      },
    };
  
    // Loading screen with PortfolioLoader
    if (isLoading) {
      return (
        <div className="loading_screen">
          <PortfolioLoader />
        </div>
      );
    }
  
  return (
    <div className="app_container">
      <Navbar />
      <main className="app_main">
        <Element name="home"><Home /></Element>
        <Element name="about"><About /></Element>
        <Element name="experience"><Experience /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="contact"><Contact /></Element>
      </main>
      <Footer />
    </div>
  );
}

export default App;
