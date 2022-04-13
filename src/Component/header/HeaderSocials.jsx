import React from 'react'
import {BsLinkedin} from "react-icons/bs" ;
import {FaGithub} from  "react-icons/fa" ;
import {SiLeetcode} from "react-icons/si" ;


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="" target="_blank" ><BsLinkedin /></a>
        <a href="" target="_blank" ><FaGithub /> </a>
        <a href="" target="_blank" ><SiLeetcode /> </a>
    </div>
  )
}

export default HeaderSocials ;