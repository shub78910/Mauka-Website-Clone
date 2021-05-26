import React from 'react'

function ModuleComponent({imgsrc,heading,desc}) {
    return (
        <div data-aos="zoom-out" className="ModuleComponent_wrapper">
            <i class={imgsrc}></i><br/>
            <h3>{heading}</h3><br/>
            <p>{desc}</p><br/>

            <button>Know More</button>
        </div>
    )
}

export default ModuleComponent
