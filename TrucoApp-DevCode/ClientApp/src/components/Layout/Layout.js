import React, { Component } from "react";
import NavMenu from "../navMenu/NavMenu";
import Sidebar from "../sidebar/Sidebar";
import "./Layout.css";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div className="main">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
