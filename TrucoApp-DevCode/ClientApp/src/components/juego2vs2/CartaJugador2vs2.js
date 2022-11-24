import React from "react";
import { useSelector } from "react-redux";
import { ocultarBotonesYAcciones2vs2 } from "../../helpers/truco/ocultarBotonesYAcciones2vs2";
import { tiposBotones } from "../../types/tiposBotones";
// const imagenCarta = require.context("../../assets/cartas", true);

export const CartaJugador2vs2 = ({ carta }) => {
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);

  return (
    <div
      className={
        ocultarBotonesYAcciones2vs2(uid, partida, tiposBotones.cartas)
          ? "divCardPlayerTurn"
          : "divCardPlayer"
      }
    >
      <img
        className="animate__animated animate__fadeInTopLeft cardPlayer"
        src={carta.imagen}
        alt="cartaJugador"
      />
    </div>
  );
};
