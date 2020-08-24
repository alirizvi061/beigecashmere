import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Beige Cashmere</h1>
        <br />
        <p>
          We’re beige cashmere and we specialize in video production, video
          editing , and photography
        </p>
        <br />
        <h1>LOCATIONS</h1>
        <div className="locations">
          <div className="locationsDiv">
            <img src="Chicago.jpg" className="locationsPic" alt="Chicago" />
            {/* <a href="/">CHICAGO</a> */}
          </div>
          <div className="locationsDiv">
            <img src="LA.jpg" className="locationsPic" alt="LA" />
            {/* <a href="/">LOS ANGELES</a> */}
          </div>
          <div className="locationsDiv">
            <img src="Newyork.jpg" className="locationsPic" alt="New York" />
            {/* <a href="/">NEW YORK</a> */}
          </div>
        </div>
        <h1>Projects</h1>
        <div className="projectImage">
          <img src="/" />
        </div>
      </div>
    );
  }
}

export default Home;
