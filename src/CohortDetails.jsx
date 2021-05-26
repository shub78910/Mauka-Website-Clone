import React from 'react'
import "./CohortDetails.css"
import maukaSnippet3 from "./Resources/maukaSnippet3.JPG"
import maukaCalender from "./Resources/maukaCalender.JPG"
import maukaGallery from "./Resources/maukaGallery.JPG"


function CohortDetails() {
    return (
        <div>
            <div data-aos="fade-up" className="about_main_wrapper">
                <h1>Cohort Details</h1>
                <div className='about_wrapper'>

                    <div className="image_right">
                        <img data-aos="zoom-in" src={maukaSnippet3} />
                    </div>

                    <div className="about_text_left">

                        <h3>Join our #CohortZero</h3>
                        <p>Get exclusive access to our community of 20 highly motivated individuals like you.</p>

                        <div className="cohort_details">
                            <div className="icons">
                                <img src={maukaCalender} />
                            </div>

                            <div className="cohort_details_text">
                                <h2>Cohort Timeline</h2>
                                <p>
                                    This cohort will start on 10th April and run for 60 days and will focus on high-demand, transferable skills that will give you an edge in your professional career.
                                </p>
                            </div>
                        </div>

                        <div className="cohort_details">
                            <div className="icons">
                                <img src={maukaGallery} />
                            </div>

                            <div className="cohort_details_text">
                                <h2>Focus on community and networking</h2>
                                <p>
                                    At Mauka, we focus on creating communities and conversations — with yourself, your peers and experts through a series of Q&As with moderators and industry veterans.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default CohortDetails

