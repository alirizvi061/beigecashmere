import React from "react"

function CompanyVideo() {
    return (
        <div
            className="iframe-container"
        >
            <video style={{ width: '100vw', margin: '0' }} loop autoPlay muted id='vid'>
                <source src="BCIntroVideo.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default CompanyVideo