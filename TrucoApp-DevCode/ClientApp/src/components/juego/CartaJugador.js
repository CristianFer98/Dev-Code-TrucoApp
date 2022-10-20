import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../../context/SocketContext";
import { isMyTurn, sePuedeTirarCarta } from "../../helpers/truco/getUserTurno";
const imagenCarta = require.context("../../assets/cartas", true);

export const CartaJugador = ({ carta }) => {
  const { partida } = useSelector((state) => state.juego);
  const { uid } = useSelector((state) => state.auth);
  const { turno, jugadorUno, jugadorDos, envido, truco } = partida;
  const { estadoEnvidoCantado, estadoCantarTantos } = envido;
  const { estadoTrucoCantado } = truco;
  const { connection } = useContext(SocketContext);

  const handleJugarCarta = async (e) => {
    e.preventDefault();

    if (
      sePuedeTirarCarta(
        uid,
        jugadorUno,
        jugadorDos,
        turno,
        estadoEnvidoCantado,
        estadoCantarTantos,
        estadoTrucoCantado
      )
    ) {
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
        sePuedeTirarCarta(
          uid,
          jugadorUno,
          jugadorDos,
          turno,
          estadoEnvidoCantado,
          estadoCantarTantos,
          estadoTrucoCantado
        )
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
