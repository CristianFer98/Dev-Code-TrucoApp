import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../../../context/SocketContext";
import { getUserPlayer } from "../../../helpers/truco/getUserTurno";
import { ocultarBotonesYAcciones } from "../../../helpers/truco/ocultarBotonesYAcciones";
import { tiposBotones } from "../../../types/tiposBotones";

export const BotonTantoEnvido2vs2 = () => {
  const { connection } = useContext(SocketContext);
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { jugadorUno, jugadorDos, jugadorTres, jugadorCuatro, envido } =
    partida;
  const {
    tantoJugadorUno,
    tantoJugadorDos,
    tantoJugadorTres,
    tantoJugadorCuatro,
    tantoCantadoJugadorUno,
    tantoCantadoJugadorDos,
    tantoCantadoJugadorTres,
    tantoCantadoJugadorCuatro,
  } = envido;
  const numeroJugador = getUserPlayer(
    uid,
    jugadorUno,
    jugadorDos,
    jugadorTres,
    jugadorCuatro
  );

  const tantoJugador = (numeroJugador) => {
    switch (numeroJugador) {
      case 1:
        return tantoJugadorUno;
      case 2:
        return tantoJugadorDos;
      case 3:
        return tantoJugadorTres;
      case 4:
        return tantoJugadorCuatro;
      default:
        break;
    }
  };

  const handleCantarTantos = async (e) => {
    e.preventDefault();
    ocultarBotonesYAcciones(uid, partida, tiposBotones.tantos) &&
      (await connection.invoke("CantarTantos", {
        ...partida,
        Envido: {
          ...envido,
          tantoCantadoJugadorUno:
            numeroJugador === 1 ? tantoJugadorUno : tantoCantadoJugadorUno,
          tantoCantadoJugadorDos:
            numeroJugador === 2 ? tantoJugadorDos : tantoCantadoJugadorDos,
          tantoCantadoJugadorTres:
            numeroJugador === 3 ? tantoJugadorTres : tantoCantadoJugadorTres,
          tantoCantadoJugadorCuatro:
            numeroJugador === 4
              ? tantoJugadorCuatro
              : tantoCantadoJugadorCuatro,
          cantoTanto: e.target.id,
        },
      }));
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center buttonPlayer2 m-1 text-white"
        id={`Tengo ${tantoJugador(numeroJugador)}`}
        onClick={handleCantarTantos}
      >
        Tengo {tantoJugador(numeroJugador)}
      </div>
    </>
  );
};
