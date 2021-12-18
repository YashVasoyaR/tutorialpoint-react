import React from 'react';
import Footer from './Footer/Footer';
import Img from './Img';
import Nav from './Nav';
import Workout from './Workout';

export default function OurWork() {
    return (
        <>
            <Nav logo={ Img.logo}/>
            <Workout />
            <Footer/>
        </>
    )
}
