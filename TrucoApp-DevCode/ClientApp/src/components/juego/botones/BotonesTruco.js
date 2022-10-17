import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../../../context/SocketContext";

export const BotonesTruco = () => {
  const { partida } = useSelector((state) => state.juego);
  const { truco } = partida;
  const { trucosCantados } = truco;
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
      <div
        onClick={handleTruco}
        id="truco"
        className="d-flex justify-content-center align-items-center buttonPlayer2 m-1 text-white"
      >
        Truco
      </div>
      <div
        onClick={handleTruco}
        id="re truco"
        className="d-flex justify-content-center align-items-center buttonPlayer2 m-1 text-white"
      >
        Re truco
      </div>

      <div
        onClick={handleTruco}
        id="vale cuatro"
        className="d-flex justify-content-center align-items-center buttonPlayer2 m-1 text-white"
      >
        Vale cuatro
      </div>
    </>
  );
};
