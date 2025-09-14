import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope,FaInstagram } from 'react-icons/fa'
import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer_container">
      <div className="footer_content">
        <div className="footer_social">
          <a href="https://github.com/Rakshit-027" target="_blank" rel="noopener noreferrer" className="footer_social_link">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/rakshit-waghmare-7060b31a5/" target="_blank" rel="noopener noreferrer" className="footer_social_link">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/rakshit.27_/" target="_blank" rel="noopener noreferrer" className="footer_social_link">
            <FaInstagram />
          </a>
          <a href="mailto:rakshitwaghmare27@gmail.com" className="footer_social_link">
            <FaEnvelope />
          </a>
        </div>
        <p className="footer_copyright">
          Designed & Built by <span className="footer_name">Rakshit Waghmare</span>
        </p>
        <p className="footer_year">© {currentYear} All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer