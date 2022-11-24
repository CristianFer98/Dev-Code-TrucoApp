import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../../context/SocketContext";
import { getUserPlayer2vs2 } from "../../helpers/truco/getUserTurno";
import { ocultarBotonesYAcciones2vs2 } from "../../helpers/truco/ocultarBotonesYAcciones2vs2";
import { tiposBotones } from "../../types/tiposBotones";
// const imagenCarta = require.context("../../assets/cartas", true);

export const CartaJugador2vs2 = ({ carta, animation }) => {
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { jugadorUno, jugadorDos, jugadorTres, jugadorCuatro } = partida;
  const { connection } = useContext(SocketContext);
  const numeroJugador = getUserPlayer2vs2(
    uid,
    jugadorUno,
    jugadorDos,
    jugadorTres,
    jugadorCuatro
  );

  const handleJugarCarta = async (e) => {
    e.preventDefault();

    if (ocultarBotonesYAcciones2vs2(uid, partida, tiposBotones.cartas)) {
      switch (numeroJugador) {
        case 1:
          await connection.invoke("TirarCarta", {
            ...partida,
            cartasJugadorUno: partida.cartasJugadorUno.filter(
              (c) => c.id !== carta.id
            ),
            cartasJugadasJugadorUno: [
              ...partida.cartasJugadasJugadorUno,
              carta,
            ],
          });
          break;
        case 2:
          await connection.invoke("TirarCarta", {
            ...partida,
            cartasJugadorDos: partida.cartasJugadorDos.filter(
              (c) => c.id !== carta.id
            ),
            cartasJugadasJugadorDos: [
              ...partida.cartasJugadasJugadorDos,
              carta,
            ],
          });
          break;
        case 3:
          await connection.invoke("TirarCarta", {
            ...partida,
            cartasJugadorTres: partida.cartasJugadorTres.filter(
              (c) => c.id !== carta.id
            ),
            cartasJugadasJugadorTres: [
              ...partida.cartasJugadasJugadorTres,
              carta,
            ],
          });
          break;
        case 4:
          await connection.invoke("TirarCarta", {
            ...partida,
            cartasJugadorCuatro: partida.cartasJugadorCuatro.filter(
              (c) => c.id !== carta.id
            ),
            cartasJugadasJugadorCuatro: [
              ...partida.cartasJugadasJugadorCuatro,
              carta,
            ],
          });
          break;

        default:
          break;
      }
    }
  };

  return (
    <div
      onClick={handleJugarCarta}
      className={
        ocultarBotonesYAcciones2vs2(uid, partida, tiposBotones.cartas)
          ? "divCardPlayerTurn"
          : "divCardPlayer"
      }
    >
      <img
        className="animate__animated animate__fadeInDown cardPlayer"
        src={carta.imagen}
        alt="cartaJugador"
      />
    </div>
  );
};
