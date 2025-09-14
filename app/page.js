'use client'

import { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/sections/Home';
import About from '../components/sections/About';
import ProjectsUpdatedNew from '../components/sections/ProjectsUpdatedNew';
import Experience from '../components/sections/Experience';
import BlogsNew from '../components/sections/BlogsNew';
import Contact from '../components/sections/Contact';
import '../styles/App.css';
import PortfolioLoader from '../components/PortfolioLoader';
import { generatePersonSchema, generateBreadcrumbSchema } from '../lib/seo-utils';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  // Generate structured data
  const personSchema = generatePersonSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://rakshitwaghmare.dev' },
    { name: 'About', url: 'https://rakshitwaghmare.dev#about' },
    { name: 'Experience', url: 'https://rakshitwaghmare.dev#experience' },
    { name: 'Projects', url: 'https://rakshitwaghmare.dev#projects' },
    { name: 'Blogs', url: 'https://rakshitwaghmare.dev#blogs' },
    { name: 'Contact', url: 'https://rakshitwaghmare.dev#contact' }
  ]);

  // Loading screen with PortfolioLoader
  if (isLoading) {
    return (
      <div className="loading_screen">
        <PortfolioLoader />
      </div>
    );
  }

  return (
    <>
      {/* Additional Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="app_container">
        <header role="banner">
          <Navbar />
        </header>
        
        <main className="app_main" role="main">
          <Element name="home" id="home">
            <section aria-label="Home and Introduction">
              <Home />
            </section>
          </Element>
          
          <Element name="about" id="about">
            <section aria-label="About Me">
              <About />
            </section>
          </Element>
          
          <Element name="experience" id="experience">
            <section aria-label="Professional Experience">
              <Experience />
            </section>
          </Element>
          
          <Element name="projects" id="projects">
            <section aria-label="Portfolio Projects">
              <ProjectsUpdatedNew />
            </section>
          </Element>
          
          <Element name="blogs" id="blogs">
            <section aria-label="Blog Posts and Articles">
              <BlogsNew />
            </section>
          </Element>
          
          <Element name="contact" id="contact">
            <section aria-label="Contact Information">
              <Contact />
            </section>
          </Element>
        </main>
        
        <Footer />
      </div>
    </>
  );
}