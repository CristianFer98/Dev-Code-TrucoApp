import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../../../context/SocketContext";
import {
  botonReTruco,
  botonTruco,
  botonValeCuatro,
} from "../../../helpers/truco/getUserTurno";

export const BotonesTruco = () => {
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { truco, jugadorUno, jugadorDos, turno } = partida;
  const {
    trucosCantados,
    jugadorQueCantoTruco,
    jugadorQueDebeResponderTruco,
    estadoTrucoCantado,
  } = truco;
  const { connection } = useContext(SocketContext);

  const handleTruco = async (e) => {
    e.preventDefault();

    await connection.invoke("CantarTruco", {
      ...partida,
      Truco: {
        ...truco,
        trucosCantados: [...trucosCantados, e.target.id],
      },
    });
  };

  return (
    <>
      {botonTruco(uid, jugadorUno, jugadorDos, turno, trucosCantados) && (
        <div
          onClick={handleTruco}
          id="truco"
          className="d-flex justify-content-center align-items-center buttonPlayer2 m-1 text-white"
        >
          Truco
        </div>
      )}
      {botonReTruco(
        uid,
        jugadorUno,
        jugadorDos,
        turno,
        trucosCantados,
        jugadorQueCantoTruco,
        jugadorQueDebeResponderTruco,
        estadoTrucoCantado
      ) && (
        <div
          onClick={handleTruco}
          id="re truco"
          className="d-flex justify-content-center align-items-center buttonPlayer2 m-1 text-white"
        >
          Re truco
        </div>
      )}
      {botonValeCuatro(
        uid,
        jugadorUno,
        jugadorDos,
        turno,
        trucosCantados,
        jugadorQueCantoTruco,
        jugadorQueDebeResponderTruco,
        estadoTrucoCantado
      ) && (
        <div
          onClick={handleTruco}
          id="vale cuatro"
          className="d-flex justify-content-center align-items-center buttonPlayer2 m-1 text-white"
        >
          Vale cuatro
        </div>
      )}
    </>
  );
};
