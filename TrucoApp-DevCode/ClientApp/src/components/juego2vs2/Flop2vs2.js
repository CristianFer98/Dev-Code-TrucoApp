import React from "react";
import { CartasJugadas2vs2 } from "./CartasJugadas2vs2";

export const Flop2vs2 = () => {
  return (
    <div className="divGame2vs2 d-flex flex-row justify-content-center">
      <div className="w-100 d-flex justify-content-center flex-column align-items-center">
        <div className="divFlop2vs2 d-flex justify-content-between h-75">
          <CartasJugadas2vs2 />
        </div>
      </div>

      {/* <div className="divFlopSides"></div> */}
    </div>
  );
};
