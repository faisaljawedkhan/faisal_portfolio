import React, { useRef } from 'react'
import "../CSS/Navbar.css"
import NavIcon from "../../Image/Navbar_Icon.png"
import { Link, NavLink } from 'react-router-dom'
import { FaAlignJustify } from "react-icons/fa";

const Navbar = () => {
    const toggleSection = useRef("");
    function toggleBtnSection () {
        toggleSection.current.classList.toggle("navigation-toggle-section");
    }
    function reachSection () {
        toggleSection.current.classList.remove("navigation-toggle-section");
    }
    function goToTop () {
        document.documentElement.scrollTo({top: 0, left: 0, behavior: "smooth"});
        toggleSection.current.classList.remove("navigation-toggle-section");
    }
  return (
    <>
    <header className='sticky-top'>
        <nav className='navbar-section'>
            <div className="container-fluid navbar-container">
                <div className="toggle-btn-section" onClick={toggleBtnSection}>
                    <i><FaAlignJustify /></i>
                </div>
            <div className="image-section">
                <NavLink to={"/"} className="href" onClick={goToTop}>
                    <span className='image-span'><img src={NavIcon} alt="Icon" /></span>
                    <span className='name-span'>FAISAL JAWED KHAN</span>
                </NavLink>
            </div>
            <div className="navigation-section" ref={toggleSection} onClick={reachSection}>
                <ul>
                    <li><a href="#about-us" className="href">About</a></li>
                    <li><a href="#projects" className="href">Projects</a></li>
                    <li><a href="#sercies-we-provide" className="href">Services</a></li>
                    <li><a href="#contact-us" className="href">Contact</a></li>
                    <li><Link to="https://dev.to/faisaljawedkhan" target="_blank" rel="noopener noreferrer" className="href">Blogs</Link></li>
                </ul>
            </div>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar;