import React from "react" ;
import "./header.css" ;
import CTA from "./CTA" ;
import HeaderSocial from "./HeaderSocials" ;
const Header=()=>
{
    return (
        <header>
            <div className="container header__container" >
                <h5>Hello I'm</h5>
                <h1>Aayushi Kukreja</h1>
                <h5 className="text-light">Web Developer</h5>
                <CTA />
                <HeaderSocial />

                <div className="me">
                    <img src="" alt=""></img>
                    </div>
            </div>
            

            <a href="#contact" className="scroll__down">
                Scroll down
            </a>
        </header>
    );
}

export default Header ;