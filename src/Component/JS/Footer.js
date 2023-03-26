import React from 'react'
import "../CSS/Footer.css"
import { BsGithub, BsLinkedin, BsMedium, BsBook } from "react-icons/bs";
// import { NavLink } from 'react-router-dom';

const Footer = () => {
    function goToTop () {
        document.documentElement.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }
  return (
    <>
    <section className="footer-section">
        <div className="container-fluid">
            <div className="row justify-content-evenly">
                <div className="col-md-12 footer-content-social-icon">
                    <div className="footer-left-side">
                    <h2>FAISAL JAWED KHAN</h2>
                    <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum</p>
                    </div>
                    <div className="footer-right-side">
                    <h4>SOCIAL</h4>
                    <ul>
                        <li><i><BsGithub /></i></li>
                        <li><i><BsLinkedin /></i></li>
                        <li><i><BsMedium /></i></li>
                        <li><i><BsBook /></i></li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-12 footer-copyright-section">
                    <p>&copy; Copyright 2023, Built by <span className='personName' onClick={goToTop}>Faisal Jawed Khan</span></p>
                    <p className='design-para'>Designed by <span className='personName'>Aparna Panda</span></p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer;