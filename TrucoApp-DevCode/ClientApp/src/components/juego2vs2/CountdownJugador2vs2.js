import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export const CountdownJugador2vs2 = ({ image }) => {
  const renderTime = () => {
    return (
      <div className="timer rounded-circle w-100 h-100 d-flex justify-content-center align-items-center">
        <img
          referrerPolicy="no-referrer"
          alt="userFoto"
          className={`rounded-circle w-100 h-100 ${"player2ImgFinishedTimer"}`}
          src={image}
        />
      </div>
    );
  };

  return (
    <div className="timer-wrapper">
      <CountdownCircleTimer
        isPlaying={false}
        duration={15}
        size={80}
        strokeWidth={4}
        colors={["#19FF57", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[7, 5, 2, 0]}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};
