import React, { Component } from 'react';
// import Addley from "../../public/teamLA/Addley Saimbert Director.jpg"

class Chicago extends Component {
    render() {
        const teamArr = [
            {
                name: "KAWSER KHAN",
                title: "EXECUTIVE PRODUCER",
                img: "Kawser Khan Executive Producer CHI.jpg"
            },
            {
                name: "KIMBERLY REED",
                title: "PROJECT MANAGER",
                img: "Kimberly Reed Project Manager CHI.JPG"
            },
            {
                name: "AVANI MEHTA",
                title: "PRODUCER",
                img: "Avani Mehta Producer.jpeg"
            },
            {
                name: "DAN FONG",
                title: "DIRECTOR OF PHOTOGRAPHY",
                img: "Dan Fong Director Of Photography.jpeg"
            },
            {
                name: "KYLE EDDY",
                title: "PHOTOGRAPHER",
                img: "Kyle Eddy Photographer.jpg"
            },
            {
                name: "LORENZO LEYVA",
                title: "DIRECTOR",
                img: "Lorenzo Leyva Director.jpg"
            }
        ];
        return (
            <div>
                <h1>CHICAGO</h1>
                <h3>ABOUT US</h3>

                <h5 className='aboutBlurb'>WE ARE BEIGE CASHMERE.

                OUR MISSION IS TO TRANSFORM THE MEDIA AND ENTERTAINMENT LANDSCAPE THROUGH CULTURAL DIVERSITY AND CREATIVE EMPOWERMENT.

                SINCE 2017 WE HAVE STRIVED TOWARDS PRODUCING THE HIGHEST CALIBER OF CONTENT WHILE SHOWCASING THE EXCELLENCE OF ALL PEOPLE THROUGH A VISUAL MEANS.

                FROM THE INITIAL CONCEPTION OF YOUR PROJECT TO THE FINISHED PRODUCT, WE ARE WITH YOU EVERY STEP OF THE PRODUCTION PROCESS.

                OUR BEIGE EXCELLENCE PROMISE ENSURES YOUR FULL SATISFACTION OR WE WILL DO EVERYTHING POSSIBLE IN ORDER TO MAKE THINGS RIGHT.
                </h5>
                <h5 className='aboutBlurb'>GET IN TOUCH AND LET’S SHIFT YOUR VISION TO REALITY. </h5>

                <div className="bookNowButtonDiv">
                    <a className="bookNowButton" href="#formScroll">BOOK NOW </a>
                </div>


                <h1 className="meetTeamHeader">MEET THE TEAM</h1>


                <div>
                    <div className='teamPicDiv'>

                        {teamArr.map((teamMember, index) => {
                            console.log(teamMember.img, index)

                            return (
                                <span className="teamPicSpan">
                                    <img className="teamPic" img src={teamMember.img} alt="Team Member" />
                                    <h5>{teamMember.name + " - " + teamMember.title}</h5>
                                </span>

                            )
                        })}
                    </div>
                </div>
            </div >
        )
    }
}


export default Chicago;