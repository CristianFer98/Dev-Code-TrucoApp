import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../../context/SocketContext";
import { getUserPlayer2vs2 } from "../../helpers/truco/getUserTurno";
import { Flop2vs2 } from "./Flop2vs2";
import { Jugador2vs2 } from "./Jugador2vs2";
import { JugadorCuatro2vs2 } from "./JugadorCuatro2vs2";
import { JugadorDos2vs2 } from "./JugadorDos2vs2";
import { JugadorTres2vs2 } from "./JugadorTres2vs2";

export const Mesa2vs2 = () => {
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const {
    ganadorMano,
    jugadorUno,
    jugadorDos,
    jugadorTres,
    jugadorCuatro,
    repartidor,
  } = partida;
  const { connection } = useContext(SocketContext);

  useEffect(() => {
    !!ganadorMano &&
      repartidor ===
        getUserPlayer2vs2(
          uid,
          jugadorUno,
          jugadorDos,
          jugadorTres,
          jugadorCuatro
        ) &&
      setTimeout(async () => {
        await connection.invoke("InicializarMano2vs2", partida);
      }, 2000);
  }, [
    ganadorMano,
    jugadorUno,
    jugadorDos,
    jugadorTres,
    jugadorCuatro,
    partida,
    repartidor,
    uid,
    connection,
  ]);

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
