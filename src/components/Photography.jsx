import React, { Component } from "react";

class Photography extends Component {


    render() {
        let LifeStylePics = [
            { title: "PhotographyPhoto1.jpg" },
            { title: "PhotographyPhoto2.jpg" },
            { title: "PhotographyPhoto3.jpg" },
            { title: "PhotographyPhoto4.jpg" },
            { title: "PhotographyPhoto5.jpg" },
        ];
        let PortraitPics = [
            { title: "Portrait1.jpg" },
            { title: "Portrait2.jpg" },
            { title: "Portrait3.jpg" },
            { title: "Portrait4.jpg" },
            { title: "Portrait5.jpg" },
            { title: "Portrait6.jpg" },
            { title: "Portrait7.jpg" },
            { title: "Portrait8.jpg" },
            { title: "Portrait9.jpg" },
            { title: "Portrait10.jpg" },
            { title: "Portrait11.jpg" },
            { title: "Portrait12.jpg" },
            { title: "Portrait13.jpg" },
            { title: "Portrait14.jpg" },
            { title: "Portrait15.jpg" },
            { title: "Portrait16.jpg" },
            { title: "Portrait17.jpg" },
            { title: "Portrait18.jpg" },
        ];
        let ProductPics = [
            { title: "ProductPic1.jpg" },
            { title: "ProductPic2.jpg" },
            { title: "ProductPic3.jpg" },
            { title: "ProductPic4.jpg" },
            { title: "ProductPic5.jpg" },
            { title: "ProductPic6.jpg" },
            { title: "ProductPic7.jpg" },
            { title: "ProductPic8.jpg" },
            { title: "ProductPic9.jpg" },
            { title: "ProductPic10.jpg" },
            { title: "ProductPic11.jpg" },
            { title: "ProductPic12.jpg" },
            { title: "ProductPic13.jpg" },
            { title: "ProductPic14.jpg" },
            { title: "ProductPic15.jpg" },
            { title: "ProductPic16.jpg" },
            { title: "ProductPic17.jpg" },
        ];
        let WeddingPics = [
            { title: "WeddingEventsPic1.jpg" },
            { title: "WeddingEventsPic2.jpg" },
            { title: "WeddingEventsPic3.jpg" },
            { title: "WeddingEventsPic4.jpg" },
            { title: "WeddingEventsPic5.jpg" },
            { title: "WeddingEventsPic6.jpg" },
            { title: "WeddingEventsPic7.jpg" },
            { title: "WeddingEventsPic8.jpg" },
            { title: "WeddingEventsPic9.jpg" },
            { title: "WeddingEventsPic10.jpg" },
            { title: "WeddingEventsPic11.jpg" },
            { title: "WeddingEventsPic12.jpg" },
            { title: "WeddingEventsPic13.jpg" },
            { title: "WeddingEventsPic14.jpg" },
            { title: "WeddingEventsPic15.jpg" },
            { title: "WeddingEventsPic16.jpg" },
            { title: "WeddingEventsPic17.jpg" },
        ];


        function accordionClick(event) {
            event.target.classList.toggle("accordion-active");
            let panel = event.target.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 15 + "px";
            }
        }

        return (
            <div>

                <h1 class="mainHeading">PHOTOGRAPHY</h1>

                <button
                    className='accordion text-center'
                    onClick={(event) => accordionClick(event)}
                >
                    LIFESTYLE
        </button>

                <div className='accordion-panel'>
                    {LifeStylePics.map((row, rIndex) => {
                        return (
                            <span key={rIndex} className="teamPicSpan">
                                <img className="teamPic" img src={row.title} alt="Team Member" />
                            </span>
                        )
                    })}
                </div>


                <button
                    className='accordion text-center'
                    onClick={(event) => accordionClick(event)}
                >
                    PORTRAIT
        </button>

                <div className='accordion-panel'>
                    {PortraitPics.map((row, rIndex) => {
                        return (
                            <span key={rIndex} className="teamPicSpan">
                                <img className="teamPic" img src={row.title} alt="Team Member" />
                            </span>
                        )
                    })}
                </div>

                <button
                    className='accordion text-center'
                    onClick={(event) => accordionClick(event)}
                >
                    PRODUCT
        </button>

                <div className='accordion-panel'>
                    {ProductPics.map((row, rIndex) => {
                        return (
                            <span key={rIndex} className="teamPicSpan">
                                <img className="teamPic" img src={row.title} alt="Team Member" />
                            </span>
                        )
                    })}
                </div>


                <button
                    className='accordion text-center'
                    onClick={(event) => accordionClick(event)}
                >
                    WEDDING & EVENTS
        </button>

                <div className='accordion-panel'>
                    {WeddingPics.map((row, rIndex) => {
                        return (
                            <span key={rIndex} className="teamPicSpan">
                                <img className="teamPic" img src={row.title} alt="Team Member" />
                            </span>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Photography;

