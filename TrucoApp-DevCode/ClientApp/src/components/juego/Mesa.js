import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../../context/SocketContext";
import { Flop } from "./Flop";
import { Jugador } from "./Jugador";
import { Rival } from "./Rival";

export const Mesa = () => {
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { ganadorMano, repartidor } = partida;
  const { connection } = useContext(SocketContext);

  useEffect(() => {
    !!ganadorMano &&
      repartidor === uid &&
      setTimeout(async () => {
        await connection.invoke("VolverARepartir", partida);
      }, 2000);
  }, [ganadorMano, connection, partida, repartidor, uid]);

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
