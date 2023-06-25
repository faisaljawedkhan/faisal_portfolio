import React from 'react'
import "../CSS/Footer.css"
import { BsGithub, BsLinkedin, BsMedium, BsBook } from "react-icons/bs";
import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

const Footer = () => {
    function goToTop() {
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return (
        <>
            <section className="footer-section">
                <div className="container-fluid">
                    <div className="row justify-content-evenly">
                        <div className="col-md-12 footer-content-social-icon">
                            <div className="footer-left-side">
                                <h2>FAISAL JAWED KHAN</h2>
                                <p>A Passionate Front-end Web Developer crafting user-friendly websites.</p>
                            </div>
                            <div className="footer-right-side">
                                <h4>SOCIAL</h4>
                                <ul>
                                    <li><Link to="https://github.com/faisaljawedkhan?tab=repositories" target="_blank" rel="noopener noreferrer"><i><BsGithub /></i></Link></li>
                                    <li><Link to="https://www.linkedin.com/in/faisal-jawed-khan-8486b9157/" target="_blank" rel="noopener noreferrer"><i><BsLinkedin /></i></Link></li>
                                    <li><Link to="https://faisalthermaltech.medium.com/" target="_blank" rel="noopener noreferrer"><i><BsMedium /></i></Link></li>
                                    <li><Link to="https://dev.to/faisaljawedkhan" target="_blank" rel="noopener noreferrer"><i><BsBook /></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12 footer-copyright-section">
                            <p>&copy; Copyright 2023, Built by <span className='personName' onClick={goToTop}>Faisal Jawed Khan</span></p>
                            {/* <p className='design-para'>Designed by <span className='personName'>Aparna Panda</span></p> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;