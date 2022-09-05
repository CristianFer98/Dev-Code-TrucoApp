import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Home } from "../components/home/Home";
import { Account } from "../components/account/Account";
import { Store } from "../components/store/Store";
import { Rules } from "../components/rules/Rules";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" element={Home} />
        <Route exact path="/account" element={Account} />
        <Route exact path="/store" element={Store} />
        <Route exact path="/rules" element={Rules} />
      </Layout>
    </BrowserRouter>
  );
};
