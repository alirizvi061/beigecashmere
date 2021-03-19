import React from "react"
import ReactGA from "react-ga"

export const BookNowClick = function () {
    ReactGA.initialize("UA-181230328-1")

    ReactGA.event({
        category: 'User',
        action: 'User Clicked Request A Free Quote Button',
        label: "Abrakadabra"
    });
    console.log("User Clicked Request A Free Quote Button")

    return '';
}
