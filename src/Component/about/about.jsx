import React from 'react'
import "./about.css" ;
import {FaAward} from "react-icons/fa" ;
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc"
const about = () => {
  return (
    
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className='about__me-image'>
            <img src="" alt="My Picture" />
          </div>
        </div>
      

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
           <FaAward className="about__icon" />
           <h5>Experience</h5>
           <small>3+ Years of experience </small>
          </article>
          <article className='about__card'>
           <FiUsers className="about__icon" />
            <h5>Clients</h5>
           <small>200+ Worldwide </small>
          </article>
          <article className='about__card'>
           <VscFolderLibrary className="about__icon" />
           <h5>Projects</h5>
           <small>80+ completed</small>
          </article>
        </div>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        </p>
        <a href="#contact" className='btn btn-primary'>Let's talk </a>
      </div>
      </div>
    </section>
  )
}

export default about