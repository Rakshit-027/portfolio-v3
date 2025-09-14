'use client'

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaReact } from 'react-icons/fa';
import Image from 'next/image';
import { getProjects } from '../../lib/sanity';
import '../../styles/Projects.css';

const ProjectsUpdated = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
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

  // Hardcoded fallback projects data
  const fallbackProjects = [
    {
      _id: '1',
      title: 'StackAura-websolutions',
      description: 'StackAura is a web solutions platform designed to help businesses establish a strong online presence.',
      image: 'https://images2.imgbox.com/73/e9/cH0PKgPU_o.png',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
      github: '',
      url: 'https://www.stackaura.in/',
      category: 'fullstack',
    },
    {
      _id: '2',
      title: 'MeCart',
      description: 'A full-featured e-commerce platform built with React.js',
      image: 'https://images2.imgbox.com/58/fe/djMjvlbl_o.png',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material UI'],
      github: 'https://github.com/Rakshit-027/MeCart',
      url: 'https://ecom.stackaura.in/',
      category: 'fullstack',
    },
    {
      _id: '3',
      title: 'Fudify-innovation',
      description: 'A modern crowdfunding web app built with React.js, empowering startup founders to showcase their ideas, raise funds securely, and connect with a supportive community. The platform features real-time funding progress, user-friendly dashboards, and social sharing to maximize visibility.',
      image: 'https://images2.imgbox.com/52/66/cEELZ7L3_o.png',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      github: 'https://github.com/Rakshit-027/Fundify-v2',
      url: 'https://fundify-innovate.netlify.app/',
      category: 'fullstack',
    },
    {
      _id: '4',
      title: 'Movies-database And Search',
      description: 'The Movies Database and Search Web App is a platform that allows users to search and explore movies easily.',
      image: 'https://images2.imgbox.com/ff/26/KQVKXKlg_o.png',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js'],
      github: 'https://github.com/Rakshit-027/Movies-database-system',
      url: 'https://movies.stackaura.in/',
      category: 'backend',
    },
    {
      _id: '5',
      title: 'Content Management System',
      description: 'A custom CMS for managing blogs, pages, and media with user roles and permissions.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'GraphQL'],
      github: 'https://github.com',
      url: 'https://example.com',
      category: 'backend',
    },
    {
      _id: '6',
      title: 'Recipe Sharing Platform',
      description: 'A community-driven recipe sharing platform with search, filtering, and user-generated content.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      url: 'https://example.com',
      category: 'fullstack',
    },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const sanityProjects = await getProjects();
        
        if (sanityProjects && sanityProjects.length > 0) {
          setProjects(sanityProjects);
        } else {
          // Use fallback data if Sanity is not available or empty
          setProjects(fallbackProjects);
        }
      } catch (error) {
        console.log('Using fallback projects data:', error);
        setProjects(fallbackProjects);
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'frontend': return FaCode;
      case 'backend': return FaDatabase;
      case 'fullstack': return FaReact;
      default: return FaCode;
    }
  };

  // Log filtered projects to debug
  useEffect(() => {
    console.log('Active Filter:', activeFilter);
    console.log('Filtered Projects:', filteredProjects);
  }, [activeFilter, filteredProjects]);

  if (loading) {
    return (
      <section className="projects_container section_container">
        <div className="projects_content">
          <div className="loading_container">
            <div className="loading_spinner"></div>
            <p>Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="projects_container section_container">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={containerVariants}
        className="projects_content"
      >
        <motion.p className="section_subtitle" variants={itemVariants}>
          My Creations
        </motion.p>
        <motion.h2 className="section_title" variants={itemVariants}>
          Featured Projects
        </motion.h2>

        <motion.div className="projects_filter" variants={itemVariants}>
          {[
            { label: 'All', value: 'all', icon: null },
            { label: 'Frontend', value: 'frontend', icon: FaCode },
            { label: 'Backend', value: 'backend', icon: FaDatabase },
            { label: 'Full Stack', value: 'fullstack', icon: FaReact },
          ].map(({ label, value, icon }) => (
            <motion.button
              key={value}
              className={`projects_filter_btn ${activeFilter === value ? 'projects_filter_active' : ''}`}
              onClick={() => setActiveFilter(value)}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
            >
              {icon && <icon className="projects_filter_icon" />}
              {label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div className="projects_grid" variants={containerVariants}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => {
              const CategoryIcon = getCategoryIcon(project.category);
              
              return (
                <motion.div 
                  className="project_card" 
                  key={project._id}
                  variants={itemVariants}
                  whileHover={{ y: -10, boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)', transition: { duration: 0.3 } }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="project_image_container">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project_image"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : (
                      <div className="project_placeholder" style={{display: 'flex'}}>
                        <FaCode size={40} />
                      </div>
                    )}
                    <div className="project_placeholder" style={{display: 'none'}}>
                      <FaCode size={40} />
                    </div>
                    <div className="project_overlay">
                      <div className="project_links">
                        {project.github && (
                          <motion.a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project_link"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaGithub />
                          </motion.a>
                        )}
                        {project.url && (
                          <motion.a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project_link"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaExternalLinkAlt />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="project_info">
                    <h3 className="project_title">{project.title}</h3>
                    <p className="project_description">{project.description}</p>
                    <div className="project_tech">
                      {project.technologies && project.technologies.map((tech, index) => (
                        <motion.span 
                          key={index} 
                          className="project_tech_item" 
                          whileHover={{ scale: 1.1, backgroundColor: 'rgba(100, 255, 218, 0.2)' }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <div className="project_category">
                      <CategoryIcon className="project_category_icon" />
                      <span className="project_category_text">
                        {project.category ? project.category.charAt(0).toUpperCase() + project.category.slice(1) : 'Project'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <motion.p 
              className="projects_no_results" 
              variants={itemVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No projects found for this category.
            </motion.p>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsUpdated;