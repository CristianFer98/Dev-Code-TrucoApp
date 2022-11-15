import React from "react";
import noFoto from "../../assets/no-foto.jpg";
import { CartaJugador2vs2 } from "./CartaJugador2vs2";
import { CountdownJugador2vs2 } from "./CountdownJugador2vs2";

export const Jugador2vs2 = () => {
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
    <div className="divPlayer2 d-flex flex-column">
      <div className="w-100 player2 d-flex justify-content-center">
        <div className="player2Avatar d-flex flex-column align-items-center">
          <CountdownJugador2vs2 image={noFoto} />
          <div className="playerName fw-bolder text-white px-2 py-1">
            Jugador uno
          </div>
        </div>

        <div className="d-flex divCardsPlayer">
          <CartaJugador2vs2 key={1} carta={carta} />
          <CartaJugador2vs2 key={2} carta={carta} />
          <CartaJugador2vs2 key={3} carta={carta} />
        </div>
      </div>
    </div>
  );
};
