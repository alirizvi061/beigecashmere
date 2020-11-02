import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CompanyVideo from './videos/CompanyVideo';
import history from '../../src/history';


class Home extends Component {


  render() {

    console.log(this.state)
    return (
      <div className="homePage">
        <img src="BCLogo.png" alt='' className="homeLogo" />
        {/* <h1>Beige Cashmere</h1> */}
        <h1 className="introText">
          YOUR DESTINATION FOR ALL YOUR VIDEO PRODUCTION & PHOTOGRAPHY NEEDS
        </h1>
        <CompanyVideo />
        <div id="projectsScroll"><br />
          <h1>PROJECTS</h1>
        </div>
        <div class="container" >
          {/* <p>Check out our projects</p> */}
          <img className="projectImage image" src="Home-page-projects-pic-min.png" alt="" />
          <div class="overlay">
            <Link to="/projects" className="locationText">
              <div class="text">
                <h1>VIEW OUR PROJECTS!</h1>
              </div>
            </Link>
          </div>
        </div>
        <div id="locationsScroll"><br />
          <div className="bookNowButtonDiv">
            <a className="bookNowButton" href="#formScroll">BOOK NOW </a>
          </div>
          <h1>LOCATIONS</h1>
        </div>
        <div className="locations">
          <div className="locationsDiv">
            <Link to="/la">
              <img src="LA.jpg" className="locationsPic" alt="LA" />
            </Link>
            <Link to="/la" className="locationText">
              LOS ANGELES
            </Link>
            {/* <div class="locationText">LOS ANGELES</div> */}
            {/* <a href="/">LOS ANGELES</a> */}
          </div>
          <div className="locationsDiv">
            <Link to="/chicago">
              <img src="Chicago.jpg" className="locationsPic" alt="Chicago" />
            </Link>
            <Link to="/chicago" className="locationText">
              CHICAGO
            </Link>
            {/* <a href="/">CHICAGO</a> */}
          </div>
          <div className="locationsDiv">
            <Link to="/newyork?tab=ny">
              <img src="Newyork.jpg" className="locationsPic" alt="New York" />
            </Link>
            <Link to="/newyork" className="locationText">
              NEW YORK
            </Link>
            {/* <a href="/">NEW YORK</a> */}
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
