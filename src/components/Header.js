import React, { useState } from 'react';
import './Header.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import cookie from 'react-cookies';

const Header1 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="lg">
        <NavbarToggler onClick={toggle} />
        <NavbarBrand href="/"><img alt="missing logo" src={"https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/gostylelogo.png"} /></NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink href="/how-we-work"><b>How We Work</b></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#clients"><b>Our Clients</b></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about-us"><b>About Us</b></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/our-services"><b>Our Services</b></NavLink>
            </NavItem>
            <NavItem>
              {cookie.load('token') !== undefined &&
                <NavLink href="/logout" className="login btn">logout</NavLink>
              }
              {
                cookie.load('token') === undefined &&
                <NavLink href="/login" className="login btn">Login</NavLink>
              }
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header1;