import React from 'react';
import Img from './Img';

export default function Coach() {
    return (
        <section id="coach">
        <div className="container-fluid mx-0 ">
            <div className="container">

                <div className="row d-flex justify-content-center" className="pb-4">

                    <div className="col-10  d-flex flex-column align-items-center" data-aos="fade-up">
                        <h1 className="px-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
                        <button className="main-btn mb-lg-0 mb-5 "><i className="fas fa-angle-right pe-3"></i>Online
                            Coaching</button>

                    </div>
                </div>

                <div className="row gym mt-5 d-flex justify-content-center">
                    <div className="col-12">
                        <div className="row d-flex justify-content-between ">
                            <div className="col-lg-6 col-md-5 col-12 g1" data-aos="fade-up">
                                <img src={Img.img1} alt="..." />
                                <h2>Lorem ipsum dolor sit amet .</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt voluptatibus
                                        quidem nostrum culpa eaque ullam.</p>
                            </div>
                            <div className="col-lg-6 col-md-5 col-12 g1">
                                <img src={Img.img2} alt="..." data-aos="fade-up" />
                                <h2>Lorem ipsum dolor sit amet .</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt voluptatibus
                                        quidem nostrum culpa eaque ullam.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gym mt-5 d-flex justify-content-center">
                    <div className="col-12">
                        <div className="row d-flex justify-content-between ">
                            <div className="col-lg-6 col-md-5 col-12 g1">
                                <img src={Img.img3} alt="..." />
                                <h2>Lorem ipsum dolor sit amet .</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt voluptatibus
                                        quidem nostrum
                                        culpa eaque ullam.</p>
                            </div>
                            <div className="col-lg-6 col-md-5 col-12 g1">
                                <img src={Img.img4} alt="..." />
                                <h2>Lorem ipsum dolor sit amet .</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt voluptatibus
                                        quidem nostrum
                                        culpa eaque ullam.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    )
}
