import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../../../context/SocketContext";
import {
  getUserPlayer,
  sePuedeCantarQuieroNoQuiero,
} from "../../../helpers/truco/getUserTurno";

export const BotonesQuieroNoQuiero = () => {
  const { connection } = useContext(SocketContext);
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { envido, truco, jugadorUno, jugadorDos, turno } = partida;
  const {
    jugadorQueCantoPrimeroEnvido,
    envidosCantados,
    estadoEnvidoCantado,
    estadoCantarTantos,
    jugadorQueDebeResponderEnvido,
  } = envido;

  const { estadoTrucoCantado, jugadorQueDebeResponderTruco, trucosCantados } =
    truco;

  const handleQuieroNoQuiero = async (e) => {
    e.preventDefault();

    if (
      sePuedeCantarQuieroNoQuiero(
        uid,
        jugadorUno,
        jugadorDos,
        turno,
        estadoEnvidoCantado,
        estadoCantarTantos,
        jugadorQueDebeResponderEnvido,
        estadoTrucoCantado,
        jugadorQueDebeResponderTruco
      )
    )
      if (estadoEnvidoCantado) {
        await connection.invoke("CantarEnvido", {
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
        });
      } else {
        if (estadoTrucoCantado) {
          await connection.invoke("CantarTruco", {
            ...partida,
            Truco: {
              ...truco,
              trucosCantados: [...trucosCantados, e.target.id],
            },
          });
        }
      }
  };

  return (
    <div className="d-flex justify-content-center">
      <div
        onClick={handleQuieroNoQuiero}
        id="quiero"
        className="d-flex justify-content-center align-items-center buttonPlayerQuiero m-1 text-white"
      >
        Quiero
      </div>
      <div
        onClick={handleQuieroNoQuiero}
        id="no quiero"
        className="d-flex justify-content-center align-items-center buttonPlayer2Mazo m-1 text-white"
      >
        No Quiero
      </div>
    </div>
  );
};
