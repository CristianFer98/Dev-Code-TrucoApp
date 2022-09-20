import React from "react";
import { useHistory } from "react-router";
import { BotonCrearMesa } from ".//BotonCrearMesa";
import { MesaDisponibleCard } from "./MesaDisponibleCard";
import "./mesasDisponibles.css";
import { ChatGeneral } from "../inicio/chat/ChatGeneral";
import InfoDeUsuario from "../inicio/infoUsuario/InfoDeUsuario";
import Button from "react-bootstrap/Button";

export const MesasDisponibles = () => {
  const history = useHistory();

  const handleVolverInicio = (e) => {
    e.preventDefault();
    history.push("/inicio/jugar");
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ display: "flex", width: "80%", flexDirection: "column" }}>
        <InfoDeUsuario />
        <div>
          <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px"}}>
          <Button
            variant="dark"
            onClick={handleVolverInicio}
            style={{ marginLeft: "50px" }}
          >
            Regresar al Inicio
          </Button>{" "}

          <div style={{ marginRight: "50px" }}>
              <Button variant="dark">1</Button>{" "}
              <Button variant="dark">2</Button>{" "}
              <Button variant="dark">3</Button>{" "}
            </div>
            </div>
          <div
            className="d-flex flex-wrap mt-4"
            style={{ marginLeft: "40px", marginRight: "40px", marginTop:"0px" }}
          >
            <BotonCrearMesa />
            <MesaDisponibleCard />
          </div>
        </div>
      </div>

      <div>
        <ChatGeneral />
      </div>
    </div>
  );
};
