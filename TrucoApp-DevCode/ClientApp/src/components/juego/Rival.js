import React from "react";
import noFoto from "../../assets/no-foto.jpg";
import { useSelector } from "react-redux";
import { CountdownRival } from "./CountdownRival";
// import mazo from "../../assets/cartas/Mazo.png";

export const Rival = () => {
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { jugadorUno } = partida;
  const mazo =
    "https://res.cloudinary.com/dmvh1zlfc/image/upload/v1668288798/TrucoCartas/Mazo_vhkrcs.png";

  return (
    <div className="w-100 player1 d-flex align-items-center justify-content-center">
      <div className="player1Avatar d-flex flex-column align-items-center me-2">
        <CountdownRival image={noFoto} />
        <div className="playerName fw-bolder text-white px-2 py-1">Rival</div>
      </div>

      <div className="d-flex divCardsOponent">
        {uid === jugadorUno
          ? partida.cartasJugadorDos.map((carta) => (
              <div key={carta.id * 11} className="d-flex divCardOponent me-1">
                <img
                  className="animate__animated animate__fadeInBottomLeft cardOponent"
                  src={mazo}
                  alt="card"
                />
              </div>
            ))
          : partida.cartasJugadorUno.map((carta) => (
              <div key={carta.id * 11} className="d-flex divCardOponent me-1">
                <img
                  className="animate__animated animate__fadeInBottomLeft cardOponent"
                  src={mazo}
                  alt="card"
                />
              </div>
            ))}
      </div>
    </div>
  );
};
