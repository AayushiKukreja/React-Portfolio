import React from "react" ;
import Header from "./Component/header/header" ;
import Nav from "./Component/nav/nav" ;
import About from "./Component/about/about" ;
import Experience from "./Component/experience/experience" ;
import Services from "./Component/service/service" ;
import Portfolio from "./Component/portfolio/portfolio" ;
import Testimonials from "./Component/testimonials/testimonials" ;
function App()
{
    return (
        <>
        <Header/> 
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials/>   
       
        </>

    ) ;
}

export default App ;
