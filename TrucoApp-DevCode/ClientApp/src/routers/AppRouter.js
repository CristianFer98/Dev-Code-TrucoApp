import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Home } from "../components/Home/Home";
import { Account } from "../components/Account/Account";
import { Store } from "../components/Store/Store";
import { Rules } from "../components/Rules/Rules";

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
