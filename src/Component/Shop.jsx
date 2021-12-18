import React from 'react'
import Nav from './Nav';
import Coach from './Coach';
import Footer from './Footer/Footer';
import Img from './Img';

export default function Shop() {
    return (
        <>
            <Nav logo={ Img.logo} />
            <Coach />
            <Footer/>
            
        </>
    )
}
