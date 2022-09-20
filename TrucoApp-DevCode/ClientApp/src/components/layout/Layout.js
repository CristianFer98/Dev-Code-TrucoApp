import React from "react";
import MenuNav from "../menuNav/MenuNav";
import MenuLateral from "../menuLateral/MenuLateral";
import "./layout.css";
import { ChatGeneral } from "../inicio/ChatGeneral";

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
