import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { SocketContext } from "../../context/SocketContext";
import { Flop } from "./Flop";
import { Jugador } from "./Jugador";
import { Rival } from "./Rival";

export const Mesa = () => {
  const { uid } = useSelector((state) => state.auth);
  const { partida, usuariosConectados } = useSelector((state) => state.juego);
  const {
    ganadorMano,
    repartidor,
    puntosJugadorUno,
    puntosJugadorDos,
    jugadorUno,
    jugadorDos,
  } = partida;
  const { chantBox } = useSelector((state) => state.ui);
  const { connection } = useContext(SocketContext);

  useEffect(() => {
    if (usuariosConectados.length === 2) {
      if (puntosJugadorUno < 30 && puntosJugadorDos < 30) {
        !!ganadorMano &&
          repartidor === uid &&
          setTimeout(async () => {
            await connection.invoke("InicializarMano", partida);
          }, 2000);
      } else {
        puntosJugadorUno >= 30
          ? Swal.fire("Ganador jugador uno", "", "success")
          : puntosJugadorDos >= 30 &&
            Swal.fire("Ganador jugador dos", "", "success");
      }
    } else {
      usuariosConectados[0] === partida.jugadorUno
        ? Swal.fire("Ganador jugador uno, rival abandonó.", "", "success")
        : usuariosConectados[0] === partida.jugadorDos &&
          Swal.fire("Ganador jugador dos, rival abandonó.", "", "success");
    }
  }, [
    puntosJugadorUno,
    puntosJugadorDos,
    ganadorMano,
    connection,
    partida,
    repartidor,
    uid,
    usuariosConectados,
  ]);

  return (
    <div className="board">
      <div
        className="h-100 d-flex align-items-center flex-column 
      justify-content-between"
      >
        <Rival />

        {!!chantBox && (
          <div className="divChant bg-light d-flex justify-content-center align-items-center">
            <h5 className="fw-bold text-dark mt-2">{chantBox}</h5>
          </div>
        )}

        <Flop />
        <Jugador />
      </div>
    </div>
  );
};
