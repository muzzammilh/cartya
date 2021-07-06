import React from 'react';

import { Navbar, Nav, Container, Row } from 'react-bootstrap';

function Header() {
    return (
        <header>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Link</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </header>
    )
}

export default Header