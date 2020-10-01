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
        <button
          className='accordion text-center'
          onClick={(event) => accordionClick(event)}
        >
          COMMERCIALS
        </button>
        <div className='accordion-panel'>
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
        </div>

        <button
          className='accordion text-center'
          onClick={(event) => accordionClick(event)}
        >
          MUSIC VIDEOS
        </button>

        <div className='accordion-panel'>
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
        </div>
      </div>
    );
  }
}

export default Projects;

/*
//All Vimeo video titles and IDs for reference

let all = [
  { title: "AutoMax Exotics Street Commercial", id: "460735401" },
  { title: "AutoMax Exotics Commercial", id: "460735203" },
  { title: "Lady D Cosmetics BTS Commercial", id: "460733901" },
  { title: "Bala Enzyme Commercial 4", id: "460732074" },
  { title: "Lady D Lashes Commercial", id: "460731842" },
  { title: "Bala Enzyme Commercial 3", id: "460730949" },
  { title: "Bala Enzyme Commercial 2", id: "460730755" },
  { title: "Bala Enzyme Commercial 1", id: "460730623" },
  { title: "Mian Vienna Hair Commercial", id: "460724735" },
  { title: "USA Allegiance Commercial 4", id: "460724039" },
  { title: "USA Allegiance Commercial 3", id: "460723936" },
  { title: "USA Allegiance Commercial 2", id: "460723696" },
  { title: "USA Allegiance Commercial 1", id: "460723519" },
  { title: "Amelia Grace Commercial", id: "460722095" },
  { title: "Keys To The Kingdom of Heaven ShortFilm", id: "460720521" },
  { title: "LA Vitality MD Commercial3", id: "460719800" },
  { title: "LA Vitality MD Commercial2", id: "460719413" },
  { title: "LA Vitality MD Commercial1", id: "460718607" },
  { title: "88Seasons TeaserTrailer", id: "460716508" },
  { title: "Solar Bank Commercial3", id: "460715965" },
  { title: "Solar Bank Commercial2", id: "460714992" },
  { title: "Solar Bank Commercial1", id: "460714697" },
  { title: "Talosys Commercial 1", id: "460707185" },
  { title: "Talosys Commercial 2", id: "460706925" },
  { title: "IV Organics Commercial", id: "460702354" },
  { title: "Curtains Closed - B.BLESS", id: "460434876" },
  { title: "UO STUDIOS Commercial", id: "460434871" },
  { title: "The Prophecy Final Cut", id: "460434318" },
  { title: "Silk Route Final Cut", id: "460431089" },
  { title: "Bitter Moments - Chris Marr", id: "460430651" },
  { title: "Blessings - Gee Kazz", id: "460430336" },
  { title: "Gimme That Nana - Steve Medea", id: "460430197" },
  { title: "AMPM - Pe$ovelli", id: "460429619" },
  { title: "Ride For You - Ladini", id: "460429386" },
  { title: "I See You - Keany", id: "460429185" },
  { title: "Heavy In The Streets - FTLCOOLAID", id: "460428904" },
  { title: "Facts - FTLCOOLAID", id: "460428501" },
  { title: "What I Want - Coolest Kid AJ", id: "460427859" },
  { title: "Car/Gaari - Siddzartha", id: "460426964" },
  { title: "Bust Down Necklace - Nat$uki", id: "460425662" },
  { title: "Confession - CAM", id: "460426477" },
  { title: "My Dawg - CAM", id: "460426758" },
  { title: "Bleed - VK Belle", id: "460425375" },
  { title: "California Girl - Ju$to", id: "460425101" },
];

*/
