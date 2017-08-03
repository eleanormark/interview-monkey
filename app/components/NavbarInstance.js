import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarInstance = () => {

  return (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a style={{color:"#5bc0de"}} href="#">Interview Monkey</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#"><Link to={'/'}>Question Lists</Link></NavItem>
        <NavItem eventKey={2} href="#"><Link to={'/responseList'}>Responses</Link></NavItem>
        <li><a href="http://localhost:8000/#/qa/d5a4d813-e2db-4e00-91e7-c388409c40d4" target="_blank" >Practice Questions</a></li>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#"><Link to={'/login'}>Login</Link></NavItem>
        <NavItem eventKey={2} href="#"><Link to={'/signup'}>Sign Up</Link></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
};

export default NavbarInstance;