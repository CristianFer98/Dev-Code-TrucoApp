import React from "react";
import { Flop2vs2 } from "./Flop2vs2";
import { Jugador2vs2 } from "./Jugador2vs2";
import { JugadorCuatro2vs2 } from "./JugadorCuatro2vs2";
import { JugadorDos2vs2 } from "./JugadorDos2vs2";
import { JugadorTres2vs2 } from "./JugadorTres2vs2";

export const Mesa2vs2 = () => {
  return (
    <div className="board">
      <JugadorTres2vs2 />
      <div
        className="h-100 d-flex align-items-center flex-column 
      justify-content-between"
      >
        <Jugador2vs2 />
        <Flop2vs2 />
        <JugadorDos2vs2 />
      </div>
      <JugadorCuatro2vs2 />
    </div>
  );
};
