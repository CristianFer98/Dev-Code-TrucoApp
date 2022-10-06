import React from "react";
import { Flop } from "./Flop";
import { Jugador } from "./Jugador";
import { Rival } from "./Rival";

export const Mesa = () => {
  return (
    <div className="board">
      <div
        className="h-100 d-flex align-items-center flex-column 
      justify-content-between"
      >
        <Rival />
        <Flop />
        <Jugador />
      </div>
    </div>
  );
};
