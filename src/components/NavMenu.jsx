import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../App.css';

class NavMenu extends Component {
  render() {
    return (
      <div>
        <Navbar
          data-spy="scroll"
          data-target=".navbar"
          data-offset="50"
          className="nav fixed-top"
          // bg="dark"
          expand="lg"
        >
          {/* <Navbar.Brand href="/">Beige Cashmere</Navbar.Brand> */}
          <Link to="/">
            <img src="logoOnly.png" alt="" className="navLogo" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="#projectsScroll">PROJECTS</Nav.Link>
              <Nav.Link href="#locationsScroll">LOCATIONS</Nav.Link>
              <Nav.Link href="#formScroll">BOOK NOW</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavMenu;
