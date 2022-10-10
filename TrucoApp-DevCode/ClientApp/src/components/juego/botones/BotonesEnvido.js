import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../../../context/SocketContext";
import {
  getUserPlayer,
  sePuedeCantarEnvidos,
} from "../../../helpers/truco/getUserTurno";

export const BotonesEnvido = () => {
  const { connection } = useContext(SocketContext);
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { envido, jugadorUno, jugadorDos, turno, mano } = partida;
  const {
    jugadorQueCantoPrimeroEnvido,
    envidosCantados,
    estadoCantarTantos,
    estadoEnvidoCantado,
    jugadorQueDebeResponderEnvido,
  } = envido;

  const handleEnvido = async (e) => {
    e.preventDefault();

    sePuedeCantarEnvidos(
      uid,
      jugadorUno,
      jugadorDos,
      turno,
      estadoEnvidoCantado,
      estadoCantarTantos,
      jugadorQueDebeResponderEnvido,
      envidosCantados,
      mano
    ) &&
      (await connection.invoke("CantarEnvido", {
        ...partida,
        Envido: {
          ...envido,
          envidosCantados: [...envidosCantados, e.target.id],
          estadoEnvidoCantado: true,
          jugadorQueCantoPrimeroEnvido:
            jugadorQueCantoPrimeroEnvido === 0
              ? getUserPlayer(uid, jugadorUno, jugadorDos)
              : jugadorQueCantoPrimeroEnvido,
          jugadorQueDebeResponderEnvido:
            getUserPlayer(uid, jugadorUno, jugadorDos) === 1 ? 2 : 1,
        },
      }));
  };

  return (
    <>
      <div
        onClick={handleEnvido}
        className="d-flex justify-content-center align-items-center buttonPlayer2 m-1 text-white"
        id="envido"
      >
        Envido
      </div>

      <div
        onClick={handleEnvido}
        className="d-flex justify-content-center align-items-center buttonPlayer2 m-1 text-white"
        id="real envido"
      >
        Real Envido
      </div>
      <div
        onClick={handleEnvido}
        className="d-flex justify-content-center align-items-center buttonPlayer2 m-1 text-white"
        id="falta envido"
      >
        Falta Envido
      </div>
    </>
  );
};
