import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../../../context/SocketContext";
import {
  envidoMasAlto,
  envidoMasAlto2vs2,
  getUserPlayer,
} from "../../../helpers/truco/getUserTurno";
import { ocultarBotonesYAcciones } from "../../../helpers/truco/ocultarBotonesYAcciones";
import { tiposBotones } from "../../../types/tiposBotones";

export const BotonTantoEnvido2vs2 = () => {
  const { connection } = useContext(SocketContext);
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const {
    repartidor,
    jugadorUno,
    jugadorDos,
    jugadorTres,
    jugadorCuatro,
    envido,
  } = partida;
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
  const numeroJugador = getUserPlayer(uid, jugadorUno, jugadorDos);
  const envidoMasAlto = envidoMasAlto2vs2(
    repartidor,
    tantoJugadorUno,
    tantoJugadorDos,
    tantoJugadorTres,
    tantoCantadoJugadorCuatro
  );

  const esMasAlta = () => {
    if (repartidor !== numeroJugador) {
      return true;
    } else if (repartidor === numeroJugador) {
      switch (numeroJugador) {
        case 1:
        case 2:
          return envidoMasAlto === 1 ? true : false;
        case 3:
        case 4:
          return envidoMasAlto === 2 ? true : false;
        default:
          break;
      }
    } else {
      return false;
    }
  };

  const tantoJugador = () => {
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
      {esMasAlta ? (
        <div
          className="d-flex justify-content-center align-items-center buttonPlayer2 m-1 text-white"
          id={`Tengo ${tantoJugador}`}
          onClick={handleCantarTantos}
        >
          Tengo {tantoJugador}
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
