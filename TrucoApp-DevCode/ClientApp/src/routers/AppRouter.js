import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Inicio } from "../components/inicio/Inicio";
import { Tienda } from "../components/tienda/Tienda";
import { TiendaDetalle } from "../components/tienda/TiendaDetalle";
import { TiendaAvatar } from "../components/tienda/TiendaAvatar";
import { Reglas } from "../components/reglas/Reglas";
import { Torneo } from "../components/torneo/Torneo";
import { Nosotros } from "../components/nosotros/Nosotros";
import { PublicRoute } from "./PublicRoute";
import { LoginRegistro } from "../components/auth/LoginRegistro";
import { useSelector } from "react-redux";
import { PrivateRoute } from "./PrivateRoute";
<<<<<<< HEAD
import { Truco1vs1 } from "../components/juego/Truco1vs1";
import JuegoIA from "../components/juegoIA/JuegoIA";
import { Avatar } from "../components/avatar/Avatar";
import { MesasDisponibles } from "../components/mesas/MesasDisponibles";
import TablaDeTorneo from "../components/torneo/TablaDeTorneo";
import { useAuth0 } from "@auth0/auth0-react";
// export const AppRouter = () => {
//   const { uid } = useSelector((state) => state.auth);
//   const {
//     isAuthenticated
//   } = useAuth0();
//   return (
//     <BrowserRouter>
//       <Switch>
//         <PublicRoute logueado={!!isAuthenticated} path="/auth" component={LoginRegistro} />
//         console.log(isAuthenticated)
//         <PrivateRoute logueado={!!isAuthenticated}>
//           <Layout>
//             <Route exact path="/" component={Inicio} />
//             <Route exact path="/cuenta" component={Cuenta} />
//             <Route exact path="/tienda" component={Tienda} />
//             <Route exact path="/reglas" component={Reglas} />
//             <Route exact path="/nosotros" component={Nosotros} />
//             <Redirect to="/" />
//           </Layout>

export const AppRouter = () => {
  const { uid, jugando } = useSelector((state) => state.auth);
=======

export const AppRouter = () => {
  const { uid } = useSelector((state) => state.auth);
>>>>>>> parent of 0b9f2a5 (add auth0)

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute logueado={!!uid} path="/auth" component={LoginRegistro} />

<<<<<<< HEAD
        <PrivateRoute logueado={!!uid} path="/">
          <Route path="/inicio">
            {!jugando ? (
              <Layout>
                <Route exact path="/inicio" component={Inicio} />
                <Route exact path="/inicio/avatar" component={Avatar} />
                <Route exact path="/inicio/tienda" component={Tienda} />
                <Route
                  exact
                  path="/inicio/tienda/:id"
                  component={TiendaDetalle}
                />
                <Route
                  exact
                  path="/inicio/tienda-avatar"
                  component={TiendaAvatar}
                />
                <Route exact path="/inicio/reglas" component={Reglas} />
                <Route exact path="/inicio/nosotros" component={Nosotros} />
                <Route exact path="/inicio/torneos" component={Torneo} />
                <Route exact path="/inicio/tabla" component={TablaDeTorneo} />
                <Route exact path="/inicio/juegoia" component={JuegoIA} />
                <Route
                  exact
                  path="/inicio/mesas"
                  component={MesasDisponibles}
                />
                <Redirect to="/inicio" />
              </Layout>
            ) : (
              <Redirect to="/juego" />
            )}
          </Route>

          <Route path="/juego">
            <Truco1vs1 />
          </Route>
          <Redirect to="/inicio" />
=======
        <PrivateRoute logueado={!!uid}>
          <Layout>
            <Route exact path="/" component={Inicio} />
            <Route exact path="/cuenta" component={Cuenta} />
            <Route exact path="/tienda" component={Tienda} />
            <Route exact path="/reglas" component={Reglas} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Redirect to="/" />
          </Layout>
>>>>>>> parent of 0b9f2a5 (add auth0)
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};
