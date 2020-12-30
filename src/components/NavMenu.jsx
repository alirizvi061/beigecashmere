import React, { Component } from "react";
import { Nav, Navbar, NavDropdown, } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../App.css";


class NavMenu extends Component {

  render() {


    return (
      <div>

        <Nav.Link fixed="top" id='callToActionButtonDiv' href='#formScroll'>REQUEST A FREE QUOTE</Nav.Link>

        <Navbar
          data-spy='scroll'
          data-target='.navbar'
          data-offset='50'
          className='navbar fixed-top '
          expand='lg'
          fixed="top"
          style={{ marginTop: "40px" }}
        >
          <Link to='/'>
            <div>
              <img src='logoOnly.png' alt='' className='navLogo' />
            </div>
          </Link>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link className='navButtons' href='/'>
                HOME
              </Nav.Link>
              <Nav.Link href='/videography'>VIDEO PRODUCTION</Nav.Link>
              <Nav.Link href='/photography'>PHOTOGRAPHY</Nav.Link>
              <NavDropdown className="dropDownSubMenu-showbox" title="OUR TEAM" id="basic-nav-dropdown">
                <NavDropdown.Item className="dropDownSubMenu" href="/la">LOS ANGELES</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="dropDownSubMenu" href="/chicago">CHICAGO</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="dropDownSubMenu" href="/newyork">NEW YORK</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='#formScroll'>BOOK NOW</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavMenu;
