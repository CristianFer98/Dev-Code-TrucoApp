import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../../../context/SocketContext";
import { sePuedeIrAlMazo } from "../../../helpers/truco/getUserTurno";

export const BotonIrAlMazo = () => {
  const { connection } = useContext(SocketContext);
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { envido, truco, jugadorUno, jugadorDos, turno } = partida;
  const { estadoEnvidoCantado, estadoCantarTantos } = envido;

  const { estadoTrucoCantado, trucosCantados } = truco;

  const handleIrAlMazo = async (e) => {
    e.preventDefault();

    if (
      sePuedeIrAlMazo(
        uid,
        jugadorUno,
        jugadorDos,
        turno,
        estadoEnvidoCantado,
        estadoCantarTantos,
        estadoTrucoCantado
      )
    ) {
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
