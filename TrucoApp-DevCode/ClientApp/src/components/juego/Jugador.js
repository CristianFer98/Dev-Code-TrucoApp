import React from "react";
import { useSelector } from "react-redux";
import noFoto from "../../assets/no-foto.jpg";
import { CartaJugador } from "./CartaJugador";

export const Jugador = () => {
  const { partida } = useSelector((state) => state.juego);
  const { jugadorUno } = partida;
  const { uid } = useSelector((state) => state.auth);

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
          {uid === jugadorUno
            ? partida.cartasJugadorUno.map((carta) => (
                <CartaJugador key={carta.id} carta={carta} />
              ))
            : partida.cartasJugadorDos.map((carta) => (
                <CartaJugador key={carta.id} carta={carta} />
              ))}
        </div>
      </div>
    </div>
  );
};
