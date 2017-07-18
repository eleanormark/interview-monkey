import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const NavbarInstance = () => {

  return (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a style={{color:"#5bc0de"}} href="#">Interview Monkey</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Question Lists</NavItem>
        <NavItem eventKey={2} href="#">Response Lists</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Login</NavItem>
        <NavItem eventKey={2} href="#">Sign Up</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    
    
  )
};
export default NavbarInstance;