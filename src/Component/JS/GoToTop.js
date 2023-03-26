import React, { useEffect, useState } from 'react'
import Icon from "../../Image/Move_To_Top_Icon.png"
import "../CSS/Navbar.css"
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
    const goToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    }

    const listenToScroll = () => {
      let heightToHidden = 250;
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      if (winScroll > heightToHidden) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    useEffect (() => {
      window.addEventListener("scroll", listenToScroll);
      return () => {
        window.removeEventListener("scroll", listenToScroll);
      }
    })
  return (
    <>
    {
      isVisible && (
        <div className="moveToTopDiv" onClick={goToTop} >
        {/* <img src={Icon} alt="Move to Top Button" className='img-fluid moveToTopImage' /> */}
        <i><FaArrowUp /></i>
    </div>
      )
    }
    </>
  )
}

export default GoToTop;