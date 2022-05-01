import React from "react" ;
import Header from "./Component/header/header" ;
import Nav from "./Component/nav/nav" ;
import About from "./Component/about/about" ;
import Experience from "./Component/experience/experience" ;
import Services from "./Component/service/service" ;
import Portfolio from "./Component/portfolio/portfolio" ;
import Testimonials from "./Component/testimonials/testimonials" ;
import Contact from "./Component/contact/contact";
import Footer from "./Component/footer/footer" ;
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
        <Contact />
        <Footer />
        </>

    ) ;
}

export default App ;
