import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "./images/logo-review.png";
import home from "./images/home.jpeg";
import scheme from "./images/scheme.jpeg";
import about from "./images/about.jpeg";
import maps from "./images/maps.jpeg";

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} expand="md" className="fixed-top navbar-scroll" style={{backgroundImage:'rgba(0,0,0,0)'}}>
        <NavbarBrand href="/">
          <img style={{ width: "100px" }} src={logo} alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto d-flex justify-content-end" style={{width:'100%'}} navbar>
            <NavItem>
              <NavLink href="/">
                <img style={{ width: "40px" }} src={home} alt="home" />
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/scheme/">
                <img style={{ width: "40px" }} src={scheme} alt="scheme" />
                Scheme
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                <img style={{ width: "40px" }} src={maps} alt="maps" />
                maps
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/About/">
                <img style={{ width: "40px" }} src={about} alt="about" />
                About
              </NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
