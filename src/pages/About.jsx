import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaDatabase, FaPaintBrush, FaMobile, FaAward, FaBriefcase, FaGlobe } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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
    hidden: { y: 20, opacity: 1 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const skills = [
    'JavaScript (ES6+)', 'React', 'Node.js', 'Express', 
    'MongoDB', 'PostgreSQL', 'HTML5', 'CSS3/SASS', 
    'Redux', 'GraphQL', 'RESTful APIs', 'Git/GitHub',
    'Webpack', 'Jest', 'Docker', 'AWS',
  ];

  const services = [
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      description: 'React, Vue, Angular',
    },
    {
      icon: <FaDatabase />,
      title: 'Backend Development',
      description: 'Node.js, Express, MongoDB',
    },
    {
      icon: <FaPaintBrush />,
      title: 'UI/UX Design',
      description: 'Figma, Adobe XD',
    },
    {
      icon: <FaMobile />,
      title: 'Mobile Development',
      description: 'React Native',
    },
  ];

  const achievements = [
    {
      icon: <FaAward />,
      title: 'Certifications',
      description: 'React, JavaScript, UI/UX Design',
    },
    {
      icon: <FaBriefcase />,
      title: 'Experience',
      description: '3+ years in web development',
    },
    {
      icon: <FaGlobe />,
      title: 'Projects',
      description: '20+ completed projects',
    },
  ];

  return (
    <section className="about_container section_container">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={containerVariants}
        className="about_content"
      >
        <motion.p className="section_subtitle" variants={itemVariants}>
          Get To Know Me
        </motion.p>
        <motion.h2 className="section_title" variants={itemVariants}>
          About Me
        </motion.h2>

        <div className="about_grid">
          <motion.div className="about_text" variants={itemVariants}>
            <p className="about_paragraph">
              Hello! I'm a passionate full-stack developer with a love for creating interactive, responsive, and user-friendly web applications. My journey in web development began in 2018 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p className="about_paragraph">
              Fast-forward to today, and I've had the privilege of working at a start-up, a large corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            <p className="about_paragraph">
              Here are a few technologies I've been working with recently:
            </p>

            <ul className="about_skills_list">
              {skills.map((skill, index) => (
                <motion.li 
                  key={index} 
                  className="about_skill_item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Uncomment and update this section if you want to add an image */}
          {/* <motion.div className="about_image_container" variants={itemVariants}>
            <div className="about_image_wrapper">
              <div className="about_image_placeholder">
                <span className="about_image_text"><img src="https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/thumb/profile.png" alt="Profile" /></span>
              </div>
            </div>
          </motion.div> */}
        </div>

        <motion.div className="about_services_section" variants={itemVariants}>
          <h2 className="about_section_title">What I Offer</h2>
          <div className="about_services_grid">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="about_service_card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className="about_service_icon">
                  {service.icon}
                </div>
                <h3 className="about_service_title">{service.title}</h3>
                <p className="about_service_description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="about_journey_section" variants={itemVariants}>
          <h2 className="about_section_title">My Journey</h2>
          <motion.div className="about_journey_card" variants={itemVariants} whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}>
            <p className="about_journey_text">
              I started my journey as a web developer in 2023, focusing primarily on frontend development. Over the years, I've worked with various technologies and frameworks, constantly learning and adapting to new challenges. My experience includes working with startups and large enterprises, helping them build scalable and maintainable web applications.
            </p>
          </motion.div>
        </motion.div>

        <motion.div className="about_achievements_section" variants={itemVariants}>
          <h2 className="about_section_title">My Achievements</h2>
          <div className="about_achievements_grid">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index} 
                className="about_achievement_card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className="about_achievement_icon">
                  {achievement.icon}
                </div>
                <h3 className="about_achievement_title">{achievement.title}</h3>
                <p className="about_achievement_description">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;