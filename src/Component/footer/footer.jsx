import react from 'react';
import React from 'react'
import "./footer.css" ;
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io" ;
import {FaFacebookF}  from "react-icons/fa" ;
const footer = () => {
  return (
   <footer>
     <a href="#" className='footer__logo'>Aayushi</a>
  
   <ul className='permalinks'>
     <li><a href="#">Home</a></li>
     <li><a href="#about">About</a></li>
     <li><a href="#experience">Experience</a></li>
     <li><a href="services">Services</a></li>
     <li><a href="portfolio">Portfolio</a></li>
     <li><a href="testimonials">Testimonials</a></li>
     <li><a href="#contact">Contact</a></li>
   </ul>

   <div className='footer__socials'>
     <a href=""><FiInstagram /></a>
     <a href=""><IoLogoTwitter/></a>
     <a href=""><FaFacebookF /></a>
   </div>

   <div className='footer__copyright'>
     <small>&copy; Aayushi Kukreja.</small>
   </div>
   </footer>
  )
}

export default footer