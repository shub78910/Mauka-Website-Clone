import React from 'react'
import "./Modules.css"
import ModuleComponent from "./ModuleComponent.jsx"



let data = [
    {
        imgsrc:"fa fa-comments fa-5x",
        heading: "Communication",
        desc: "Empower your ideas with the communication they deserve."
    },
    {
        imgsrc:"fa fa-users fa-5x",
        heading: "Collaboration",
        desc: "Learn to make and work in high functioning, performance driven teams."
    },
    {
        imgsrc:"fa fa-line-chart fa-5x",
        heading: "Critical Thinking",
        desc: "Make problem solving your forté. Regardless of the complexity or domain."
    },
    {
        imgsrc:"fa fa-paint-brush fa-5x",
        heading: "Creativity",
        desc: "We don’t teach creativity. We just create the most conducive environment to foster yours"
    }
]


function Modules() {
    return (
        <div data-aos="fade-up" className="modules_wrapper">
            <h1>Modules</h1>
            <h2>Master the 4C's</h2>

            <div className="module_components_grid">
            {
                data.map((item)=>{
                    return <ModuleComponent imgsrc={item.imgsrc} heading={item.heading} desc={item.desc} />
            })
            }
            </div>
        </div>
    )
}

export default Modules
{/* <i class="far fa-comments"></i> */}