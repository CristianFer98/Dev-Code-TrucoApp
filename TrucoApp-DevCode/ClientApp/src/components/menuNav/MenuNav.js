import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import React from 'react';
import imagotipo from './../../assets/vale-cuatro-fondo-transparente.png';
import noFoto from './../../assets/no-foto.jpg';

function CollapsibleExample() {
  return (
    <Navbar
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
            src={imagotipo}
            alt="Isotipo de Vale cuatro"
            width="100"
            height="50"
            className="m-1"
          />
        </NavLink>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>

          <Nav>
            <Nav.Link href="#deets">Bienvenido Cristian Fernandez</Nav.Link>
            <img
              src={localStorage.getItem('avatarPerfil')!=null?localStorage.getItem('avatarPerfil'):noFoto}
              alt="user"
              width="38px"
              height="38px"
              style={{ borderRadius: '25px', objectFit:'cover' }}
            ></img>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
