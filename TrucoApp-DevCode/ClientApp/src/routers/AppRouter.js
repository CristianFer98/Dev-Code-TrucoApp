import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Inicio } from "../components/inicio/Inicio";
import { Cuenta } from "../components/cuenta/Cuenta";
import { Tienda } from "../components/tienda/Tienda";
import { Reglas } from "../components/reglas/Reglas";
import { Nosotros } from "../components/nosotros/Nosotros";
import { PublicRoute } from "./PublicRoute";
import { LoginRegistro } from "../components/auth/LoginRegistro";
import { useSelector } from "react-redux";
import { PrivateRoute } from "./PrivateRoute";
import { useAuth0 } from "@auth0/auth0-react";
export const AppRouter = () => {
  const { uid } = useSelector((state) => state.auth);
  const {
    isAuthenticated
  } = useAuth0();
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute logueado={!!isAuthenticated} path="/auth" component={LoginRegistro} />
        console.log(isAuthenticated)
        <PrivateRoute logueado={!!isAuthenticated}>
          <Layout>
            <Route exact path="/" component={Inicio} />
            <Route exact path="/cuenta" component={Cuenta} />
            <Route exact path="/tienda" component={Tienda} />
            <Route exact path="/reglas" component={Reglas} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Redirect to="/" />
          </Layout>
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};
