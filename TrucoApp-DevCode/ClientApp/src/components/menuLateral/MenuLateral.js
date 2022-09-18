import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  cdbs,
} from "cdbreact";

import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";

const MenuLateral = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div
      style={{
        display: "flex",
        height: "90.5vh",
        margin: "0",
      }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#1A2930">
        <CDBSidebarHeader style={{height:"60px"}}prefix={<i className="fa fa-bars fa-large"></i>}>
          Menu
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              exact
              to="/inicio"
              style={{ color: "#EAC67A", fontWeight: "bold" }}
             
            >
              <CDBSidebarMenuItem icon="home"> Home</CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/inicio/cuenta"
              style={{ color: "#EAC67A", fontWeight: "bold" }}
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="user"> Cuenta</CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/inicio/tienda"
              style={{ color: "#EAC67A", fontWeight: "bold" }}
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="shopping-bag">
                Tienda
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/inicio/reglas"
              style={{ color: "#EAC67A", fontWeight: "bold" }}
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="sticky-note">Reglas</CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/inicio/nosotros"
              style={{ color: "#EAC67A", fontWeight: "bold" }}
              
            >
            <CDBSidebarMenuItem icon="info"> Nosotros</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/inicio/avatar"
              style={{ color: "#EAC67A", fontWeight: "bold" }}
              
            >
              <CDBSidebarMenuItem icon="info"> Avatar</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>


        <CDBSidebarFooter>

        <CDBSidebarMenuItem icon="share" style={{color:"#B43326"}} onClick={handleLogout}>Cerrar Sesion</CDBSidebarMenuItem>

        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default MenuLateral;
