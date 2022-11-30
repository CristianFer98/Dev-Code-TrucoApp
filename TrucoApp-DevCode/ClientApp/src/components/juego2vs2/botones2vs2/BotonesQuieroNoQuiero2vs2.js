import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../../../context/SocketContext";
import { getUserPlayer } from "../../../helpers/truco/getUserTurno";
import { ocultarBotonesYAcciones } from "../../../helpers/truco/ocultarBotonesYAcciones";
import { tiposBotones } from "../../../types/tiposBotones";

export const BotonesQuieroNoQuiero2vs2 = () => {
  const { connection } = useContext(SocketContext);
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { envido, truco, jugadorUno, jugadorDos, jugadorTres, jugadorCuatro } =
    partida;
  const { jugadorQueCantoPrimeroEnvido, envidosCantados, estadoEnvidoCantado } =
    envido;

  const { estadoTrucoCantado, trucosCantados } = truco;

  const handleQuieroNoQuiero = async (e) => {
    e.preventDefault();

    if (ocultarBotonesYAcciones(uid, partida, tiposBotones.quieroNoQuiero))
      if (estadoEnvidoCantado) {
        await connection.invoke("CantarEnvido", {
          ...partida,
          Envido: {
            ...envido,
            envidosCantados: [...envidosCantados, e.target.id],
            estadoEnvidoCantado: true,
            jugadorQueCantoPrimeroEnvido:
              jugadorQueCantoPrimeroEnvido === 0
                ? getUserPlayer(
                    uid,
                    jugadorUno,
                    jugadorDos,
                    jugadorTres,
                    jugadorCuatro
                  )
                : jugadorQueCantoPrimeroEnvido,
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
