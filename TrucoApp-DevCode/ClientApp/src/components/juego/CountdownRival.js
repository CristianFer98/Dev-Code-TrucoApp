import React, { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useSelector } from "react-redux";
import { getRivalPlayer, isMyTurn } from "../../helpers/truco/getUserTurno";
import { SocketContext } from "../../context/SocketContext";

export const CountdownRival = ({ image }) => {
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const {
    jugadorUno,
    jugadorDos,
    turno,
    jugadasRealizadas,
    ganadorPartida,
    cartasJugadorUno,
    cartasJugadorDos,
    cartasJugadasJugadorUno,
    cartasJugadasJugadorDos,
    ganadorMano,
    envido,
    truco,
  } = partida;
  const {
    estadoEnvidoCantado,
    envidosCantados,
    tantoJugadorUno,
    tantoJugadorDos,
    tantoCantadoJugadorUno,
    tantoCantadoJugadorDos,
    estadoCantarTantos,
  } = envido;
  const { estadoTrucoCantado, trucosCantados } = truco;

  const { connection } = useContext(SocketContext);
  const rival = getRivalPlayer(uid, jugadorUno, jugadorDos);

  const cantarQuieroNoQuieroAutomaticamente = async () => {
    if (estadoEnvidoCantado) {
      await connection.invoke("CantarEnvido", {
        ...partida,
        Envido: {
          ...envido,
          envidosCantados: [...envidosCantados, "no quiero"],
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
    await connection.invoke("CantarTantos", {
      ...partida,
      Envido: {
        ...envido,
        tantoCantadoJugadorUno:
          rival === 1 ? tantoJugadorUno : tantoCantadoJugadorUno,
        tantoCantadoJugadorDos:
          rival === 2 ? tantoJugadorDos : tantoCantadoJugadorDos,
        cantoTanto: `Tengo ${rival === 1 ? tantoJugadorUno : tantoJugadorDos}`,
      },
    });
  };

  const tirarCartaAutomaticamenteRival = async () => {
    if (rival === 1) {
      await connection.invoke("TirarCarta", {
        ...partida,
        cartasJugadorUno: cartasJugadorUno.filter(
          (c) => c.id !== cartasJugadorUno[0].id
        ),
        cartasJugadasJugadorUno: [
          ...cartasJugadasJugadorUno,
          cartasJugadorUno[0],
        ],
      });
    } else {
      await connection.invoke("TirarCarta", {
        ...partida,
        cartasJugadorDos: cartasJugadorDos.filter(
          (c) => c.id !== cartasJugadorDos[0].id
        ),
        cartasJugadasJugadorDos: [
          ...cartasJugadasJugadorDos,
          cartasJugadorDos[0],
        ],
      });
    }
  };

  const jugadaAutomatica = async () => {
    if (estadoEnvidoCantado || estadoTrucoCantado) {
      cantarQuieroNoQuieroAutomaticamente();
    } else if (estadoCantarTantos) {
      cantarTantosAutomaticamente();
    } else {
      tirarCartaAutomaticamenteRival();
    }
  };

  const renderTime = () => {
    return (
      <div className="timer rounded-circle w-100 h-100 d-flex justify-content-center align-items-center">
        <img
          referrerPolicy="no-referrer"
          alt="userFoto"
          className={`rounded-circle w-100 h-100 ${
            !isMyTurn(uid, jugadorUno, jugadorDos, turno) &&
            !ganadorPartida &&
            !ganadorMano
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
        isPlaying={
          !isMyTurn(uid, jugadorUno, jugadorDos, turno) &&
          turno !== 0 &&
          !ganadorPartida &&
          !ganadorMano
            ? true
            : false
        }
        duration={15}
        size={80}
        strokeWidth={4}
        colors={
          !isMyTurn(uid, jugadorUno, jugadorDos, turno) &&
          turno !== 0 &&
          !ganadorPartida &&
          !ganadorMano
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
