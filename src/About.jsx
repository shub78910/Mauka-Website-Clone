import React from 'react'
import "./About.css"
import maukaSnippet2 from "./Resources/maukaSnippet2.JPG"



function About() {
    return (
        <div data-aos="fade-up" className="about_main_wrapper">
            <h1>About Mauka</h1>
            <div className='about_wrapper'>
                <div className="about_text_left">

                    <p>At Mauka, we believe there is always room to grow — for you and for us.</p>
                    <p>CohortZero will be the first of many communities for students to fail, learn, and improve. </p>

                </div>
                <div data-aos="zoom-out-up" className="image_right">
                    <img src={maukaSnippet2} />
                </div>

            </div>
        </div>
    )
}

export default About
