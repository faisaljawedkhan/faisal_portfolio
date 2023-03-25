import React from 'react'
import "../CSS/Navbar.css"
import NavIcon from "../../Image/Navbar_Icon.png"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    function goToTop () {
        document.documentElement.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }
  return (
    <>
    <header className='sticky-top'>
        <nav className='navbar-section'>
            <div className="container-fluid navbar-container">
            <div className="image-section">
                <NavLink to={"/"} className="href" onClick={goToTop}>
                    <span className='image-span'><img src={NavIcon} alt="Icon" /></span>
                    <span className='name-span'>FAISAL JAWED KHAN</span>
                </NavLink>
            </div>
            <div className="navigation-section">
                <ul>
                    <li><a href="#about-me-section" className="href">About</a></li>
                    <li><a href="#projects-section" className="href">Projects</a></li>
                    <li><a href="#resume-heading-section" className="href">Resume</a></li>
                    <li><a href="#contacts-section" className="href">Contact</a></li>
                    <li><a href="/" className="href">Blogs</a></li>
                </ul>
            </div>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar;