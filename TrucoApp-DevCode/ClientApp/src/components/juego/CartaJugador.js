import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../../context/SocketContext";
import { ocultarBotonesYAcciones } from "../../helpers/truco/ocultarBotonesYAcciones";
import { tiposBotones } from "../../types/tiposBotones";
const imagenCarta = require.context("../../assets/cartas", true);

export const CartaJugador = ({ carta }) => {
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { turno, jugadorUno, jugadorDos } = partida;
  const { connection } = useContext(SocketContext);

  const handleJugarCarta = async (e) => {
    e.preventDefault();

    if (ocultarBotonesYAcciones(uid, partida, tiposBotones.cartas)) {
      if (uid === jugadorUno && turno === 1) {
        await connection.invoke("TirarCarta", {
          ...partida,
          cartasJugadorUno: partida.cartasJugadorUno.filter(
            (c) => c.id !== carta.id
          ),
          cartasJugadasJugadorUno: [...partida.cartasJugadasJugadorUno, carta],
        });
      } else if (uid === jugadorDos && turno === 2) {
        await connection.invoke("TirarCarta", {
          ...partida,
          cartasJugadorDos: partida.cartasJugadorDos.filter(
            (c) => c.id !== carta.id
          ),
          cartasJugadasJugadorDos: [...partida.cartasJugadasJugadorDos, carta],
        });
      }
    }
  };

  return (
    <div
      onClick={handleJugarCarta}
      className={
        ocultarBotonesYAcciones(uid, partida, tiposBotones.cartas)
          ? "divCardPlayerTurn"
          : "divCardPlayer"
      }
    >
      <img
        className="animate__animated animate__fadeInTopLeft cardPlayer"
        src={imagenCarta(carta.imagen)}
        alt="cartaJugador"
      />
    </div>
  );
};
