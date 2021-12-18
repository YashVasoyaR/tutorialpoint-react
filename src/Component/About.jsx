import React from 'react';
import Img from './Img';

export default function About() {
    
    return (
        <div>
            <section id="about" className="">
        <div className="container-fluid px-0 banner">
            <div className="container">
                <div className="row">
                    <div className="img1 col-lg-6 col-md-12">
{/* <!-- text animation Type Writer effect -->*/}
                        <h1 >
                            <span className="text_1">We Provide</span>
                            <span className="text_2">Best Trainer</span>
                            {/* <!-- <span className="tanim1"> Gym Atlants</span> 
                            <span className="tanim2"> Gym Atlants</span>
                            <span className="tanim3"> Gym Atlants</span> --> */}
                                </h1>
                                {/* <img src="https://source.unsplash.com/1600x900/?gym" alt="..." /> */}
                                <img src={Img.img13} alt="..." />
                    </div>

                    <div className="text col-lg-6 col-md-12 d-flex flex-column justify-content-center">
                        <p className="mt-lg-0 mt-5 position-relative">Hi i'm 
                        <span className="stext_1 ms-1">Yash</span>
                        <span className="stext_2 ms-1">Vasoya</span>
                        <span className="stext_3 ms-1">Frontend Dev</span></p>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <h5 className="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus magni dolorem
                            soluta, dignissimos Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sint
                            quod deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis
                            placeat pariatur? vitae neque.</h5>
                        <button className="main-btn mb-lg-0 mb-4 "><i className="fas fa-angle-right pe-3"></i>Online
                            Coaching</button>
                    </div>

                </div>
            </div>
        </div>
    </section>
        </div>
    );
}
