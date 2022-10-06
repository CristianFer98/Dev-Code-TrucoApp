import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { getConfig } from "./config";

const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  redirectUri: window.location.origin,
};

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Auth0Provider {...providerConfig}>
    <App/>
  </Auth0Provider>
);
