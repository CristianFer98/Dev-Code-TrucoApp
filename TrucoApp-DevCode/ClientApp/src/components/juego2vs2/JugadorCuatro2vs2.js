import React from "react";
import noFoto from "../../assets/no-foto.jpg";
import mazo from "../../assets/cartas/Mazo.png";
import { CountdownOtrosJugadores } from "./CountdownOtrosJugadores";
import {
  getCartasJugadores,
  getUserPlayer2vs2,
} from "../../helpers/truco/getUserTurno";
import { useSelector } from "react-redux";

export const JugadorCuatro2vs2 = () => {
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { jugadorUno, jugadorDos, jugadorTres, jugadorCuatro } = partida;
  const jugador = getUserPlayer2vs2(
    uid,
    jugadorUno,
    jugadorDos,
    jugadorTres,
    jugadorCuatro
  );

  return (
    <div className="playerDerecha d-flex align-items-center justify-content-end">
      <div className="d-flex flex-column divCardsOponentDerecha">
        {getCartasJugadores("derecha", jugador, partida).map((carta) => (
          <div key={carta.id} className="divCardOponentDerecha">
            <img
              className="animate__animated animate__fadeInBottomRight cardOponent"
              src={mazo}
              alt="card"
            />
          </div>
        ))}
      </div>
      <div className="playerDerechaAvatar d-flex flex-column align-items-center me-2">
        <CountdownOtrosJugadores image={noFoto} />
        <div className="playerName fw-bolder text-white px-2 py-1">Rival</div>
      </div>
    </div>
  );
};
