import React from 'react'
import "./nav.css" ;
import {AiOutlineHome} from "react-icons/ai" ;
import {AiOutlineUser} from "react-icons/ai" ;
import {BiBook} from "react-icons/bi" ;
import {MdOutlineMiscellaneousServices} from "react-icons/md" ;
import {IoMdContact} from "react-icons/io" ;
import {useState} from "react" ;
const Nav = () => {
  const [activeNav , setActiveNav] = useState('#') ;
  return (
    <nav>
        <a href="#" className={activeNav === '#' ? 'active': ''}><AiOutlineHome /></a>
        <a href="#about" onClick={()=> setActiveNav("#about")} className={activeNav === '#' ? 'active': ''}><AiOutlineUser /></a>
        <a href="#experience"onClick={()=> setActiveNav("#experience")} className={activeNav === '#' ? 'active': ''}><BiBook /></a>
        <a href="#service"onClick={()=> setActiveNav("#services")} className={activeNav === '#' ? 'active': ''}><MdOutlineMiscellaneousServices /></a>
        <a href="#contact"onClick={()=> setActiveNav("#contact")} className={activeNav === '#' ? 'active': ''}><IoMdContact /></a>
    </nav>
  )
}

export default Nav ;