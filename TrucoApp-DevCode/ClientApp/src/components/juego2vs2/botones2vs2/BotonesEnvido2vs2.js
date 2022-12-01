import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../../../context/SocketContext";
import { getUserPlayer } from "../../../helpers/truco/getUserTurno";
import { ocultarBotonesYAcciones } from "../../../helpers/truco/ocultarBotonesYAcciones";
import { tiposBotones } from "../../../types/tiposBotones";

export const BotonesEnvido2vs2 = () => {
  const { connection } = useContext(SocketContext);
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { envido, jugadorUno, jugadorDos, jugadorTres, jugadorCuatro } =
    partida;
  const { jugadorQueCantoPrimeroEnvido, envidosCantados } = envido;

  const handleEnvido = async (e) => {
    e.preventDefault();
    ocultarBotonesYAcciones(uid, partida, tiposBotones.envido) &&
      (await connection.invoke("CantarEnvido", {
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
      }));
  };

  return (
    <>
      {ocultarBotonesYAcciones(uid, partida, tiposBotones.botonEnvido) && (
        <div
          onClick={handleEnvido}
          className="d-flex justify-content-center align-items-center buttonPlayer2 m-1 text-white"
          id="envido"
        >
          Envido
        </div>
      )}
      {ocultarBotonesYAcciones(uid, partida, tiposBotones.botonRealEnvido) && (
        <div
          onClick={handleEnvido}
          className="d-flex justify-content-center align-items-center buttonPlayer2 m-1 text-white"
          id="real envido"
        >
          Real Envido
        </div>
      )}
      {ocultarBotonesYAcciones(uid, partida, tiposBotones.botonFaltaEnvido) && (
        <div
          onClick={handleEnvido}
          className="d-flex justify-content-center align-items-center buttonPlayer2 m-1 text-white"
          id="falta envido"
        >
          Falta Envido
        </div>
      )}
    </>
  );
};
