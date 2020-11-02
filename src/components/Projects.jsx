import React, { Component } from "react";
const Spinner = require('react-spinkit');

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  hideSpinner = () => {
    this.setState({
      loading: false
    });
  };

  render() {
    let commercialVideos = [
      [
        { title: "Gravity Ball Tennis Commercial", id: "463258092" },
        { title: "Gravity Ball Company Commercial", id: "463258074" },
        { title: "Gravity Ball Golf Commercial", id: "463258064" },
        { title: "GRAVITY BALL BASEBALL FINAL.mp4", id: "461896496" },
        { title: "Gravity Ball Golf Commercial", id: "461894477" },
        { title: "Gravity Ball Baseball Commercial", id: "461894002" },
        { title: "Claire Proft Interview Commercial", id: "460807902" },
        { title: "Claire Proft Commercial 2", id: "460807710" },
        { title: "Claire Proft Lifestyle Commercial", id: "460765693" },
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
        { title: "LA Vitality MD Commercial3", id: "460719800" },
        { title: "LA Vitality MD Commercial2", id: "460719413" },
        { title: "LA Vitality MD Commercial1", id: "460718607" },
        { title: "Solar Bank Commercial3", id: "460715965" },
        { title: "Solar Bank Commercial2", id: "460714992" },
        { title: "Solar Bank Commercial1", id: "460714697" },
        { title: "Solar Bank Commercial 4", id: "466880175" },
        { title: "Talosys Commercial 1", id: "460707185" },
        { title: "Talosys Commercial 2", id: "460706925" },
        { title: "IV Organics Commercial", id: "460702354" },
        { title: "UO STUDIOS Commercial", id: "460434871" },
        {
          title: "American Martial Arts Academy Naperville HighlightVideo",
          id: "463260221",
        },
        {
          title: "American Martial ArtsAcademy Naperville Commercial",
          id: "463259861",
        },
        {
          title: "Noya Jibon Made Fairly KickstarterCampaign Video",
          id: "460741963",
        },
        { title: "Keys To The Kingdomof Heaven Short Film", id: "460720521" },

      ]
    ];

    let musicVideos = [
      [
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
        { title: "88Seasons TeaserTrailer", id: "460716508" },
        { title: "Silk Route Final Cut", id: "460431089" },
        { title: "The Prophecy Final Cut", id: "460434318" },
        { title: "Curtains Closed - B.BLESS", id: "460434876" },
      ]
    ];

    let otherVideos = [
      [
        { title: "Gagan & Jolly's Wedding", id: "463256967" },
        { title: "Rehan's Proposal", id: "460740962" },
        { title: "Fahad & Hafsah's Wedding", id: "463256874" },
        { title: "Cairo'sBirthday", id: "460738785" },
        { title: "Phil & Kat'sWedding", id: "460738170" },
        { title: "Julie's Wedding", id: "460737981" },
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

        <h1>VIDEO PRODUCTION</h1>

        <button
          className='accordion text-center'
          onClick={(event) => accordionClick(event)}
        >
          MUSIC VIDEOS
        </button>

        <div className='accordion-panel'>
          {this.state.loading ? (

            <Spinner
              className="loading text-center"
              name="three-bounce"
              color="white"
              fadeIn="none"
            />

          ) : null}
          {musicVideos.map((row, rIndex) => {
            return (
              <div className='commercialsDiv' key={`row_${rIndex}`}>
                {row.map((video) => {
                  return (

                    <iframe
                      className='videos'
                      key={`key_${video.id}`}
                      title={video.title}
                      onLoad={this.hideSpinner}
                      src={`https://player.vimeo.com/video/${video.id}`}
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
          COMMERCIALS
        </button>

        <div className='accordion-panel'>
          {this.state.loading ? (
            <Spinner
              className="loading text-center"
              name="three-bounce"
              color="white"
              fadeIn="none"
            />
          ) : null}
          {commercialVideos.map((row, rIndex) => {
            return (
              <div className='commercialsDiv' key={`row_${rIndex}`}>
                {row.map((video) => {
                  return (
                    <iframe
                      className='videos'
                      key={`key_${video.id}`}
                      title={video.title}
                      src={`https://player.vimeo.com/video/${video.id}`}
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
          WEDDINGS & EVENTS
        </button>

        <div className='accordion-panel'>
          {this.state.loading ? (
            <Spinner
              className="loading text-center"
              name="three-bounce"
              color="white"
              fadeIn="none"
            />
          ) : null}
          {otherVideos.map((row, rIndex) => {
            return (
              <div className='commercialsDiv' key={`row_${rIndex}`}>
                {row.map((video) => {
                  return (
                    <iframe
                      className='videos'
                      key={`key_${video.id}`}
                      title={video.title}
                      src={`https://player.vimeo.com/video/${video.id}`}
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
  {
    title: "American Martial Arts Academy Naperville HighlightVideo",
    id: "463260221",
  },
  {
    title: "American Martial ArtsAcademy Naperville Commercial",
    id: "463259861",
  },
  { title: "Gravity Ball Tennis Commercial", id: "463258092" },
  { title: "Gravity Ball Company Commercial", id: "463258074" },
  { title: "Gravity Ball Golf Commercial", id: "463258064" },
  { title: "Fahad & Hafsah's Wedding", id: "463256874" },
  { title: "Gagan & Jolly's Wedding", id: "463256967" },
  { title: "Beige Cashmere Company Video", id: "396879856" },
  { title: "GRAVITY BALL BASEBALL FINAL.mp4", id: "461896496" },
  { title: "Gravity Ball Golf Commercial", id: "461894477" },
  { title: "Gravity Ball Baseball Commercial", id: "461894002" },
  { title: "Claire Proft Interview Commercial", id: "460807902" },
  { title: "Claire Proft Commercial 2", id: "460807710" },
  { title: "Claire Proft Lifestyle Commercial", id: "460765693" },
  { title: "Rehan's Proposal", id: "460740962" },
  {
    title: "Noya Jibon Made Fairly KickstarterCampaign Video",
    id: "460741963",
  },
  { title: "Cairo'sBirthday", id: "460738785" },
  { title: "Phil & Kat'sWedding", id: "460738170" },
  { title: "Julie's Wedding", id: "460737981" },
  { title: "AutoMax Exotics StreetCommercial", id: "460735401" },
  { title: "AutoMax ExoticsCommercial", id: "460735203" },
  { title: "Lady D Cosmetics BTSCommercial", id: "460733901" },
  { title: "Bala EnzymeCommercial 4", id: "460732074" },
  { title: "Lady D LashesCommercial", id: "460731842" },
  { title: "Bala EnzymeCommercial 3", id: "460730949" },
  { title: "Bala EnzymeCommercial 2", id: "460730755" },
  { title: "Bala EnzymeCommercial 1", id: "460730623" },
  { title: "Mian Vienna HairCommercial", id: "460724735" },
  { title: "USA AllegianceCommercial 4", id: "460724039" },
  { title: "USA AllegianceCommercial 3", id: "460723936" },
  { title: "USA AllegianceCommercial 2", id: "460723696" },
  { title: "USA AllegianceCommercial 1", id: "460723519" },
  { title: "Amelia GraceCommercial", id: "460722095" },
  { title: "Keys To The Kingdomof Heaven Short Film", id: "460720521" },
  { title: "LAVitality MD Commercial 3", id: "460719800" },
  { title: "LA VitalityMD Commercial 2", id: "460719413" },
  { title: "LA Vitality MDCommercial 1", id: "460718607" },
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
  { title: "What IWant - Coolest Kid AJ", id: "460427859" },
  { title: "Car/Gaari- Siddzartha", id: "460426964" },
  { title: "Bust Down Necklace- Nat$uki", id: "460425662" },
  { title: "Confession -CAM", id: "460426477" },
  { title: "My Dawg - CAM", id: "460426758" },
  { title: "Bleed - VK Belle", id: "460425375" },
  { title: "California Girl - Ju$to", id: "460425101" },
];

*/
