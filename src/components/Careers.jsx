import React from 'react'
import CareersVideo from './videos/CareersVideo'
import Mailto from "react-protected-mailto"

function Careers() {
    return (
        <div>
            <h1 class="mainHeading">CAREERS</h1>
            <CareersVideo />

            <div className="careers-div">
                <div className="careers-jobs-div">
                    <h1>Jobs</h1>
                    <h5>
                        Beige Cashmere is growing quickly and always seeking new creative visionaries to expand our global team.
                    </h5>
                    <h5>
                        We strive for excellence and take the same approach when building our team of highly skilled creators across a variety of disciplines.
                    </h5>
                    <span style={{ "list-style-type": "none", "padding-inline-start": "none" }}>
                        <h5>Open Jobs:</h5>
                        <hr style={{ width: "30vw", border: "1px solid #e1c48a", marginTop: "0", marginBottom: "10px" }} />
                        <li>Cinematographer</li>
                        <li>Video Producer</li>
                        <li>Director</li>
                        <li>Video Editor</li>
                        <li>Sales Representative</li>
                    </span>
                </div>
                <div className="careers-internships-div">
                    <h1>Internships</h1>
                    <h5>
                        Beige Cashmere is home to a diverse group of interns from Universities across the U.S.
                    </h5>
                    <h5>We believe recruiting and developing the most talented people from diverse backgrounds, and skills is critical to the success of our company.
                    </h5>
                    <span style={{ "list-style-type": "none", "padding": "none" }}>
                        <h5>Open Internships:</h5>
                        <hr style={{ width: "30vw", border: "1px solid #e1c48a", marginTop: "0", marginBottom: "10px" }} />
                        <li>Assistant Cinematographer</li>
                        <li>Assistant Video Producer</li>
                        <li>Assistant Director</li>
                        <li>Assistant Video Editor</li>
                        <li>Assistant Sales Representative</li>
                    </span>

                </div>
                <div className="careers-emailus-text">
                    <h4 >If you are interested in applying for a position, please email us with an attached resume at <Mailto
                        email='INFO@BEIGECASHMERE.COM'
                        headers={
                            { subject: 'Applying for Position' }
                        } />

                    </h4>
                </div>

            </div>

        </div>
    )
}

export default Careers

