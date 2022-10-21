import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../../../context/SocketContext";
import { ocultarBotonesYAcciones } from "../../../helpers/truco/ocultarBotonesYAcciones";
import { tiposBotones } from "../../../types/tiposBotones";

export const BotonIrAlMazo = () => {
  const { connection } = useContext(SocketContext);
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { truco } = partida;
  const { trucosCantados } = truco;

  const handleIrAlMazo = async (e) => {
    e.preventDefault();

    if (ocultarBotonesYAcciones(uid, partida, tiposBotones.irAlMazo)) {
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
    <div
      onClick={handleIrAlMazo}
      id="no quiero"
      className="d-flex justify-content-center align-items-center buttonPlayer2Mazo text-white m-1"
    >
      Ir al Mazo
    </div>
  );
};
