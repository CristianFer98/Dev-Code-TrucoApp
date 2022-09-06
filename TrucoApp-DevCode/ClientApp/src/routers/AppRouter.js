import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Inicio } from "../components/inicio/Inicio";
import { Cuenta } from "../components/cuenta/Cuenta";
import { Tienda } from "../components/tienda/Tienda";
import { Reglas } from "../components/reglas/Reglas";
import { Nosotros } from "../components/nosotros/Nosotros";
import { PublicRoute } from "./PublicRoute";
import { LoginRegistro } from "../components/auth/LoginRegistro";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/auth" component={LoginRegistro} />
        {/* <Layout exact path="/" component={Inicio} /> */}
        <Layout>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/cuenta" component={Cuenta} />
          <Route exact path="/tienda" component={Tienda} />
          <Route exact path="/reglas" component={Reglas} />
          <Route exact path="/nosotros" component={Nosotros} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};
