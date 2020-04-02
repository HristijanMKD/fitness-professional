import React from "react";

import { Navbar, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand>
          <Link style={{ color: "red" }} to="/">
            Proffesional
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Почетна</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/gallery">Галерија</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
