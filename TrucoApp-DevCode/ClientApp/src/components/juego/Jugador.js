import React from "react";
import { useSelector } from "react-redux";
import noFoto from "../../assets/no-foto.jpg";
import { isMyTurn } from "../../helpers/truco/getUserTurno";
import { Botones } from "./botones/Botones";
import { CartaJugador } from "./CartaJugador";
import { Countdown } from "./Countdown";

export const Jugador = () => {
  const { partida } = useSelector((state) => state.juego);
  const { jugadorUno, jugadorDos, turno } = partida;
  const { uid, nombre } = useSelector((state) => state.auth);

  return (
    <div className="divPlayer2 d-flex flex-column">
      <div className="w-100 player2 d-flex justify-content-center">
        <div className="player2Avatar d-flex flex-column align-items-center">
          <Countdown image={noFoto} />
          {/* <div className="divPlayer2ImgNotTurn rounded-circle">
            <img
              referrerPolicy="no-referrer"
              className="player2ImgNotTurn rounded-circle"
              src={noFoto}
              alt="userFoto"
            />
          </div> */}
          <div className="playerName fw-bolder text-white px-2 py-1">
            {nombre}
          </div>
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

      {isMyTurn(uid, jugadorUno, jugadorDos, turno) && <Botones />}
    </div>
  );
};
