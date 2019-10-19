import React, { useState } from 'react';
import './Header.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

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
                <NavLink href="/our-collaborations">Our Collaborations</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about-us">About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/our-services">Our Services</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="" className="login btn">Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default Header1;