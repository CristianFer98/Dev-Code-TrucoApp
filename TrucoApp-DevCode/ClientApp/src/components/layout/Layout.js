import React from "react";
import MenuNav from "../menuNav/MenuNav";
import MenuLateral from "../menuLateral/MenuLateral";
import "./layout.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useEffect } from "react";

export const Layout = ({ children }) => {
  const { invitado } = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (invitado) {
      history.push("/inicio/mesas");
    }
  }, [invitado, history]);

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
