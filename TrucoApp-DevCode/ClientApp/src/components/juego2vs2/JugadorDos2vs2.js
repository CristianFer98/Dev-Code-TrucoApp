import React from "react";
import noFoto from "../../assets/no-foto.jpg";
import mazo from "../../assets/cartas/Mazo.png";
import { CountdownOtrosJugadores } from "./CountdownOtrosJugadores";

export const JugadorDos2vs2 = () => {
  const carta = {
    id: 1,
    numero: 1,
    palo: "Espada",
    rankingValorTruco: 1,
    rankingValorEnvido: 1,
    imagen:
      "https://res.cloudinary.com/dmvh1zlfc/image/upload/v1668288800/TrucoCartas/Espada/1Espada_xztjoy.png",
  };

  return (
    <div className="w-100 player12vs2 d-flex align-items-center justify-content-center">
      <div className="player1Avatar d-flex flex-column align-items-center me-2">
        <CountdownOtrosJugadores image={noFoto} />
        <div className="playerName fw-bolder text-white px-2 py-1">Rival</div>
      </div>

      <div className="d-flex divCardsOponent">
        <div key={1} className="d-flex divCardOponent me-1">
          <img
            className="animate__animated animate__fadeInBottomLeft cardOponent"
            src={mazo}
            alt="card"
          />
        </div>
        <div key={2} className="d-flex divCardOponent me-1">
          <img
            className="animate__animated animate__fadeInBottomLeft cardOponent"
            src={mazo}
            alt="card"
          />
        </div>
        <div key={3} className="d-flex divCardOponent me-1">
          <img
            className="animate__animated animate__fadeInBottomLeft cardOponent"
            src={mazo}
            alt="card"
          />
        </div>
      </div>
    </div>
  );
};
