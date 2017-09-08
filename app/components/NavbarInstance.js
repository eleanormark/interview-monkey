import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarInstance = () => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a style={{ color: "#5bc0de" }} href="#">
            Interview Monkey
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            <Link to={"/"}>Question Lists</Link>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <Link to={"/responseList"}>Responses</Link>
          </NavItem>
          <li>
            <a
              href="https://interview-monkey.herokuapp.com/#/qa/700f0ea9-7a9a-4917-ac20-3953547f78a0"
              target="_blank"
            >
              Practice Questions
            </a>
          </li>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            <Link to={"/login"}>Login</Link>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <Link to={"/signup"}>Sign Up</Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarInstance;
