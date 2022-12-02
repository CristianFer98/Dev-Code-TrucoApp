import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { removeChantBox } from "../../actions/ui";
import { SocketContext } from "../../context/SocketContext";
import { getUserPlayer } from "../../helpers/truco/getUserTurno";
import { Flop2vs2 } from "./Flop2vs2";
import { Jugador2vs2 } from "./Jugador2vs2";
import { JugadorCuatro2vs2 } from "./JugadorCuatro2vs2";
import { JugadorDos2vs2 } from "./JugadorDos2vs2";
import { JugadorTres2vs2 } from "./JugadorTres2vs2";

export const Mesa2vs2 = () => {
  const { uid } = useSelector((state) => state.auth);
  const { partida, usuariosConectados } = useSelector((state) => state.juego);
  const {
    ganadorMano,
    repartidor,
    puntosJugadorUno,
    puntosJugadorDos,
    jugadorUno,
    jugadorDos,
    jugadorTres,
    jugadorCuatro,
  } = partida;
  const { chantBox } = useSelector((state) => state.ui);
  const { connection } = useContext(SocketContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!usuariosConectados) {
      if (puntosJugadorUno < 30 && puntosJugadorDos < 30) {
        !!ganadorMano &&
          repartidor ===
            getUserPlayer(
              uid,
              jugadorUno,
              jugadorDos,
              jugadorTres,
              jugadorCuatro
            ) &&
          setTimeout(async () => {
            await connection.invoke("InicializarMano2vs2", partida);
          }, 2000);
      } else {
        puntosJugadorUno >= 30
          ? Swal.fire("Ganador equipo uno", "", "success")
          : puntosJugadorDos >= 30 &&
            Swal.fire("Ganador equipo dos", "", "success");
        dispatch(removeChantBox());
      }
    } else {
      !!usuariosConectados.find((u) => u === jugadorUno) &&
      !!usuariosConectados.find((u) => u === jugadorDos)
        ? Swal.fire("Ganador equipo uno, rival abandonó", "", "success")
        : Swal.fire("Ganador equipo dos, rival abandonó", "", "success");
      dispatch(removeChantBox());
    }
  }, [
    puntosJugadorUno,
    puntosJugadorDos,
    ganadorMano,
    connection,
    partida,
    repartidor,
    uid,
    usuariosConectados,
    dispatch,
  ]);

  return (
    <div className="board">
      <JugadorTres2vs2 />
      <div
        className="h-100 d-flex align-items-center flex-column 
      justify-content-between"
      >
        <Jugador2vs2 />
        {!!chantBox && (
          <div className="divChant2 d-flex justify-content-center align-items-center">
            <h5 className="fw-bold text-dark mt-2">{chantBox}</h5>
          </div>
        )}
        <Flop2vs2 />
        <JugadorDos2vs2 />
      </div>
      <JugadorCuatro2vs2 />
    </div>
  );
};
