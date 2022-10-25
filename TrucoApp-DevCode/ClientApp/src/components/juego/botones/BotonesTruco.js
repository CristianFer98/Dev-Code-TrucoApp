import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../../../context/SocketContext";
import { ocultarBotonesYAcciones } from "../../../helpers/truco/ocultarBotonesYAcciones";
import { tiposBotones } from "../../../types/tiposBotones";

export const BotonesTruco = () => {
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { truco } = partida;
  const { trucosCantados } = truco;
  const { connection } = useContext(SocketContext);

  const handleTruco = async (e) => {
    e.preventDefault();

    if (ocultarBotonesYAcciones(uid, partida, tiposBotones.truco)) {
      await connection.invoke("CantarTruco", {
        ...partida,
        Truco: {
          ...truco,
          trucosCantados: [...trucosCantados, e.target.id],
        },
      });
    }
  };

  return (
    <>
      {ocultarBotonesYAcciones(uid, partida, tiposBotones.botonTruco) && (
        <div
          onClick={handleTruco}
          id="truco"
          className="d-flex justify-content-center align-items-center buttonPlayer2 m-1 text-white"
        >
          Truco
        </div>
      )}
      {ocultarBotonesYAcciones(uid, partida, tiposBotones.botonReTruco) && (
        <div
          onClick={handleTruco}
          id="re truco"
          className="d-flex justify-content-center align-items-center buttonPlayer2 m-1 text-white"
        >
          Re truco
        </div>
      )}
      {ocultarBotonesYAcciones(uid, partida, tiposBotones.botonValeCuatro) && (
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
