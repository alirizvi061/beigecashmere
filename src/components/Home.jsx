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
        <h1 className="introText">
          YOUR DESTINATION FOR ALL YOUR VIDEO PRODUCTION & PHOTOGRAPHY NEEDS
        </h1>
        <CompanyVideo />
        <div id="projectsScroll"><br />
          <h1>PROJECTS</h1>
        </div>
        <div class="container" >
          <img className="projectImage image" src="homepage_videography.png" alt="" />
          <div class="overlay">
            <Link to="/projects" className="locationText">
              <div class="text">
                <h1>VIEW OUR VIDEO PROJECTS!</h1>
              </div>
            </Link>
          </div>
        </div>
        <div class="container" >
          <img className="projectImage image" src="homepage_photography.png" alt="" />
          <div class="overlay">
            <Link to="/photography" className="locationText">
              <div class="text">
                <h1>VIEW OUR PHOTO PROJECTS!</h1>
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
              <img src="https://images.unsplash.com/photo-1544413660-299165566b1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" className="locationsPic" alt="LA" />
            </Link>
            <Link to="/la" className="locationText">
              LOS ANGELES
            </Link>
          </div>
          <div className="locationsDiv">
            <Link to="/chicago">
              <img src="https://images.unsplash.com/photo-1563718944-758794a56b34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80" className="locationsPic" alt="Chicago" />
            </Link>
            <Link to="/chicago" className="locationText">
              CHICAGO
            </Link>
          </div>
          <div className="locationsDiv">
            <Link to="/newyork">
              <img src="https://images.unsplash.com/photo-1528291151377-165f5107c82a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80" className="locationsPic" alt="New York" />
            </Link>
            <Link to="/newyork" className="locationText">
              NEW YORK
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
