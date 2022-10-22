import { CountdownCircleTimer } from "react-countdown-circle-timer";
import React from "react";
import { useSelector } from "react-redux";
import { isMyTurn } from "../../helpers/truco/getUserTurno";

export const CountdownRival = ({ image }) => {
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { jugadorUno, jugadorDos, turno, jugadasRealizadas, ganadorPartida } =
    partida;

  const renderTime = () => {
    return (
      <div className="timer rounded-circle w-100 h-100 d-flex justify-content-center align-items-center">
        <img
          referrerPolicy="no-referrer"
          alt="userFoto"
          className={`rounded-circle w-100 h-100 ${
            !isMyTurn(uid, jugadorUno, jugadorDos, turno) && !ganadorPartida
              ? "player2Img"
              : "player2ImgFinishedTimer"
          }`}
          src={image}
        />
      </div>
    );
  };

  return (
    <div className="timer-wrapper">
      <CountdownCircleTimer
        key={jugadasRealizadas}
        isPlaying={
          !isMyTurn(uid, jugadorUno, jugadorDos, turno) && !ganadorPartida
            ? true
            : false
        }
        duration={10}
        size={80}
        strokeWidth={4}
        colors={
          !isMyTurn(uid, jugadorUno, jugadorDos, turno) && !ganadorPartida
            ? ["#19FF57", "#F7B801", "#A30000", "#A30000"]
            : [
                "rgb(212, 212, 212)",
                "rgb(212, 212, 212)",
                "rgb(212, 212, 212)",
                "rgb(212, 212, 212)",
              ]
        }
        colorsTime={[7, 5, 2, 0]}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};
