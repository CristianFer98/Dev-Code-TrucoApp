import React, { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useSelector } from "react-redux";
import { getUserPlayer, isMyTurn } from "../../helpers/truco/getUserTurno";
import { SocketContext } from "../../context/SocketContext";
import { ocultarBotonesYAcciones } from "../../helpers/truco/ocultarBotonesYAcciones";
import { tiposBotones } from "../../types/tiposBotones";

export const Countdown = ({ image }) => {
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { jugadorUno, jugadorDos, turno, jugadasRealizadas, envido, truco } =
    partida;
  const {
    estadoEnvidoCantado,
    estadoCantarTantos,
    tantoCantadoJugadorUno,
    tantoCantadoJugadorDos,
    tantoJugadorUno,
    tantoJugadorDos,
    envidosCantados,
    jugadorQueCantoPrimeroEnvido,
  } = envido;
  const { estadoTrucoCantado, trucosCantados } = truco;
  const { connection } = useContext(SocketContext);

  const numeroJugador = getUserPlayer(uid, jugadorUno, jugadorDos);

  const cantarQuieroNoQuieroAutomaticamente = async () => {
    if (ocultarBotonesYAcciones(uid, partida, tiposBotones.quieroNoQuiero))
      if (estadoEnvidoCantado) {
        await connection.invoke("CantarEnvido", {
          ...partida,
          Envido: {
            ...envido,
            envidosCantados: [...envidosCantados, "no quiero"],
            estadoEnvidoCantado: true,
            jugadorQueCantoPrimeroEnvido:
              jugadorQueCantoPrimeroEnvido === 0
                ? getUserPlayer(uid, jugadorUno, jugadorDos)
                : jugadorQueCantoPrimeroEnvido,
            jugadorQueDebeResponderEnvido:
              getUserPlayer(uid, jugadorUno, jugadorDos) === 1 ? 2 : 1,
          },
        });
      } else {
        if (estadoTrucoCantado) {
          await connection.invoke("CantarTruco", {
            ...partida,
            Truco: {
              ...truco,
              trucosCantados: [...trucosCantados, "no quiero"],
            },
          });
        }
      }
  };

  const cantarTantosAutomaticamente = async () => {
    ocultarBotonesYAcciones(uid, partida, tiposBotones.tantos) &&
      (await connection.invoke("CantarTantos", {
        ...partida,
        Envido: {
          ...envido,
          tantoCantadoJugadorUno:
            numeroJugador === 1 ? tantoJugadorUno : tantoCantadoJugadorUno,
          tantoCantadoJugadorDos:
            numeroJugador === 2 ? tantoJugadorDos : tantoCantadoJugadorDos,
          cantoTanto: `Tengo ${
            numeroJugador === 1 ? tantoJugadorUno : tantoJugadorDos
          }`,
        },
      }));
  };

  const jugarCartaAutomaticamente = async () => {
    if (ocultarBotonesYAcciones(uid, partida, tiposBotones.cartas)) {
      if (uid === jugadorUno && turno === 1) {
        await connection.invoke("TirarCarta", {
          ...partida,
          cartasJugadorUno: partida.cartasJugadorUno.filter(
            (c) => c.id !== partida.cartasJugadorUno[0].id
          ),
          cartasJugadasJugadorUno: [
            ...partida.cartasJugadasJugadorUno,
            partida.cartasJugadorUno[0],
          ],
        });
      } else if (uid === jugadorDos && turno === 2) {
        await connection.invoke("TirarCarta", {
          ...partida,
          cartasJugadorDos: partida.cartasJugadorDos.filter(
            (c) => c.id !== partida.cartasJugadorDos[0].id
          ),
          cartasJugadasJugadorDos: [
            ...partida.cartasJugadasJugadorDos,
            partida.cartasJugadorDos[0],
          ],
        });
      }
    }
  };

  const jugadaAutomatica = () => {
    if (estadoTrucoCantado || estadoEnvidoCantado) {
      cantarQuieroNoQuieroAutomaticamente();
    } else if (estadoCantarTantos) {
      cantarTantosAutomaticamente();
    } else {
      jugarCartaAutomaticamente();
    }
  };

  const renderTime = () => {
    return (
      <div className="timer rounded-circle w-100 h-100 d-flex justify-content-center align-items-center">
        <img
          referrerPolicy="no-referrer"
          alt="userFoto"
          className={`rounded-circle w-100 h-100 ${
            isMyTurn(uid, jugadorUno, jugadorDos, turno)
              ? "player2Img"
              : "player2ImgFinishedTimer"
          }`}
          src={image}
        />
      </div>
    );
  };

  return (
    <div className="timer-wrapper">
      <CountdownCircleTimer
        key={jugadasRealizadas}
        isPlaying={isMyTurn(uid, jugadorUno, jugadorDos, turno) ? true : false}
        duration={10}
        size={80}
        strokeWidth={4}
        colors={
          isMyTurn(uid, jugadorUno, jugadorDos, turno)
            ? ["#19FF57", "#F7B801", "#A30000", "#A30000"]
            : [
                "rgb(212, 212, 212)",
                "rgb(212, 212, 212)",
                "rgb(212, 212, 212)",
                "rgb(212, 212, 212)",
              ]
        }
        colorsTime={[7, 5, 2, 0]}
        onComplete={() => {
          jugadaAutomatica();
        }}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};
