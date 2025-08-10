import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container grid">
              <div className='footer__socials'>
                      <a href="https://www.linkedin.com/in/krishna-veni-m-6b17a6264" 
                        className='footer__social-link'
                        target="_blank" 
                        rel="noopener noreferrer">
                        <FaLinkedin />
                      </a>
                      <a href="https://github.com/krishnaveni-projects" 
                        className='footer__social-link'
                        target="_blank" 
                        rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                    </div>
                    <p className="footer__copyright text-cs">
                       &copy; 2025 <span>Krishna Veni</span>. All Rights Reserved.
                    </p>
                    <p className="footer__copyright text-cs">
                        Designed and Developed by <span>Krishna Veni</span>
                    </p>
        </div>
    </footer>
  );
};

export default Footer;