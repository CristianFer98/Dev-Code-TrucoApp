import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import React from "react";
import { GiCardPlay } from "react-icons/gi";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{backgroundColor:"#1A2930"}}
      
    >
      <Container style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
        <NavLink
          exact  
          to="/"
          activeClassName="activeClicked"
          style={{ textDecoration: "none", color: "white" }}
        >
          <GiCardPlay size={25} />{" "}
          <span style={{ fontSize: "20px" }}>vale cuatro</span>
        </NavLink>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>

          <Nav>
            <Nav.Link href="#deets">Bienvenido Cristian Fernandez</Nav.Link>
            <img
              src={"https://robohash.org/user2.png"}
              alt="user"
              width="38px"
              height="38px"
              style={{ borderRadius: "25px" }}
            ></img>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
