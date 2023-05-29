import React, { ReactNode } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";


interface MasterLayoutProps {
  children: ReactNode;
}

function MasterLayout({ children }: MasterLayoutProps) {
  return (
    <>
      <Navbar bg="info" expand="lg" >
        <Container>
          <Navbar.Brand href="/">At Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
            <Nav>
              <Nav.Link className="nav-hover" href="/">Home</Nav.Link>
              <Nav.Link className="nav-hover" href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>{children}</main>
    </>
  );
}

export default MasterLayout;

