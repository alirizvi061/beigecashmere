import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <br></br>
        <h1>Beige Cashmere</h1>
        <br />
        <h3 className="introText">
          We’re beige cashmere and we specialize in video production, video
          editing , and photography
        </h3>
        <br />
        <div id="locationsScroll">
          <h1>LOCATIONS</h1>
        </div>
        <div className="locations">
          <div className="locationsDiv">
            <Link to="/chicago">
              <img src="Chicago.jpg" className="locationsPic" alt="Chicago" />
            </Link>
            <Link to="/chicago" className="text">
              CHICAGO
            </Link>

            {/* <a href="/">CHICAGO</a> */}
          </div>
          <div className="locationsDiv">
            <Link to="/la">
              <img src="LA.jpg" className="locationsPic" alt="LA" />
            </Link>
            <Link to="/la" className="text">
              LOS ANGELES
            </Link>

            {/* <div class="text">LOS ANGELES</div> */}
            {/* <a href="/">LOS ANGELES</a> */}
          </div>
          <div className="locationsDiv">
            <Link to="/newyork">
              <img src="Newyork.jpg" className="locationsPic" alt="New York" />
            </Link>
            <Link to="/newyork" className="text">
              NEW YORK
            </Link>
            {/* <a href="/">NEW YORK</a> */}
          </div>
        </div>
        <br></br>
        <div id="projectsScroll">
          <h1>Projects</h1>
        </div>
        <div className="projectImage">
          Insert Projects Images Here
          {/* <img src="/" /> */}
        </div>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Home;
