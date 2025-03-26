import { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ReCAPTCHA from 'react-google-recaptcha'; // Import reCAPTCHA
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone, FaInstagram } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null); // State for CAPTCHA

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
    if (!captchaValue) errors.captcha = 'Please verify you are not a robot'; // CAPTCHA validation
    return errors;
  };

  const onCaptchaChange = useCallback((value) => {
    setCaptchaValue(value); // Set CAPTCHA value when completed
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setSubmitError(null);

      try {
        // Verify CAPTCHA on the server-side (optional but recommended)
        const captchaVerification = await fetch('/.netlify/functions/verify-captcha', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ captcha: captchaValue }),
        });

        if (!captchaVerification.ok) {
          throw new Error('CAPTCHA verification failed');
        }

        // First email: Send form submission to your email
        const submissionResponse = await fetch('/.netlify/functions/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'noreply@rakshit.is.dev.stackaura.in',
            to: 'rakshitwaghmare27@gmail.com',
            replyTo: 'rakshitwaghmare27@gmail.com',
            subject: formData.subject || 'New Contact Form Submission',
            html: `
              <h3>New Message from ${formData.name}</h3>
              <p><strong>Email:</strong> ${formData.email}</p>
              ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
              <p><strong>Message:</strong> ${formData.message}</p>
            `,
          }),
        });

        if (!submissionResponse.ok) {
          throw new Error('Failed to send submission email');
        }

        const submissionData = await submissionResponse.json();

        // Second email: Send thank-you email to the user
        const thankYouResponse = await fetch('/.netlify/functions/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'noreply@rakshit.is.dev.stackaura.in',
            to: formData.email,
            replyTo: 'rakshitwaghmare27@gmail.com',
            subject: 'Thank You for Contacting Me!',
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
                <div style="background-color: #4a90e2; padding: 20px; text-align: center; border-top-left-radius: 10px; border-top-right-radius: 10px;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Thank You, ${formData.name}!</h1>
                </div>
                <div style="padding: 30px; background-color: #ffffff; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
                  <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 15px;">
                    Thank you for reaching out! I’ve received your message and will get back to you as soon as possible.
                  </p>
                  <div style="background-color: #f1f1f1; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <p style="color: #555555; font-size: 14px; margin: 0 0 5px;"><strong>Your Message:</strong></p>
                    <p style="color: #333333; font-size: 14px; line-height: 1.5; margin: 0;">${formData.message}</p>
                  </div>
                  <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 15px;">
                    In the meantime, feel free to check out my portfolio or connect with me on social media!
                  </p>
                  <div style="text-align: center; margin: 20px 0;">
                    <a href="https://rakshit.is.dev.stackaura.in" style="display: inline-block; background-color: #4a90e2; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px; margin: 0 10px;">Visit My Portfolio</a>
                    <a href="https://www.linkedin.com/in/rakshit-waghmare-7060b31a5/" style="display: inline-block; background-color: #0077b5; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px; margin: 0 10px;">Connect on LinkedIn</a>
                  </div>
                </div>
                <div style="text-align: center; padding: 15px; color: #777777; font-size: 14px;">
                  <p style="margin: 0 0 5px;">Best regards,<br>Rakshit Waghmare</p>
                  <p style="margin: 0;">📧 <a href="mailto:rakshitwaghmare27@gmail.com" style="color: #4a90e2; text-decoration: none;">rakshitwaghmare27@gmail.com</a> | 📞 +91 775 896 0603</p>
                  <p style="margin: 5px 0 0;">
                    <a href="https://github.com/Rakshit-027" style="color: #777777; text-decoration: none; margin: 0 5px;">GitHub</a> |
                    <a href="https://www.instagram.com/rakshit.27_/" style="color: #777777; text-decoration: none; margin: 0 5px;">Instagram</a>
                  </p>
                </div>
              </div>
            `,
          }),
        });

        if (!thankYouResponse.ok) {
          throw new Error('Failed to send thank-you email');
        }

        const thankYouData = await thankYouResponse.json();

        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '', phone: '' });
        setCaptchaValue(null); // Reset CAPTCHA
        setTimeout(() => setSubmitSuccess(false), 5000);
      } catch (error) {
        setIsSubmitting(false);
        setSubmitError('Failed to send message. Please try again later.');
        console.error('Error sending email:', error);
      }
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
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.663295424135!2d79.05863261496347!3d21.14663398592954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31d895f%3A0x797bd5f0e2547e82!2sNagpur%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1635768420000"
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
                  { label: 'Phone (Optional)', name: 'phone', type: 'tel' },
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
                <div className="contact_form_group">
                  <ReCAPTCHA
                    sitekey="6LcO6gArAAAAAJhkD-b91sTRYGLZFsHnJn7jcLU2" // Replace with your Site Key
                    onChange={onCaptchaChange}
                  />
                  {formErrors.captcha && <span className="contact_error_message">{formErrors.captcha}</span>}
                </div>
                {submitError && <span className="contact_error_message">{submitError}</span>}
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