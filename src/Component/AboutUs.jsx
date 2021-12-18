import React from 'react';
import Nav from './Nav';
import About from './About';
import Footer from './Footer/Footer';
import Img from './Img';

export default function AboutUs() {
    return (
        <>
            <Nav logo={Img.logo} />        
            <About />
            <Footer/>
           
        </>
    )
}
