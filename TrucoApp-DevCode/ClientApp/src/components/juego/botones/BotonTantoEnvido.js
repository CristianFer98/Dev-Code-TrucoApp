import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../../../context/SocketContext";
import {
  envidoMasAlto,
  getUserPlayer,
} from "../../../helpers/truco/getUserTurno";

export const BotonTantoEnvido = () => {
  const { connection } = useContext(SocketContext);
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { repartidor, jugadorUno, jugadorDos, envido } = partida;
  const {
    tantoJugadorUno,
    tantoJugadorDos,
    tantoCantadoJugadorUno,
    tantoCantadoJugadorDos,
  } = envido;
  const numeroJugador = getUserPlayer(uid, jugadorUno, jugadorDos);

  const handleCantarTantos = async (e) => {
    e.preventDefault();
    await connection.invoke("CantarTantos", {
      ...partida,
      Envido: {
        ...envido,
        tantoCantadoJugadorUno:
          numeroJugador === 1 ? tantoJugadorUno : tantoCantadoJugadorUno,
        tantoCantadoJugadorDos:
          numeroJugador === 2 ? tantoJugadorDos : tantoCantadoJugadorDos,
        cantoTanto: e.target.id,
      },
    });
  };

  return (
    <>
      {repartidor !== numeroJugador ||
      (repartidor === numeroJugador &&
        numeroJugador ===
          envidoMasAlto(repartidor, tantoJugadorUno, tantoJugadorDos)) ? (
        <div
          className="d-flex justify-content-center align-items-center buttonPlayer2 m-1 text-white"
          id={`Tengo ${
            numeroJugador === 1 ? tantoJugadorUno : tantoJugadorDos
          }`}
          onClick={handleCantarTantos}
        >
          Tengo {numeroJugador === 1 ? tantoJugadorUno : tantoJugadorDos}
        </div>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center buttonPlayer2Mazo text-white m-1"
          id="Son buenas"
          onClick={handleCantarTantos}
        >
          Son buenas
        </div>
      )}
    </>
  );
};
