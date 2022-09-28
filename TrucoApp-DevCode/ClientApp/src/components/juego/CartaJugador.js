import React from "react";
import { useSelector } from "react-redux";
const imagenCarta = require.context("../../assets/cartas", true);

export const CartaJugador = ({ carta }) => {
  const { partida } = useSelector((state) => state.juego);
  const { uid } = useSelector((state) => state.auth);
  const { turno, jugadorUno, jugadorDos } = partida;

  return (
    <div
      className={
        uid === jugadorUno
          ? turno === 1
            ? "divCardPlayerTurn"
            : "divCardPlayer"
          : uid === jugadorDos && turno === 2
          ? "divCardPlayerTurn"
          : "divCardPlayer"
      }
    >
      <img
        className="animate__animated animate__fadeIn cardPlayer"
        src={imagenCarta(carta.imagen)}
        alt="cartaJugador"
      />
    </div>
  );
};
