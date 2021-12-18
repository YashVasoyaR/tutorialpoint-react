import React from 'react';
import Img from './Img';

export default function Workout() {
    return (
        <section id="workout" className="">
        <div className="container">
            <div className="row">
                <div className="col-xxl-6 col-lg-10 col-md-10 col-12" data-aos="fade-up">
                    <h1 className="px-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <button className="main-btn  mb-lg-0 mb-5 "><i className="fas fa-angle-right pe-3"></i>Online
                        Coaching</button>

                </div>
            </div>

            <div className="row" id="card">
                <div className="col-lg-4 col-md-6  col-12">
                    <div className="card" data-aos="fade-up">
                        <img src={Img.img5} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's
                                content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="card" data-aos="fade-up">
                            <img src={ Img.img7} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's
                                content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="card" data-aos="fade-up">
                        <img src={Img.img6} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's
                                content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
