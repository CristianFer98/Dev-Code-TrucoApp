import React from "react";
import { Redirect } from "react-router";

export const PublicRoute = ({ component: Component, logueado }) => {
  return !logueado ? (
    <div>
      <Component />
    </div>
  ) : (
    <Redirect to="/" />
  );
};
