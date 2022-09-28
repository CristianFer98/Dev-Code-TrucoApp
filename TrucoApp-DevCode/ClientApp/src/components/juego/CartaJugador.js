import React from "react";
import mazo from "../../assets/cartas/Mazo.png";

export const CartaJugador = () => {
  return (
    <div className="divCardPlayerTurn">
      <img
        className="animate__animated animate__fadeIn cardPlayer"
        src={mazo}
        alt="cartaJugador"
      />
    </div>
  );
};
