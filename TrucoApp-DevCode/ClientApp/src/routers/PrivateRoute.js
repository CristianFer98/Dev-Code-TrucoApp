import React from "react";
import { Redirect } from "react-router";

export const PrivateRoute = ({ logueado, children }) => {
  return logueado ? <>{children}</> : <Redirect to="/auth" />;
};
