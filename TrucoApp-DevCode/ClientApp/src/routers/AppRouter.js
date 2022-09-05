import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Home } from "../components/home/Home";
import { Account } from "../components/account/Account";
import { Store } from "../components/store/Store";
import { Rules } from "../components/rules/Rules";
import { LoginRegister } from "../components/auth/LoginRegister";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <LoginRegister>
          <Route exact path="/login" element={Login} />
          <Route exact path="/register" element={Register} />
        </LoginRegister> */}
        <Layout>
          <Route exact path="/" element={Home} />
          <Route exact path="/account" element={Account} />
          <Route exact path="/store" element={Store} />
          <Route exact path="/rules" element={Rules} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};
