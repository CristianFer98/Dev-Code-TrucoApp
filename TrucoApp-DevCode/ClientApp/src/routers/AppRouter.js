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

export const AppRouter = () => {
  const { uid } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute logueado={!!uid} path="/auth" component={LoginRegistro} />

        <PrivateRoute logueado={!!uid}>
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
