import React from "react";
import { ChatGeneral } from "./ChatGeneral";
import InfoDeUsuario from "./InfoDeUsuario";
import MenuPrincipal from "./MenuPrincipal";
import './inicio.css'
export const Inicio = () => {


  return (

    <div className="contenedorPrimario">
      <div  className="contenedorSecundario">
        <InfoDeUsuario />
        
        
        <MenuPrincipal/>

      </div>

      <span className="chat">
        <ChatGeneral/>
      </span>
     
    </div>
  );
};
