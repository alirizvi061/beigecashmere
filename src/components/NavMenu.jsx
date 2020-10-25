import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../App.css";
import qs from "query-string";


class NavMenu extends Component {



  componentDidUpdate() {
    this.navBarFunc()

  }

  render() {

    const urlTab = qs.parse(window.location.search).tab
    console.log(urlTab)


    const navBarFunc = () => {
      if (window.location.search) {
        return (
          <>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                <Nav.Link className='navButtons' href='/'>
                  HOME
            </Nav.Link>
                {/* <Nav.Link href='/projects'>PROJECTS</Nav.Link>
              <Nav.Link href='#locationsScroll'>LOCATIONS</Nav.Link> */}
                <Nav.Link href='#formScroll'>BOOK NOW</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </>
        )
      } else {
        return (
          <>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                <Nav.Link className='navButtons' href='/'>
                  HOME
            </Nav.Link>
                <Nav.Link href='/projects?tab=projects'>PROJECTS</Nav.Link>
                {/* <Nav.Link href='#locationsScroll'>LOCATIONS</Nav.Link> */}
                <Nav.Link href='#formScroll'>BOOK NOW</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </>
        )
      }
    }

    return (
      <div>
        <Navbar
          data-spy='scroll'
          data-target='.navbar'
          data-offset='50'
          className='nav fixed-top'
          expand='lg'
        >

          <Link to='/'>
            <img src='logoOnly.png' alt='' className='navLogo' />
          </Link>
          {/* {navBarFunc()} */}

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link className='navButtons' href='/'>
                HOME
              </Nav.Link>
              {!window.location.search ?
                <Nav.Link href='/projects?tab=projects'>PROJECTS</Nav.Link>
                : null
              }

              {/* <Nav.Link href='#locationsScroll'>LOCATIONS</Nav.Link> */}
              <Nav.Link href='#formScroll'>BOOK NOW</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavMenu;
