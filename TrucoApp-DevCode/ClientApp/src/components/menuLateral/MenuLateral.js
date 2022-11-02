import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import './menuLateral.css';

const MenuLateral = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div id="sidebar">
      <CDBSidebar breakpoint={1500} toggled textColor="#fff">
        <CDBSidebarContent className="sidebar-content bg-dark">
          <CDBSidebarMenu>
            <span className="home">
              <NavLink
                exact
                to="/inicio/"
                style={{
                  color: '#EAC67A',
                  fontWeight: 'bold',
                  fontSize: '25px',
                }}
              >
                <CDBSidebarMenuItem
                  icon="home"
                  style={{ marginBottom: '20px', marginLeft: '10px' }}
                ></CDBSidebarMenuItem>
              </NavLink>
            </span>
            <div className="homeLeyenda">Inicio</div>

            <span className="cuenta">
              <NavLink
                exact
                to="/inicio/avatar"
                style={{
                  color: '#EAC67A',
                  fontWeight: 'bold',
                  fontSize: '25px',
                }}
              >
                <CDBSidebarMenuItem
                  icon="user"
                  style={{ marginBottom: '20px' }}
                ></CDBSidebarMenuItem>
              </NavLink>
            </span>
            <div className="cuentaLeyenda">Avatar</div>

            <span className="tienda">
              <NavLink
                exact
                to="/inicio/tienda"
                style={{
                  color: '#EAC67A',
                  fontWeight: 'bold',
                  fontSize: '25px',
                }}
              >
                <CDBSidebarMenuItem
                  icon="shopping-bag"
                  style={{ marginBottom: '20px' }}
                ></CDBSidebarMenuItem>
              </NavLink>
            </span>
            <div className="tiendaLeyenda">Tienda</div>

            <span className="reglas">
              <NavLink
                exact
                to="/inicio/reglas"
                style={{
                  color: '#EAC67A',
                  fontWeight: 'bold',
                  fontSize: '25px',
                }}
              >
                <CDBSidebarMenuItem
                  icon="sticky-note"
                  style={{ marginBottom: '20px' }}
                ></CDBSidebarMenuItem>
              </NavLink>
            </span>
            <div className="reglasLeyenda">Reglas</div>

           

            <span className="chatIcon">
              <NavLink
                exact
                to="/inicio/chat"
                style={{
                  color: '#EAC67A',
                  fontWeight: 'bold',
                  fontSize: '25px',
                }}
              >
                <CDBSidebarMenuItem
                  icon="message"
                  style={{ marginBottom: '20px' }}
                ></CDBSidebarMenuItem>
              </NavLink>
            </span>
            <div className="chatLeyenda">Chat</div>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter className="bg-dark">
          <span className="logout">
            <CDBSidebarMenuItem
              icon="share"
              style={{ color: '#B43326' }}
              onClick={handleLogout}
            ></CDBSidebarMenuItem>
          </span>
          <div className="logoutLeyenda">Salir</div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default MenuLateral;
