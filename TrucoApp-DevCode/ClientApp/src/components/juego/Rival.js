import React from "react";
import noFoto from "../../assets/no-foto.jpg";
import mazo from "../../assets/cartas/Mazo.png";

export const Rival = () => {
  return (
    <div className="w-100 player1 d-flex align-items-center justify-content-center">
      <div className="player1Avatar d-flex flex-column align-items-center me-2">
        <div className="divPlayer2ImgNotTurn rounded-circle">
          <img
            referrerPolicy="no-referrer"
            className="player1ImgNotTurn rounded-circle"
            src={noFoto}
            alt="userFoto"
          />
        </div>
        <div className="playerName fw-bolder text-white px-2 py-1">Messi</div>
      </div>

      <div className="d-flex divCardsOponent">
        <div className="d-flex divCardOponent me-1">
          <img
            className="animate__animated animate__fadeIn cardOponent"
            src={mazo}
            alt="card"
          />
        </div>
        <div className="d-flex divCardOponent me-1">
          <img
            className="animate__animated animate__fadeIn cardOponent"
            src={mazo}
            alt="card"
          />
        </div>
        <div className="d-flex divCardOponent me-1">
          <img
            className="animate__animated animate__fadeIn cardOponent"
            src={mazo}
            alt="card"
          />
        </div>
      </div>
    </div>
  );
};
