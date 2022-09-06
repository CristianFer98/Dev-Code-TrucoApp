import React from "react";
import { Login } from "./Login";
import { Switch, Route, Redirect } from "react-router-dom";
import { Registro } from "./Registro";
import "./auth.css";

export const LoginRegistro = () => {
  return (
    <div className="divContainer container-fluid d-flex flex-row col-12 p-0">
      <div className="divPicture animate__animated animate__fadeIn d-none d-md-block col-6"></div>

      <Switch>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/registro" component={Registro} />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
};
