import React from "react";
import { useSelector } from "react-redux";
import noFoto from "../../assets/no-foto.jpg";
import { getUserPlayer, isMyTurn } from "../../helpers/truco/getUserTurno";
import { Botones2vs2 } from "./botones2vs2/Botones2vs2";
import { CartaJugador2vs2 } from "./CartaJugador2vs2";
import { CountdownJugador2vs2 } from "./CountdownJugador2vs2";

export const Jugador2vs2 = () => {
  const { partida } = useSelector((state) => state.juego);
  const { jugadorUno, jugadorDos, jugadorTres, jugadorCuatro, turno } = partida;
  const { uid, nombre } = useSelector((state) => state.auth);
  const numeroJugador = getUserPlayer(
    uid,
    jugadorUno,
    jugadorDos,
    jugadorTres,
    jugadorCuatro
  );

  return (
    <div className="divPlayer2 d-flex flex-column">
      <div className="w-100 player2 d-flex justify-content-center">
        <div className="player2Avatar d-flex flex-column align-items-center">
          <CountdownJugador2vs2 image={noFoto} />
          <div className="playerName fw-bolder text-white px-2 py-1">
            {nombre}
          </div>
        </div>

        <div className="d-flex divCardsPlayer">
          {numeroJugador === 1
            ? partida.cartasJugadorUno.map((carta) => (
                <CartaJugador2vs2 key={carta.id} carta={carta} />
              ))
            : numeroJugador === 2
            ? partida.cartasJugadorDos.map((carta) => (
                <CartaJugador2vs2 key={carta.id} carta={carta} />
              ))
            : numeroJugador === 3
            ? partida.cartasJugadorTres.map((carta) => (
                <CartaJugador2vs2 key={carta.id} carta={carta} />
              ))
            : partida.cartasJugadorCuatro.map((carta) => (
                <CartaJugador2vs2 key={carta.id} carta={carta} />
              ))}
        </div>
      </div>
      {isMyTurn(
        uid,
        jugadorUno,
        jugadorDos,
        turno,
        jugadorTres,
        jugadorCuatro
      ) && <Botones2vs2 />}
    </div>
  );
};
