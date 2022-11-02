import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import React from 'react';
import imagotipo from './../../assets/logotipo-a.png';
import isotipo from './../../assets/isotipo-d.png';

import './menuNav.css';

function CollapsibleExample() {
  return (
    <Navbar
      id="navbar"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ backgroundColor: '#1A2930' }}
    >
      <Container style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
        <NavLink
          exact
          to="/"
          activeClassName="activeClicked"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <img
            src={isotipo}
            alt="Isotipo de Vale cuatro"
            width="50"
            className="mx-1"
            id="isotipo"
          />
          <img
            src={imagotipo}
            alt="Isotipo de Vale cuatro"
            width="200"
            className="mt-2"
          />
        </NavLink>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>

          <Nav>
            <Nav.Link href="#deets">Bienvenido Cristian Fernandez</Nav.Link>
            <img
              src={'https://robohash.org/user2.png'}
              alt="user"
              width="38px"
              height="38px"
              style={{ borderRadius: '25px' }}
            ></img>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
