import React from 'react'
import "./Navigation.css"
import maukaLogo from "./Resources/maukaLogo.JPG"

function toggleList(){
    let navLinks = document.querySelector(".navLinks");
    navLinks.classList.toggle("active")
}

function toggleMiniList(){
    let subNavContent = document.querySelector(".subNavContent");
    subNavContent.classList.toggle("subNavContentHover");
}

function Navigation() {
    return (
        <div className="nav">
            <div className="logo">
                <img src={maukaLogo} />
            </div>

            <div onClick={toggleList} className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <div className="navLinks">
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Cohort Zero</li></a>
                    <a id="hoverDropDown" href="#">
                    <li>
                    <span>Modules <span><i className="fa fa-arrow-down" onClick={toggleMiniList} id="downArrow"></i> </span> </span>

                    <div className="subNavContent">

                    
                        <span>Communication</span>
                        <span>Collaboration</span>
                        <span>Creativity</span>
                        <span>Critical thinking</span>
                    

                    </div>

                    </li>
                    </a>
                    <a href="#"><li>Talk to us</li></a>
                    <a href="#"><li>Join now</li></a>
                    <a href="#"><li>Login</li></a>
                </ul>
            </div>
        </div>
    )
}

export default Navigation