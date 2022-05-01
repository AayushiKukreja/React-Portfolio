
import "./contact.css" ;
import {MdOutlineEmail} from "react-icons/md" ;
import {BsLinkedin} from "react-icons/bs" ;
import React, { useRef as UseRef } from 'react';
import emailjs from "emailjs-com" ;


const contact = () => {
  const form = UseRef() ;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3kaq7ja', 'template_g4qy3hm', form.current, 'N7tmaCKSXpi_dMJoO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
      <h5 className='contact__heading'>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>aayushikukreja8158@gmail.com</h5>
            <a href="mailto:aayushikukreja8158@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
          <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Aayushi Kukreja</h5>
            <a href="https://www.linkedin.com/in/aayushi-kukreja/" target="_blank">Send a message</a>
          </article>
        </div>
       
       <form ref={form} onSubmit={sendEmail}>
         <input type="text" name='name' placeholder='Your Full Name' required />
         <input type="email" name='email' placeholder='Your Email' required />
         <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
         <button type="submit" className='btn btn-primary'>Send Message</button>
       </form>
      </div>
    </section>
  )
}

export default contact