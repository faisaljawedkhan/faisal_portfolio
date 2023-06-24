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
                    <p>A Passionate Front-end Web Developer crafting user-friendly websites.</p>
                    </div>
                    <div className="footer-right-side">
                    <h4>SOCIAL</h4>
                    <ul>
                        <li onClick={() => window.open("https://github.com/faisaljawedkhan?tab=repositories")}><i><BsGithub /></i></li>
                        <li onClick={() => window.open("linkedin.com/in/faisal-jawed-khan-8486b9157")}><i><BsLinkedin /></i></li>
                        <li onClick={() => window.open("https://faisalthermaltech.medium.com/")}><i><BsMedium /></i></li>
                        <li onClick={() => window.open("https://dev.to/faisaljawedkhan")}><i><BsBook /></i></li>
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