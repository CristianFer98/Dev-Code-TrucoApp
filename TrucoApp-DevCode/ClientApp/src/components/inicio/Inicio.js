import React from "react";
import { ChatGeneral } from "./chat/ChatGeneral";
import InfoDeUsuario from "./infoUsuario/InfoDeUsuario";
import MenuPrincipal from "./menuPrincipal/MenuPrincipal";
import "./inicio.css";
export const Inicio = () => {
  return (
    <div className="contenedorPrimario">
      <div className="contenedorSecundario">
        <InfoDeUsuario />

        <MenuPrincipal />
      </div>

      <span className="chat">
        <ChatGeneral />
      </span>
    </div>
  );
};
