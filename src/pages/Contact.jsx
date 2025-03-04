import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone,FaInstagram } from 'react-icons/fa'; // Added more icons
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '', // New field for phone number
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showMap, setShowMap] = useState(false); // New state for toggling map

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
      transition: { staggerChildren: 0.2, delayChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) errors.phone = 'Phone must be a 10-digit number';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '', phone: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <section className="contact_container section_container">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={containerVariants}
        className="contact_content"
      >
        <motion.p className="section_subtitle" variants={itemVariants}>
          Let's Connect
        </motion.p>
        <motion.h2 className="section_title" variants={itemVariants}>
          Reach Out
        </motion.h2>

        <div className="contact_grid">
          <motion.div className="contact_info" variants={itemVariants}>
            <p className="contact_text">
            

"I'm absolutely thrilled to dive into new possibilities and explore a wide range of exciting opportunities! Whether you’ve got a creative project idea bouncing around in your head, a thought-provoking question you’d like me to tackle, or even if you just want to drop by with a friendly hello, I’m here for it all. I’ll respond promptly and with enthusiasm, ready to engage and assist however I can. Let’s make something great happen together!"
            </p>
            <div className="contact_methods">
              <motion.div className="contact_method" whileHover={{ scale: 1.05 }}>
                <FaEnvelope className="contact_method_icon" />
                <a href="mailto:rakshitwaghmare27@gmail.com" className="contact_method_text">
                  rakshitwaghmare27@gmail.com
                </a>
              </motion.div>
              <motion.div className="contact_method" whileHover={{ scale: 1.05 }}>
                <FaPhone className="contact_method_icon" />
                <a href="tel:+917758960603" className="contact_method_text">
                  +91 775 896 0603
                </a>
              </motion.div>
              <motion.div className="contact_method" whileHover={{ scale: 1.05 }} onClick={toggleMap}>
                <FaMapMarkerAlt className="contact_method_icon" />
                <span className="contact_method_text">Nagpur, India</span>
              </motion.div>
              <div className="contact_social">
                {[
                  { Icon: FaGithub, url: 'https://github.com/Rakshit-027' },
                  { Icon: FaLinkedin, url: 'https://www.linkedin.com/in/rakshit-waghmare-7060b31a5/' },
                  // { Icon: FaTwitter, url: 'https://twitter.com' },
                  { Icon: FaInstagram, url: 'https://www.instagram.com/rakshit.27_/' },
                ].map(({ Icon, url }, idx) => (
                  <motion.a
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact_social_link"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
            {showMap && (
              <motion.div
                className="contact_map"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: '300px', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* You can replace this with an actual map component like react-leaflet or google-maps-react */}
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835634602998!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1635768420000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </motion.div>
            )}
          </motion.div>

          <motion.div className="contact_form_container" variants={itemVariants}>
            {submitSuccess ? (
              <motion.div
                className="contact_success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="contact_success_title">Success!</h3>
                <p className="contact_success_text">
                  Your message has been sent. I'll reply soon!
                </p>
                <motion.button
                  className="contact_success_button"
                  onClick={() => setSubmitSuccess(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </motion.div>
            ) : (
              <form className="contact_form" onSubmit={handleSubmit}>
                {[
                  { label: 'Name', name: 'name', type: 'text' },
                  { label: 'Email', name: 'email', type: 'email' },
                  { label: 'Phone (Optional)', name: 'phone', type: 'tel' }, // New field
                  { label: 'Subject (Optional)', name: 'subject', type: 'text' },
                ].map(({ label, name, type }) => (
                  <div className="contact_form_group" key={name}>
                    <label htmlFor={name} className="contact_form_label">{label}</label>
                    <input
                      type={type}
                      id={name}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className={`contact_form_input ${formErrors[name] ? 'contact_form_error' : ''}`}
                      placeholder={label}
                    />
                    {formErrors[name] && <span className="contact_error_message">{formErrors[name]}</span>}
                  </div>
                ))}
                <div className="contact_form_group">
                  <label htmlFor="message" className="contact_form_label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`contact_form_textarea ${formErrors.message ? 'contact_form_error' : ''}`}
                    placeholder="Your message here..."
                  />
                  {formErrors.message && <span className="contact_error_message">{formErrors.message}</span>}
                </div>
                <motion.button
                  type="submit"
                  className="contact_form_button"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;