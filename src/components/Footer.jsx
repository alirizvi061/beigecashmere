import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div>
                    <SocialIcon className="socialIcon" url="http://instagram.com/beigecashmere" bgColor="#e1c48a" target="_blank" />
                    <SocialIcon className="socialIcon" url="http://facebook.com/beigecashmere" bgColor="#e1c48a" target="_blank" />
                    <SocialIcon className="socialIcon" url="https://www.youtube.com/channel/UCxjzG8XF1IpO_3zRRjawZRQ" bgColor="#e1c48a" target="_blank" />
                </div>
                <p>2019 BEIGE CASHMERE LLC ©</p>
            </div>
        );
    }
}

export default Footer;