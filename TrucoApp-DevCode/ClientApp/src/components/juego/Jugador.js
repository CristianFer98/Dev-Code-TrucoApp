import React from "react";
import noFoto from "../../assets/no-foto.jpg";
import { CartaJugador } from "./CartaJugador";

export const Jugador = () => {
  return (
    <div className="divPlayer2 d-flex flex-column">
      <div className="w-100 player2 d-flex justify-content-center">
        <div className="player2Avatar d-flex flex-column align-items-center">
          <div className="divPlayer2ImgNotTurn rounded-circle">
            <img
              referrerPolicy="no-referrer"
              className="player2ImgNotTurn rounded-circle"
              src={noFoto}
              alt="userFoto"
            />
          </div>
          <div className="playerName fw-bolder text-white px-2 py-1">Ivan</div>
        </div>

        <div className="d-flex divCardsPlayer">
          <CartaJugador />
          <CartaJugador />
          <CartaJugador />
        </div>
      </div>
    </div>
  );
};
