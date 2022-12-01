import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { SocketContext } from "../../context/SocketContext";
import { getUserPlayer } from "../../helpers/truco/getUserTurno";
import { Flop } from "./Flop";
import { Jugador } from "./Jugador";
import { Rival } from "./Rival";
import { useHistory } from "react-router";


export const Mesa = () => {
  const { uid } = useSelector((state) => state.auth);
    const { partida, usuariosConectados } = useSelector((state) => state.juego);
    const history = useHistory();

  const {
    ganadorMano,
    repartidor,
    puntosJugadorUno,
    puntosJugadorDos,
    jugadorUno,
      jugadorDos,
      room
  } = partida;
  const { chantBox } = useSelector((state) => state.ui);
  const { connection } = useContext(SocketContext);


    const crearMesaFinal = async (idTorneo, uid) => {
        const respuesta = await fetch(`https://localhost:44342/api/Torneo/crearMesaFinal`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                IdTorneo: idTorneo,
                IdUsuario: uid,
            }),
        });

        if (respuesta.ok) {

            var mesa = await respuesta.json();
            const jugadorUno = mesa.jugadorUno;
            const idMesa = mesa.idMesa;


            await connection.invoke("CrearMesa", jugadorUno, idMesa); 
            history.push(`/inicio/tabla/${idTorneo}`);


        }
    }

  useEffect(() => {
    if (!usuariosConectados) {
      if (puntosJugadorUno < 30 && puntosJugadorDos < 30) {
        !!ganadorMano &&
          repartidor === getUserPlayer(uid, jugadorUno, jugadorDos) &&
          setTimeout(async () => {
            await connection.invoke("InicializarMano", partida);
          }, 2000);
      } else {
        puntosJugadorUno >= 30
            ? Swal.fire("Ganador jugador uno", "", "success").then((value) => {
                let idTorneo = localStorage.getItem("torneo");
                connection.invoke("DejarMesa", room);
                if (idTorneo != null) {
                    crearMesaFinal(idTorneo, uid);    
                }

           
            })
          : puntosJugadorDos >= 30 &&
            Swal.fire("Ganador jugador dos", "", "success");
      }
    } else {
      usuariosConectados[0] === partida.jugadorUno
        ? Swal.fire("Ganador jugador uno, rival abandonó.", "", "success")
        : usuariosConectados[0] === partida.jugadorDos &&
          Swal.fire("Ganador jugador dos, rival abandonó.", "", "success");
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
  ]);


 

  return (
    <div className="board">
      <div
        className="h-100 d-flex align-items-center flex-column 
      justify-content-between"
      >
        <Rival />

        {!!chantBox && (
          <div className="divChant bg-light d-flex justify-content-center align-items-center">
            <h5 className="fw-bold text-dark mt-2">{chantBox}</h5>
          </div>
        )}

        <Flop />
        <Jugador />
      </div>
    </div>
  );
};
