import React from "react";
import { Redirect } from "react-router";

export const PublicRoute = ({ component: Component, logueado, jugando }) => {
  return !logueado ? (
    <div>
      <Component />
    </div>
  ) : (
    <Redirect to="/inicio" />
  );
};
