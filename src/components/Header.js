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
        <NavbarBrand href="/">GOSTYLE COMMERCE</NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink href="/how-we-work">How we work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/our-collaborations">Our collaborations</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about-us">About us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/our-services">Our services</NavLink>
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