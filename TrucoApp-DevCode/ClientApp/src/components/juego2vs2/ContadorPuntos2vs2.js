import React from "react";
import { useSelector } from "react-redux";
import {
  getUserPlayer,
  getUserPlayer2vs2,
} from "../../helpers/truco/getUserTurno";

export const ContadorPuntos2vs2 = () => {
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const {
    jugadorUno,
    jugadorDos,
    jugadorTres,
    jugadorCuatro,
    puntosJugadorUno,
    puntosJugadorDos,
  } = partida;
  const numeroJugador = getUserPlayer2vs2(
    uid,
    jugadorUno,
    jugadorDos,
    jugadorTres,
    jugadorCuatro
  );

  return (
    <div className="counterDiv animateanimate__animated animate__fadeInDownBig d-flex flex-column text-white bg-dark border border-end-0 border-3 p-3">
      <div className="d-flex flex-column">
        <p className="fw-bold p-0 m-0 align-self-center">Nos</p>
        <p className="p-0 m-0 align-self-center">
          {numeroJugador === 1 || numeroJugador === 2
            ? puntosJugadorDos
            : puntosJugadorUno}
        </p>
      </div>
      <hr style={{ color: "white", height: 2 }} className="w-100" />

      <div className="d-flex flex-column">
        <p className="fw-bold p-0 m-0 align-self-center">Ellos</p>
        <p className="p-0 m-0 align-self-center">
          {numeroJugador === 1 || numeroJugador === 2
            ? puntosJugadorUno
            : puntosJugadorDos}
        </p>
      </div>
    </div>
  );
};
