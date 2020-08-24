import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../App.css';

class NavMenu extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" className="customNav">
          <Navbar.Brand href="#home">Beige Cashmere</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">Locations</Nav.Link>
              <Nav.Link href="#link">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavMenu;
