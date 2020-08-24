import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div>
                    <SocialIcon className="socialIcon" url="http://instagram.com/beigecashmere" bgColor="#e1c48a" />
                    <SocialIcon className="socialIcon" url="http://facebook.com/beigecashmere" bgColor="#e1c48a" />
                    <SocialIcon className="socialIcon" url="http://youtube.com/beigecashmere" bgColor="#e1c48a" />
                </div>
                <p>2019 BEIGE CASHMERE LLC ©</p>
            </div>
        );
    }
}

export default Footer;