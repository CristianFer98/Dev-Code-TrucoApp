import React from "react";
import noFoto from "../../assets/no-foto.jpg";
import { CountdownOtrosJugadores } from "./CountdownOtrosJugadores";
import {
  getCartasJugadores,
  getNumeroJugadores,
  getUserPlayer,
} from "../../helpers/truco/getUserTurno";
import { useSelector } from "react-redux";
// import mazo from "../../assets/cartas/Mazo.png";

export const JugadorCuatro2vs2 = () => {
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { jugadorUno, jugadorDos, jugadorTres, jugadorCuatro, turno } = partida;
  const jugador = getUserPlayer(
    uid,
    jugadorUno,
    jugadorDos,
    jugadorTres,
    jugadorCuatro
  );
  const mazo =
    "https://res.cloudinary.com/dmvh1zlfc/image/upload/v1668288798/TrucoCartas/Mazo_vhkrcs.png";

  return (
    <div className="playerDerecha d-flex align-items-center justify-content-end">
      <div className="d-flex flex-column divCardsOponentDerecha">
        {getCartasJugadores("derecha", jugador, partida).map((carta) => (
          <div key={carta.id} className="divCardOponentDerecha">
            <img
              className="animate__animated animate__fadeInLeft cardOponent"
              src={mazo}
              alt="card"
            />
          </div>
        ))}
      </div>
      <div className="playerDerechaAvatar d-flex flex-column align-items-center me-2">
        <CountdownOtrosJugadores
          image={noFoto}
          juega={getNumeroJugadores("derecha", jugador) === turno}
        />
        <div className="playerName fw-bolder text-white px-2 py-1">Rival</div>
      </div>
    </div>
  );
};
