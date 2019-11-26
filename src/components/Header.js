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
  DropdownItem
} from 'reactstrap';
import cookie from 'react-cookies';


const Header1 = (props) => {
  const [isOpen, setIsOpen] = useState(false);


  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar color="light" light expand="lg"> 
        <NavbarToggler onClick={toggle} />
        <NavbarBrand href="/"><img alt="missing logo" src={"https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/gostylelogo.png"} /></NavbarBrand>
        <Collapse isOpen={isOpen} navbar >
          <Nav className="mx-auto" navbar id={isOpen ? "mySidenav" : ""}  className={isOpen ? "sidenav" : ""}  style={{width: isOpen ? "100%" : "auto"}}>
          <a href="#!" className="closebtn" onClick={toggle} >&times;</a>
            <NavItem>
              <NavLink href="/how-we-work">How We Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#clients">Our Clients</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about-us">About Us</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="/our-services">Our services</NavLink>
            </NavItem> */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Our Services
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/commerce">Ecommerce Solutions</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/our-services">Inbound Marketing</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/our-services">Website Design & Development</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/our-services">Custom Solutions</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <div className="right-menu">
              <NavItem>
                {cookie.load('token') !== undefined &&
                  <NavLink href="/logout" className="login btn">Logout</NavLink>
                }
                {
                  cookie.load('token') === undefined &&
                  <NavLink href="/login" className="login btn">Login</NavLink>
                }
              </NavItem>
              <NavItem>
                <NavLink href="#booking" className="login btn">Book Now</NavLink>
              </NavItem>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header1;