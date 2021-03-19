import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CompanyVideo from './videos/CompanyVideo';
import history from '../../src/history';
import { Carousel } from "react-bootstrap";
import { BookNowClick } from "./BookNowClick"

class Home extends Component {

  render() {

    return (
      <div className="homePage">
        <img src="BCLogo.png" alt='Beige Cashmere Logo' className="homeLogo" />
        <h1 className="introText">
          AFFORDABLE HIGH-QUALITY VIDEO PRODUCTION & PHOTOGRAPHY
        </h1>
        <CompanyVideo />
        <h3>ABOUT US</h3>
        <hr style={{ width: "50vw", border: "1px solid #e1c48a", marginTop: "0", marginBottom: "0" }} />
        <h5 className='aboutBlurb' style={{ marginTop: "10px" }}>
          At Beige Cashmere we specialize in affordable and on-demand video production and photography. Our mission is to transform the media and entertainment landscape through cultural diversity & creative empowerment. We have worked with a wide range of clients including influencers, major companies, startups, music artists/labels, families & more.
        </h5>
        <h5>Our Beige Excellence Promise ensures our client’s full satisfaction 100% of the time.</h5>

        <h6 style={{ marginTop: "30px" }}>COVID-19 Precautions: </h6>
        <hr style={{ width: "30vw", border: "1px solid #e1c48a", marginTop: "0", marginBottom: "0" }} />
        <p className='aboutBlurb' style={{ marginTop: "10px" }}>As we navigate a global pandemic, we continue to follow the Covid-19 guidelines set by the CDC. To ensure the safety of our clients, talent and crew, we take our team’s temperature before they start working, require face masks, practice social distance, and sanitize all surfaces used on set. </p>



        <div className="bookNowButtonDiv">
          <a onClick={BookNowClick} className="bookNowButton" href="#formScroll">BOOK NOW </a>
        </div>


        <div id="projectsScroll"><br />
          <h1>PROJECTS</h1>
        </div>
        <div class="container" >
          <img className="projectImage image" src="homepage_videography.png" alt="" />
          <div class="overlay">
            <a href="/videography" className="locationText">
              <div class="text">
                <h1>VIDEO PRODUCTION</h1>
              </div>
            </a>
          </div>
        </div>
        <div class="container" >
          <img className="projectImage image" src="homepage_photography.png" alt="" />
          <div class="overlay">
            <a href="/photography" className="locationText">
              <div class="text">
                <h1>PHOTOGRAPHY</h1>
              </div>
            </a>
          </div>
        </div>
        <div id="locationsScroll"><br />
          {/* <div className="bookNowButtonDiv">
            <a className="bookNowButton" href="#formScroll">BOOK NOW</a>
          </div> */}
          <h1>LOCATIONS</h1>
        </div>
        <div className="locations">
          <div className="locationsDiv">
            <a href="/la">
              <img src="https://images.unsplash.com/photo-1544413660-299165566b1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" className="locationsPic" alt="LA" />
              <span className="locationText">
                LOS ANGELES
            </span>
            </a>
          </div>
          <div className="locationsDiv">
            <a href="/chicago">
              <img src="https://images.unsplash.com/photo-1563718944-758794a56b34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80" className="locationsPic" alt="Chicago" />

              <span to="/chicago" className="locationText">
                CHICAGO
            </span>
            </a>
          </div>
          <div className="locationsDiv">
            <a href="/newyork">
              <img src="https://images.unsplash.com/photo-1528291151377-165f5107c82a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80" className="locationsPic" alt="New York" />

              <span to="/newyork" className="locationText">
                NEW YORK
            </span>
            </a>
          </div>
        </div>

        <div className="testimonialsDiv">
          <h1>TESTIMONIALS</h1>
          <Carousel>
            <Carousel.Item>
              <div className="carouselItem">
                <span className="carouselItem-text">

                  <h3 className="carouselItem-text-h3">The Beige Cashmere team worked on an impossible schedule and managed to produce and edit our City's annual address seamlessly. Their drone footage is immaculate and the editing quality top tier. We are so thankful to have found them. Thanks!</h3>

                  <h5 className="carouselItem-text-h3"> - Ericka M. (Video Production)</h5>
                </span>

              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselItem">
                <span className="carouselItem-text">

                  <h3 className="carouselItem-text-h3">These videos came out better than we were hoping! We are blown away with the quality of these videos and appreciate that this was able to help us with our vision and create something so professional and well executed. Thanks again!</h3>

                  <h5 className="carouselItem-text-h3"> - Zach P. (Video Production)</h5>
                </span>

              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselItem">
                <span className="carouselItem-text">

                  <h3 className="carouselItem-text-h3">Beige Cashmere LA paid close attention to what I needed from my photoshoot. They were professional in their approach and delivered the photos quickly with great quality.</h3>

                  <h5 className="carouselItem-text-h3"> - Ramtin N. (Portrait Photography)</h5>
                </span>

              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselItem">
                <span className="carouselItem-text">

                  <h3 className="carouselItem-text-h3">BC was awesome to work worth. Called them last minute and they were able to make it happen on very short notice... I will definitely be using them again as the quality of the film, customer service, and the ease of setting this project up were all SPECTACULAR! Thanks again</h3>

                  <h5 className="carouselItem-text-h3"> - Ryan C.  (Video Production)</h5>
                </span>

              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselItem">
                <span className="carouselItem-text">

                  <h3 className="carouselItem-text-h3">Beige Cashmere was amazing. I had a last minute video that needed to be created within a few hours. He made it happen for me with ease. He was very professional and helpful. I will definitely use him again.</h3>

                  <h5 className="carouselItem-text-h3"> - Tamela B. (Video Editing)</h5>
                </span>

              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}
export default Home;
