import React from "react";
import { NavLink } from "react-router-dom";
import { Mesa } from "./Mesa";
import "./truco.css";

export const Truco1vs1 = () => {
  return (
    <div className="divContainer d-flex justify-content-center align-items-center bg-dark position-relative">
      <Mesa />
      <NavLink to="/inicio">
        <i className="bi bi-box-arrow-right buttonLeaveTable btn btn-outline-danger m-3 fw-bold"></i>
      </NavLink>
    </div>
  );
};
