import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { BotonCrearMesa } from ".//BotonCrearMesa";
import { MesaDisponibleCard } from "./MesaDisponibleCard";
import "./mesasDisponibles.css";
import { ChatGeneral } from "../inicio/chat/ChatGeneral";
import InfoDeUsuario from "../inicio/infoUsuario/InfoDeUsuario";
import Button from "react-bootstrap/Button";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

export const MesasDisponibles = () => {
  const history = useHistory();
  const [mesas, setMesas] = useState([]);
  // const [connection, setConnection] = useState();

  const handleVolverInicio = (e) => {
    e.preventDefault();
    history.push("/inicio");
  };

  // const iniciarConexion = async () => {
  //   try {
  //     const connection = new HubConnectionBuilder()
  //       .withUrl("https://localhost:44342/mesashub")
  //       .configureLogging(LogLevel.Information)
  //       .build();

  //     connection.on("ReceiveConnection", (message) => {
  //       console.log(message);
  //     });

  //     await connection.start();
  //     await connection.invoke("ConnectionSuccess");
  //     setConnection(connection);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const obtenerMesasDisponibles = async () => {
    const resp = await fetch(
      "https://localhost:44342/api/Mesas/obtenertodaslasmesas",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (resp.ok) {
      const data = await resp.json();
      setMesas(data);
    } else {
      console.log("Status code: " + resp.status);
    }
  };

  useEffect(() => {
    obtenerMesasDisponibles();
    // iniciarConexion();
  }, []);

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ display: "flex", width: "80%", flexDirection: "column" }}>
        <InfoDeUsuario />
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
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
            style={{
              marginLeft: "40px",
              marginRight: "40px",
              marginTop: "0px",
            }}
          >
            <BotonCrearMesa obtenerMesasDisponibles={obtenerMesasDisponibles} />

            {mesas.map((mesa) => (
              <MesaDisponibleCard key={mesa.idMesa} mesa={mesa} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <ChatGeneral />
      </div>
    </div>
  );
};
