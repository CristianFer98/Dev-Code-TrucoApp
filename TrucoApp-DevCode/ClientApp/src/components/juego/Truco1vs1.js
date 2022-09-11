import React from "react";
import { NavLink } from "react-router-dom";

export const Truco1vs1 = () => {
  return (
    <div className="p-5">
      <div>Truco 1 vs 1</div>
      <NavLink className="btn btn-primary" to="/inicio">
        Volver al inicio
      </NavLink>
    </div>
  );
};
