import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { BotonCrearMesa } from ".//BotonCrearMesa";
import { MesaDisponibleCard } from "./MesaDisponibleCard";
import "./mesasDisponibles.css";
import { ChatGeneral } from "../inicio/chat/ChatGeneral";
import InfoDeUsuario from "../inicio/infoUsuario/InfoDeUsuario";
import Button from "react-bootstrap/Button";
import { SocketContext } from "../../context/SocketContext";
import { useDispatch, useSelector } from "react-redux";
import { jugar } from "../../actions/auth";
import { repartirCartas } from "../../actions/juego";

export const MesasDisponibles = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { uid } = useSelector((state) => state.auth);
  const [mesas, setMesas] = useState([]);
  const { connection } = useContext(SocketContext);

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

  const joinRoom = async (jugadores) => {
    await connection.invoke("JoinRoom", jugadores);
  };

  useEffect(() => {
    obtenerMesasDisponibles();
  }, []);

  useEffect(() => {
    connection.on("MesaCreada", () => {
      obtenerMesasDisponibles();
    });

    connection.on("MesaOcupada", (jugadores) => {
      const { jugadorUno, jugadorDos } = jugadores;

      if (jugadorUno === uid || jugadorDos === uid) {
        joinRoom(jugadores);
      }

      obtenerMesasDisponibles();
      connection.off("MesaOcupada");
    });

    connection.on("EmpezarJuego", (juego) => {
      const { cartasRepartidas, jugadorUno, jugadorDos, room } = juego;
      const cartasJugadorUno = [
        cartasRepartidas[0],
        cartasRepartidas[2],
        cartasRepartidas[4],
      ];
      const cartasJugadorDos = [
        cartasRepartidas[1],
        cartasRepartidas[3],
        cartasRepartidas[5],
      ];

      // console.log(juego);
      dispatch(jugar(room));
      if (jugadorUno === uid) {
        console.log(cartasJugadorUno);
        dispatch(repartirCartas(cartasJugadorUno));
      } else if (jugadorDos === uid) {
        console.log(cartasJugadorDos);
        dispatch(repartirCartas(cartasJugadorDos));
      }
      history.push("/juego");
      connection.off("EmpezarJuego");
      // obtenerMesasDisponibles();
    });
  }, [connection]);

  const handleVolverInicio = async (e) => {
    e.preventDefault();
    history.push("/inicio");
  };

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
