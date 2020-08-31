import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class NavMenu extends Component {
  render() {
    return (
      <div>
        <Navbar
          data-spy="scroll"
          data-target=".navbar"
          data-offset="50"
          className="nav"
          bg="dark"
          expand="lg"
        >
          {/* <Navbar.Brand href="/">Beige Cashmere</Navbar.Brand> */}
          <img src="logoOnly.png" alt="" className="navLogo" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#locationsScroll">Locations</Nav.Link>
              <Nav.Link href="#projectsScroll">Projects</Nav.Link>
              <Nav.Link href="#formScroll">Book Now</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavMenu;
