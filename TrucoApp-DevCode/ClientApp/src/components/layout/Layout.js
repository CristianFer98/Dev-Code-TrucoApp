import React from "react";
import MenuNav from "../menuNav/MenuNav";
import MenuLateral from "../menuLateral/MenuLateral";
import "./layout.css";
import { Redirect } from "react-router";

export const Layout = ({ children, logueado }) => {
  return logueado ? (
    <div>
      <MenuNav />
      <div style={{ display: "flex" }}>
        <MenuLateral />
        <div className="main">{children}</div>
      </div>
    </div>
  ) : (
    <Redirect to="/auth" />
  );
};
