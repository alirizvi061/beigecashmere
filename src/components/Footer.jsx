import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import ReactGA from "react-ga"
class Footer extends Component {

    render() {

        function socialIconClick(param) {
            console.log(param)
            ReactGA.initialize("UA-181230328-1")

            // console.log(param)
            if (param === "instagram") {
                ReactGA.event({
                    category: 'User',
                    action: 'User Clicked Instagram Link',
                    label: "Instagram Link Clicked"
                });
                console.log("User Clicked On Insta")
            } else if (param === "facebook") {
                ReactGA.event({
                    category: 'User',
                    action: 'User Clicked Facebook Link',
                    label: "Facebook Link Clicked"
                });
                console.log("User Clicked On FB")
            } else {
                ReactGA.event({
                    category: 'User',
                    action: 'User Clicked Youtube Link',
                    label: "Youtube Link Clicked"
                });
                console.log("User Clicked On YOUTUBE")
            }
        }

        return (
            <div className="footer">
                <div>
                    <SocialIcon onClick={() => socialIconClick('instagram')} className="socialIcon" url="http://instagram.com/beigecashmere" bgColor="#e1c48a" target="_blank" />
                    <SocialIcon onClick={() => socialIconClick('facebook')} className="socialIcon" url="http://facebook.com/beigecashmere" bgColor="#e1c48a" target="_blank" />
                    <SocialIcon onClick={() => socialIconClick('youtube')} className="socialIcon" url="https://www.youtube.com/channel/UCxjzG8XF1IpO_3zRRjawZRQ" bgColor="#e1c48a" target="_blank" />
                </div>
                <p>2021 BEIGE CASHMERE INC ©</p>
            </div>
        );
    }
}

export default Footer;