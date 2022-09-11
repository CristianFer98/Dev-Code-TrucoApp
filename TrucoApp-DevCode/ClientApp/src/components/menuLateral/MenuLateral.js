import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
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
        overflow: "scroll initial",
        margin: "0",
      }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#1A2930">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          Menu
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
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
              to="/inicio"
              style={{ color: "#EAC67A", fontWeight: "bold" }}
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="chart-line">Nivel</CDBSidebarMenuItem>
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
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="info"> Nosotros</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter>
          <button
            onClick={handleLogout}
            style={{
              color: "#B43326",
              fontWeight: "bolder",
              textDecoration: "none",
            }}
          >
            <CDBSidebarMenuItem icon="share">Cerrar Sesion</CDBSidebarMenuItem>
          </button>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default MenuLateral;
