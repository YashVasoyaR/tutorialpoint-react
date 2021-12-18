import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Footer/footer.css';
import Img from '../Img'

const Footer = () => {
    let date = new Date().getFullYear();
    console.log(date);
    return (
        <>
            
            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3><span><img src={Img.CompLogo} alt="..." />-</span>Tech</h3>

                    <p className="footer-links">
                        <NavLink to="#" className="link-1">Home</NavLink>
                        
                        <NavLink to="#">Blog</NavLink>
                    
                        <NavLink to="#">Pricing</NavLink>
                    
                        <NavLink to="#">About</NavLink>
                        
                        <NavLink to="#">Faq</NavLink>
                        
                        <NavLink to="#">Contact</NavLink>
                    </p>

                    <p className="footer-company-name">©{ date} Y-Tech,Inc. All rights reserved. </p>
                </div>

                <div className="footer-center">

                    <div className="row">
                        <div className='d-flex mb-3 align-items-center justify-content-lg-start justify-content-sm-center'>
                            <div className="col-1 me-4"><i className="fa fa-map-marker"></i></div>
                            <div className="col-4"><p><span>777 S. Ank Enclave</span> Jamjir Beach, Gujarat</p></div>
                        </div>

                        <div className='d-flex mb-3 align-items-center justify-content-lg-start justify-content-sm-center'>
                            <div className="col-1 me-4"><i className="fa fa-phone"></i></div>
                            <div className="col-4"> <p>+91 777 7777 777</p></div>
                        </div>

                        <div className='d-flex mb-3 align-items-center justify-content-lg-start justify-content-sm-center'>
                            <div className="col-1 me-4"><i className="fa fa-envelope fa-4x"></i></div>
                            <div className="col-4"><p><a href="mailto:vasoyayash3120@gmail.com">support@ytech.com</a></p></div>
                        </div>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About the company</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                    </p>

                    <div className="footer-icons">

                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="#"><i className="fab fa-github"></i></a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>

                    </div>

                </div>

            </footer>
        </>
    )
}

export default Footer
