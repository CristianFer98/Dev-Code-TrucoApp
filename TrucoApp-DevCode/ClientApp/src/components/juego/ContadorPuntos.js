import React from "react";
import { useSelector } from "react-redux";
import { getUserPlayer } from "../../helpers/truco/getUserTurno";

export const ContadorPuntos = () => {
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { jugadorUno, jugadorDos, puntosJugadorUno, puntosJugadorDos } =
    partida;

  return (
    <div className="counterDiv animateanimate__animated animate__fadeInDownBig d-flex flex-column text-white bg-dark border border-end-0 border-3 p-3">
      <div className="d-flex flex-column">
        <p className="fw-bold p-0 m-0 align-self-center">Vos</p>
        <p className="p-0 m-0 align-self-center">
          {getUserPlayer(uid, jugadorUno, jugadorDos) === 1
            ? puntosJugadorDos
            : puntosJugadorUno}
        </p>
      </div>
      <hr style={{ color: "white", height: 2 }} className="w-100" />

      <div className="d-flex flex-column">
        <p className="fw-bold p-0 m-0 align-self-center">Yo</p>
        <p className="p-0 m-0 align-self-center">
          {getUserPlayer(uid, jugadorUno, jugadorDos) === 1
            ? puntosJugadorUno
            : puntosJugadorDos}
        </p>
      </div>
    </div>
  );
};
