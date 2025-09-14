'use client'

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaReact } from 'react-icons/fa';
import Image from 'next/image';
import { getProjects } from '../../lib/sanity';
import '../../styles/Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState([]);
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
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
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

  // Filter projects based on category and subcategory
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    
    // Filter by main category
    if (project.category && project.category.toLowerCase() === activeFilter.toLowerCase()) {
      return true;
    }
    
    // Filter by subcategory
    if (project.subcategory && project.subcategory.toLowerCase() === activeFilter.toLowerCase()) {
      return true;
    }
    
    // Fallback to technology filtering for backward compatibility
    return project.technologies && project.technologies.some(tech => 
      tech.toLowerCase().includes(activeFilter.toLowerCase())
    );
  });

  // Get filter options from categories, subcategories, and technologies
  const getFilterOptions = () => {
    const categories = new Set();
    const subcategories = new Set();
    
    projects.forEach(project => {
      if (project.category) categories.add(project.category);
      if (project.subcategory) subcategories.add(project.subcategory);
    });

    // Combine and return unique filters
    const filters = [
      ...Array.from(categories),
      ...Array.from(subcategories)
    ];
    
    return [...new Set(filters)].slice(0, 6); // Show first 6 filter options
  };

  const filterOptions = getFilterOptions();

  if (loading) {
    return (
      <section className="projects" id="projects" ref={ref}>
        <div className="projects_container">
          <motion.div 
            className="projects_header"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <h2 className="projects_title">My Projects</h2>
            <p className="projects_subtitle">Loading projects...</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="projects_container">
        <motion.div 
          className="projects_header"
          initial="hidden"
          animate={controls}
          variants={itemVariants}
        >
          <h2 className="projects_title">My Projects</h2>
          <p className="projects_subtitle">
            A showcase of my work and the technologies I love to use
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="projects_filter"
          initial="hidden"
          animate={controls}
          variants={itemVariants}
        >
          <button
            className={`filter_btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            <span>All Projects</span>
          </button>
          {filterOptions.map((option) => (
            <button
              key={option}
              className={`filter_btn ${activeFilter === option ? 'active' : ''}`}
              onClick={() => setActiveFilter(option)}
            >
              {option === 'fullstack' ? 'Full Stack' : 
               option === 'web-app' ? 'Web Apps' :
               option === 'ecommerce' ? 'E-commerce' :
               option === 'nodejs' ? 'Node.js' :
               option === 'nextjs' ? 'Next.js' :
               option === 'mobile-app' ? 'Mobile Apps' :
               option === 'opensource' ? 'Open Source' :
               option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects_grid"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div 
                key={project._id}
                className="project_card"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="project_image">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="project_img"
                    />
                  ) : (
                    <div className="project_placeholder">
                      <FaCode size={50} />
                    </div>
                  )}
                </div>

                <div className="project_content">
                  {/* Category and Subcategory */}
                  <div className="project_meta">
                    {project.category && (
                      <span className="project_category">
                        {project.category === 'fullstack' ? 'Full Stack' : 
                         project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </span>
                    )}
                    {project.subcategory && (
                      <span className="project_subcategory">
                        {project.subcategory === 'web-app' ? 'Web App' :
                         project.subcategory === 'mobile-app' ? 'Mobile App' :
                         project.subcategory === 'ecommerce' ? 'E-commerce' :
                         project.subcategory === 'nodejs' ? 'Node.js' :
                         project.subcategory === 'nextjs' ? 'Next.js' :
                         project.subcategory === 'opensource' ? 'Open Source' :
                         project.subcategory.charAt(0).toUpperCase() + project.subcategory.slice(1)}
                      </span>
                    )}
                    {project.featured && (
                      <span className="project_featured">★ Featured</span>
                    )}
                  </div>

                  <h3 className="project_title">{project.title}</h3>
                  <p className="project_description">{project.description}</p>

                  {/* Technologies */}
                  {project.technologies && (
                    <div className="project_technologies">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span key={techIndex} className="project_tech">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="project_tech_more">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Project Links */}
                  <div className="project_links">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project_link"
                        aria-label="View GitHub Repository"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.url && (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project_link"
                        aria-label="View Live Project"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>

                  {project.date && (
                    <div className="project_date">
                      {new Date(project.date).toLocaleDateString()}
                    </div>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="no_projects"
              variants={itemVariants}
            >
              <p>No projects found for the selected filter.</p>
            </motion.div>
          )}
        </motion.div>

        {projects.length === 0 && !loading && (
          <motion.div 
            className="projects_empty"
            variants={itemVariants}
            initial="hidden"
            animate={controls}
          >
            <p>No projects available. Add some projects in your Sanity Studio!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;