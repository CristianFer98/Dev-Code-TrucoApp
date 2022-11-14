import React from "react";
import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/scss/styles.scss";
import { SocketProvider } from "./context/SocketContext";

export const App = () => {
  return (
    <Provider store={store}>
      <SocketProvider>
        <AppRouter />
      </SocketProvider>
    </Provider>
  );
};
