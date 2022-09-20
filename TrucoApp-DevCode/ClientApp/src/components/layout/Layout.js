import React from "react";
import MenuNav from "../menuNav/MenuNav";
import MenuLateral from "../menuLateral/MenuLateral";
import "./layout.css";

export const Layout = ({ children }) => {
  return (
    <div>
      <MenuNav />
      <div style={{ display: "flex" }}>
        <MenuLateral />
        <div className="main">{children}</div>
      </div>
    </div>
  );
};
