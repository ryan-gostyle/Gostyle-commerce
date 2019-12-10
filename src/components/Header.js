import React, { Component } from 'react';
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
import $ from 'jquery';

export default class Header1 extends Component {

  state = {
    isOpen: false,
    setIsOpen: false,
  }
  componentDidMount() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.header1').addClass("fixedheader");
      }
      else {
        $('.header1').removeClass("fixedheader");
      }
    });
  }



  toggle = () => this.setState({ isOpen: this.state.isOpen === true ? false : true });


  render() {
    const { isOpen } = this.state;
    return (
      <div >
        <Navbar className="header1" color="light" light expand="lg">
          <NavbarToggler onClick={this.toggle} />
          <NavbarBrand href="/"><img alt="missing logo" src={"https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Gostyle/gostylelogo.png"} /></NavbarBrand>
          <Collapse isOpen={isOpen} navbar >
            <Nav navbar id={isOpen ? "mySidenav" : ""} className={isOpen ? "sidenav mx-auto" : "mx-auto"} style={{ width: isOpen ? "100%" : "auto" }}>
              <a href="#!" className="closebtn" onClick={this.toggle} >&times;</a>
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
                    <NavLink href="/inbound">Inbound Marketing</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/website">Website Design & Development</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/custom">Custom Solutions</NavLink>
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

}
