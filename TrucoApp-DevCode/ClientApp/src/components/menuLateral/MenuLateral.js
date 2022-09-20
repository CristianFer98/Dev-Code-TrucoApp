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
import "./menuLateral.css";

const MenuLateral = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div
      style={{
        display: "flex",
        height: "auto",
      }}
    >
      <CDBSidebar
        breakpoint={1500}
        toggled
        textColor="#fff"
        backgroundColor="#212529"
      >
        <CDBSidebarContent className="sidebar-content">

          <CDBSidebarMenu>
            <span className="home">
              <NavLink
                exact
                to="/inicio/"
                style={{
                  color: "#EAC67A",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                <CDBSidebarMenuItem icon="home"
                  style={{ marginBottom: "20px", marginLeft: "10px" }}> 
                </CDBSidebarMenuItem>
              </NavLink>
            </span>
            <div className="homeLeyenda">Inicio</div>

            <span className="cuenta">
              <NavLink
                exact
                to="/inicio/cuenta"
                style={{
                  color: "#EAC67A",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}>
                <CDBSidebarMenuItem
                  icon="user"
                  style={{ marginBottom: "20px" }}>
                </CDBSidebarMenuItem>
              </NavLink>
            </span>
            <div className="cuentaLeyenda">Cuenta</div>

            <span className="tienda">
              <NavLink
                exact
                to="/inicio/tienda"
                style={{
                  color: "#EAC67A",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                <CDBSidebarMenuItem
                  icon="shopping-bag"
                  style={{ marginBottom: "20px" }}>
                </CDBSidebarMenuItem>
              </NavLink>
            </span>
            <div className="tiendaLeyenda">Tienda</div>

            <span className="reglas">
              <NavLink
                exact
                to="/inicio/reglas"
                style={{
                  color: "#EAC67A",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                <CDBSidebarMenuItem
                  icon="sticky-note"
                  style={{ marginBottom: "20px" }}>
                </CDBSidebarMenuItem>
              </NavLink>
            </span>
            <div className="reglasLeyenda">Reglas</div>

            <span className="nosotros">
              <NavLink
                exact
                to="/inicio/nosotros"
                style={{
                  color: "#EAC67A",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                <CDBSidebarMenuItem
                  icon="info"
                  style={{ marginBottom: "20px" }}>
                </CDBSidebarMenuItem>
              </NavLink>
            </span>
            <div className="nosotrosLeyenda">Info</div>

            <span className="chatIcon">
              <NavLink
                exact
                to="/inicio/chat"
                style={{
                  color: "#EAC67A",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                <CDBSidebarMenuItem
                  icon="message"
                  style={{ marginBottom: "20px" }}
                >
                </CDBSidebarMenuItem>
              </NavLink>
            </span>
            <div className="chatLeyenda">Chat</div>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter>

        <span className="logout">

          <CDBSidebarMenuItem
            icon="share"
            style={{ color: "#B43326" }}
            onClick={handleLogout}
          >
            Cerrar Sesion
          </CDBSidebarMenuItem>
          </span>
            <div className="logoutLeyenda">Salir</div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default MenuLateral;
