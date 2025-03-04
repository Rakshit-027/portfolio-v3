import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const experiences = [
    {
      company: 'StackAura',
      position: 'Senior Full Stack Developer',
      period: 'January 2025 - Present',
      description: [
        'Spearheading the design and development of cutting-edge web applications tailored to client needs',
        'Architected and implemented a microservices-based backend using Node.js and Express',
        'Overseeing end-to-end project lifecycle management',
        'ensuring seamless collaboration between teams and delivering high-quality, scalable solutions',
      ],
    },
    {
      company: 'SS Infotech',
      position: 'Frontend Developer',
      period: 'March 2023 - December 2024',
      description: [
        'Developed responsive web applications using React, Redux, and modern CSS techniques',
        'Collaborated with UX/UI designers to implement pixel-perfect interfaces',
        'Integrated RESTful APIs and GraphQL endpoints with frontend applications',
        'Implemented automated testing using Jest and React Testing Library',
      ],
    },
    {
      company: 'Campus Marg India.',
      position: 'Web Developer',
      period: 'June 2022 - February 2023',
      description: [
        'Built custom WordPress themes and plugins for clients across various industries',
        'Developed interactive features using JavaScript and jQuery',
        'Optimized website performance and implemented SEO best practices',
        'Maintained and updated existing client websites',
      ],
    },
    {
      company: 'Freelance',
      position: 'Web Developer',
      period: 'January 2021 - May 2022',
      description: [
        'Designed and developed websites for small businesses and startups',
        'Created custom e-commerce solutions using WooCommerce and Shopify',
        'Provided ongoing maintenance and support for client websites',
        'Collaborated with clients to translate business requirements into technical solutions',
      ],
    },
  ];

  return (
    <section className="experience_container section_container">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={containerVariants}
        className="experience_content"
      >
        <motion.p className="section_subtitle" variants={itemVariants}>
          My Journey
        </motion.p>
        <motion.h2 className="section_title" variants={itemVariants}>
          Professional Experience
        </motion.h2>

        <motion.div className="experience_tabs_container" variants={itemVariants}>
          <div className="experience_tabs">
            {experiences.map((exp, index) => (
              <motion.button
                key={index}
                className={`experience_tab ${activeTab === index ? 'experience_tab_active' : ''}`}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {exp.company}
              </motion.button>
            ))}
          </div>

          <div className="experience_panels">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`experience_panel ${activeTab === index ? 'experience_panel_active' : ''}`}
                initial={{ opacity: 0, x: -20 }}
                animate={activeTab === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <h3 className="experience_position">
                  {exp.position} <span className="experience_company">@ {exp.company}</span>
                </h3>
                <p className="experience_period">{exp.period}</p>
                <ul className="experience_duties">
                  {exp.description.map((duty, i) => (
                    <motion.li
                      key={i}
                      className="experience_duty"
                      initial={{ opacity: 0, x: -10 }}
                      animate={activeTab === index ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                    >
                      {duty}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="experience_education" variants={itemVariants}>
          <h3 className="experience_education_title">Education</h3>
          {[
            {
              degree: 'Bachelor of Technology in Electronics and Communication',
              school: 'RTMNU',
              period: '2020 - 2024',
              // description: 'Focused on web development, algorithms, and database systems. Graduated with honors.',
            },
            {
              degree: 'Higher Secondary Education',
              school: 'Sindhu Mahavidyalaya',
              period: '2018-2019',
              // description: 'Intensive 12-week program covering modern web development technologies and practices.',
            },
            {
              degree: 'Senior Secondary Education',
              school: 'Onkarlal sindhu high School',
              period: '2017',
              // description: 'Intensive 12-week program covering modern web development technologies and practices.',
            },
          ].map((edu, index) => (
            <motion.div
              key={index}
              className="experience_education_item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="experience_education_timeline">
                <div className="experience_education_dot" />
                {index === 0 && <div className="experience_education_line" />}
              </div>
              <div className="experience_education_content">
                <h4 className="experience_education_degree">{edu.degree}</h4>
                <p className="experience_education_school">{edu.school}</p>
                <p className="experience_education_period">{edu.period}</p>
                <p className="experience_education_description">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;