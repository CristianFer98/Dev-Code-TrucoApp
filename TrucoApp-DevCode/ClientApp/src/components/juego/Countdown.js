import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useSelector } from "react-redux";
import { isMyTurn } from "../../helpers/truco/getUserTurno";

export const Countdown = ({ image }) => {
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { jugadorUno, jugadorDos, turno, jugadasRealizadas } = partida;

  const renderTime = () => {
    return (
      <div className="timer rounded-circle w-100 h-100 d-flex justify-content-center align-items-center">
        <img
          referrerPolicy="no-referrer"
          alt="userFoto"
          className={`rounded-circle w-100 h-100 ${
            isMyTurn(uid, jugadorUno, jugadorDos, turno)
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
        isPlaying={isMyTurn(uid, jugadorUno, jugadorDos, turno) ? true : false}
        duration={15}
        size={80}
        strokeWidth={4}
        colors={
          isMyTurn(uid, jugadorUno, jugadorDos, turno)
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
