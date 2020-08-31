import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <img src="BCLogo.png" alt='' className="homeLogo" />
        {/* <h1>Beige Cashmere</h1> */}
        <h5 className="introText">
          We're beige cashmere and we specialize in video production, video
          editing , and photography
        </h5>
        <div id="locationsScroll"><br />
          <h1>LOCATIONS</h1>
        </div>
        <div className="locations">
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
            <Link to="/newyork">
              <img src="Newyork.jpg" className="locationsPic" alt="New York" />
            </Link>
            <Link to="/newyork" className="locationText">
              NEW YORK
            </Link>
            {/* <a href="/">NEW YORK</a> */}
          </div>
        </div>
        <div id="projectsScroll"><br />
          <h1>Projects</h1>
        </div>
        <div class="container" >
          {/* <p>Check out our projects</p> */}
          <img className="projectImage image" src="Home-page-projects-pic.png" alt="" />
          <div class="overlay">
            <Link to="/projects" className="locationText">
              <div class="text">
                <h1>Check out our projects!</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
