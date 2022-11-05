import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
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
      <CDBSidebar breakpoint={1500} toggled textColor="#fff">
        <CDBSidebarContent className="sidebar-content bg-dark">
          <CDBSidebarMenu>
            <span className="home">
              <NavLink
                
                exact
                to="/inicio/"
                style={{
                  color: "#EAC67A",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                <CDBSidebarMenuItem
                  icon="home"
                  style={{ marginBottom: "20px", marginLeft: "15px" }}
                ></CDBSidebarMenuItem>
              </NavLink>
            </span>
            <div className="homeLeyenda">Inicio</div>

            <span className="cuenta">
              <NavLink
                exact
                to="/inicio/avatar"
                style={{
                  color: "#EAC67A",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                <CDBSidebarMenuItem
                  icon="user"
                  style={{ marginBottom: "20px" }}
                ></CDBSidebarMenuItem>
              </NavLink>
            </span>
            <div className="cuentaLeyenda">Avatar</div>

            <span className="tienda">
              <NavLink
                exact
                to="/inicio/tienda"
                style={{
                  color: "#EAC67A",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                <CDBSidebarMenuItem
                  icon="shopping-bag"
                  style={{ marginBottom: "20px" }}
                ></CDBSidebarMenuItem>
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
                  fontSize: "20px",
                }}
              >
                <CDBSidebarMenuItem
                  icon="sticky-note"
                  style={{ marginBottom: "20px" }}
                ></CDBSidebarMenuItem>
              </NavLink>
            </span>
            <div className="reglasLeyenda">Reglas</div>

            <span className="chatIcon">
              <NavLink
                exact
                to="/inicio/chat"
                style={{
                  color: "#EAC67A",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                <CDBSidebarMenuItem
                  icon="message"
                  style={{ marginBottom: "20px" }}
                ></CDBSidebarMenuItem>
              </NavLink>
            </span>
            <div className="chatLeyenda">Chat</div>

            <span className="logout" onClick={ () => handleLogout()}>
              <CDBSidebarMenuItem
                
                icon="share"
                style={{ marginBottom: "20px", color: "#B43326" }}
              ></CDBSidebarMenuItem>
            </span>
            <div className="chatLeyenda">Salir</div>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default MenuLateral;
