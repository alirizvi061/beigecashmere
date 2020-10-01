import React, { Component } from "react";
// import spinner from "../assests/spinner.gif";
// import Gravityballfinal from "./videos/Gravityballfinal"

class Projects extends Component {
  render() {
    let commercialVideos = [
      [
        {
          title: "Gravityball golf",
          src: "https://player.vimeo.com/video/461894477",
        },
        {
          title: "Gravity Ball",
          src: "https://player.vimeo.com/video/461896496",
        },
        {
          title: "Claire Proft Commercial 2",
          src: "https://player.vimeo.com/video/460807710",
        },
      ],
      [
        {
          title: "",
          src: "https://player.vimeo.com/video/460807902",
        },
        {
          title: "",
          src: "https://player.vimeo.com/video/460741963",
        },
        {
          title: "",
          src: "https://player.vimeo.com/video/460735401",
        },
      ],
      [
        {
          title: "",
          src: "https://player.vimeo.com/video/460719413",
        },
        {
          title: "",
          src: "https://player.vimeo.com/video/460733901",
        },
        {
          title: "Bala Enzyme Commercial 4",
          src: "https://player.vimeo.com/video/460732074",
        },
      ],
      [
        {
          title: "",
          src: "https://player.vimeo.com/video/460730949",
        },
        {
          title: "",
          src: "https://player.vimeo.com/video/460733901",
        },
        {
          title: "Bala Enzyme Commercial 2",
          src: "https://player.vimeo.com/video/460730755",
        },
      ],
      [
        {
          title: "",
          src: "https://player.vimeo.com/video/460730623",
        },
        {
          title: "",
          src: "https://player.vimeo.com/video/460724735",
        },
        {
          title: "LA Vitality MD Commercial 1",
          src: "https://player.vimeo.com/video/460718607",
        },
      ],
      [
        {
          title: "",
          src: "https://player.vimeo.com/video/460723936",
        },
        {
          title: "",
          src: "https://player.vimeo.com/video/460723696",
        },
        {
          title: "USA Allegiance Commercial 1",
          src: "https://player.vimeo.com/video/460723519",
        },
      ],
      [
        {
          title: "",
          src: "https://player.vimeo.com/video/460722095",
        },
        {
          title: "",
          src: "https://player.vimeo.com/video/460720521",
        },
        {
          title: "LA Vitality MD Commercial 3",
          src: "https://player.vimeo.com/video/460719800",
        },
      ],
    ];

    let musicVideos = [
      [
        {
          title: "Bitter Moments - Chris Marr",
          src: "https://player.vimeo.com/video/460430651",
        },
        {
          title: "Blessings - Gee Kazz",
          src: "https://player.vimeo.com/video/460430336",
        },
        {
          title: "Gimme That Nana - Steve Medea",
          src: "https://player.vimeo.com/video/460430197",
        },
      ],
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
        {/* <h1>PROJECTS</h1> */}
        <h1>PROJECTS</h1>
        <h2>COMMERCIALS</h2>
        {commercialVideos.map((row, rIndex) => {
          return (
            <div className='commercialsDiv' key={`row_${rIndex}`}>
              {row.map((video) => {
                return (
                  <iframe
                    key={`key_${video.src}`}
                    title={video.title}
                    src={video.src}
                    width='640'
                    height='160'
                    frameBorder='0'
                    allow='autoplay; fullscreen'
                    allowFullScreen
                  ></iframe>
                );
              })}
            </div>
          );
        })}

        <h2>MUSIC VIDEOS</h2>
        {musicVideos.map((row, rIndex) => {
          return (
            <div className='commercialsDiv' key={`row_${rIndex}`}>
              {row.map((video) => {
                return (
                  <iframe
                    key={`key_${video.src}`}
                    title={video.title}
                    src={video.src}
                    width='640'
                    height='160'
                    frameBorder='0'
                    allow='autoplay; fullscreen'
                    allowFullScreen
                  ></iframe>
                );
              })}
            </div>
          );
        })}

        <button
          className='accordion text-center'
          onClick={(event) => accordionClick(event)}
        >
          Accordion Header
        </button>

        <div className='accordion-panel'>{"test"}</div>
      </div>
    );
  }
}

export default Projects;
