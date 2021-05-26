import React from 'react'
import "./Header.css"
import maukaSnippet from "./Resources/maukaSnippet.JPG"

function Header() {
    return (
        <div data-aos="fade-up" className="header_wrapper">
            <div className="header_text_left">
            <h1>
            Mauka is building a playground for you.
            </h1>

            <p>
            A professional playground for you to learn, discover, fail and grow with like minded people.
            </p>

            <button>Join now</button>
            </div>

            <div className="snippet_right">

            <img data-aos="fade-left" className="maukaSnippet" src={maukaSnippet} />
            </div>
        </div>
    )
}

export default Header
