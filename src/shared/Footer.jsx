import React from "react";
import { FaFacebookSquare, FaInstagram, FaYoutubeSquare } from "react-icons/fa";
const logo = require("../images/receta_logo.png");

const Footer = () => {
  return (
    <>
    <img src={logo} className='footer-logo' alt='logo'/>
      <div className='social-media-links'>
        
        <a
          href="http://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare size={40} color='black'/>
        </a>
        <a
          href="http://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={40} color='black'/>
        </a>
        <a
          href="tttp://www.youtbube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutubeSquare size={40} color='black'/>
        </a>
      </div>
      <h5>Copyright &copy; 2019 </h5>
    </>
  );
};

export default Footer;
