import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CompanyVideo from './videos/CompanyVideo';
import history from '../../src/history';
import { Carousel } from "react-bootstrap";




class Home extends Component {


  testimonial = [
    {
      testimonial: "Execellent Work! I had a very specific deadline and honestly I was asking a lot... they gave a very excellent price, and exceeded my expectations! Responsive, professional, amazing work! Would hire for future project! Hire them, you won't be disappointed!!",
      name: "Emmma G.",
      service: "Video Editing"
    },
    // {
    //   name: "KIMBERLY REED",
    //   title: "PROJECT MANAGER",
    //   img: "Kimberly Reed Project Manager.JPG"
    // },
    // {
    //   name: "MICHAEL EZRACHI",
    //   title: "DIRECTOR OF PHOTOGRAPHY",
    //   img: "Michael Ezrachi Director Of Photography.jpg"
    // }
  ];

  render() {

    console.log(this.state)
    return (
      <div className="homePage">
        <img src="BCLogo.png" alt='' className="homeLogo" />
        <h1 className="introText">
          AFFORDABLE HIGH-QUALITY VIDEO PRODUCTION & PHOTOGRAPHY
        </h1>
        <CompanyVideo />
        <div id="projectsScroll"><br />
          <h1>PROJECTS</h1>
        </div>
        <div class="container" >
          <img className="projectImage image" src="homepage_videography.png" alt="" />
          <div class="overlay">
            <Link to="/videography" className="locationText">
              <div class="text">
                <h1>VIDEOGRAPHY</h1>
              </div>
            </Link>
          </div>
        </div>
        <div class="container" >
          <img className="projectImage image" src="homepage_photography.png" alt="" />
          <div class="overlay">
            <Link to="/photography" className="locationText">
              <div class="text">
                <h1>PHOTOGRAPHY</h1>
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

        <div>
          <h1>TESTIMONIALS</h1>
          <Carousel>
            <Carousel.Item>
              { }
              <div className="carouselItem">
                <span className="carouselItem-text">

                  <h3>Execellent Work! I had a very specific deadline and honestly I was asking a lot... they gave a very excellent price, and exceeded my expectations! Responsive, professional, amazing work! Would hire for future project! Hire them, you won't be disappointed!!</h3>

                  <h5> - Emmma G. (Video Editing)</h5>
                </span>

              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselItem">
                <span className="carouselItem-text">

                  <h3>These videos came out better than we were hoping! We are blown away with the quality of these videos and appreciate that this was able to help us with our vision and create something so professional and well executed. Thanks again!</h3>

                  <h5> - Zach P. (Video Production)</h5>
                </span>

              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselItem">
                <span className="carouselItem-text">

                  <h3>Beige Cashmere LA paid close attention to what I needed from my photoshoot. They were professional in their approach and delivered the photos quickly with great quality.</h3>

                  <h5> - Ramtin N. (Portrait Photography)</h5>
                </span>

              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselItem">
                <span className="carouselItem-text">

                  <h3>Amazing customer service!!! Kawser picked up the phone QUICKLY, and was so warm and personable. He gave me pricing options that were very reasonable. The job was complete as promised on schedule, and the quality was fabulous. DEFINITELY recommend Beige Cashemre, and will definitely hire them again. Very happy!</h3>

                  <h5> - Samantha B. (Video Editing)</h5>
                </span>

              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselItem">
                <span className="carouselItem-text">

                  <h3>Beige Cashmere was amazing. I had a last minute video that needed to be created within a few hours. He made it happen for me with ease. He was very professional and helpful. I will definitely use him again.</h3>

                  <h5> - Tamela B. (Video Editing)</h5>
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
