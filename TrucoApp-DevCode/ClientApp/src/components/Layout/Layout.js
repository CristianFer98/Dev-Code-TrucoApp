import React, { Component } from "react";
import NavMenu from "../navMenu/NavMenu";
import Sidebar from "../sidebar/Sidebar";
import "./Layout.css";

export const Layout = ({ children }) => {
  return (
    <div>
      <NavMenu />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="main">{children}</div>
      </div>
    </div>
  );
};
