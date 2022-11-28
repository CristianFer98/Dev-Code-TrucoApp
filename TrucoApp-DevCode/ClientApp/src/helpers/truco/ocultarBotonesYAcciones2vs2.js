import { tiposBotones } from "../../types/tiposBotones";
import { getUserPlayer, isMyTurn, isMyTurn2vs2 } from "./getUserTurno";

export const ocultarBotonesYAcciones2vs2 = (uid, partida, botones) => {
  const {
    jugadorUno,
    jugadorDos,
    jugadorTres,
    jugadorCuatro,
    turno,
    envido,
    truco,
    mano,
    cartasJugadasJugadorUno,
    cartasJugadasJugadorDos,
  } = partida;
  const {
    envidosCantados,
    estadoEnvidoCantado,
    estadoCantarTantos,
    jugadorQueDebeResponderEnvido,
  } = envido;

  const {
    estadoTrucoCantado,
    jugadorQueDebeResponderTruco,
    trucosCantados,
    jugadorQueCantoTruco,
  } = truco;

  switch (botones) {
    case tiposBotones.cartas:
      return isMyTurn2vs2(
        uid,
        jugadorUno,
        jugadorDos,
        jugadorTres,
        jugadorCuatro,
        turno
      ) &&
        !estadoEnvidoCantado &&
        !estadoCantarTantos &&
        !estadoTrucoCantado
        ? true
        : false;

    case tiposBotones.envido:
      if (isMyTurn(uid, jugadorUno, jugadorDos, turno)) {
        return (
          mano === 1 &&
          !envidosCantados.find((e) => e === "quiero" || e === "no quiero") &&
          !estadoCantarTantos &&
          trucosCantados.length < 2 &&
          (!verSiJugadorYaJugoCarta(
            uid,
            jugadorUno,
            jugadorDos,
            cartasJugadasJugadorUno,
            cartasJugadasJugadorDos
          ) ||
            (verSiJugadorYaJugoCarta(
              uid,
              jugadorUno,
              jugadorDos,
              cartasJugadasJugadorUno,
              cartasJugadasJugadorDos
            ) &&
              estadoEnvidoCantado)) &&
          true
        );
      } else {
        return false;
      }

    case tiposBotones.botonEnvido:
      return (
        !!envidosCantados &&
        ((!!envidosCantados[0] &&
          envidosCantados[0] === "envido" &&
          !envidosCantados[1]) ||
          !envidosCantados[0]) &&
        true
      );

    case tiposBotones.botonRealEnvido:
      return (
        !!envidosCantados &&
        !envidosCantados.find(
          (e) => e === "real envido" || e === "falta envido"
        ) &&
        true
      );

    case tiposBotones.botonFaltaEnvido:
      return (
        !!envidosCantados &&
        !envidosCantados.find((e) => e === "falta envido") &&
        true
      );

    case tiposBotones.quieroNoQuiero:
      if (isMyTurn(uid, jugadorUno, jugadorDos, turno)) {
        return (estadoEnvidoCantado &&
          !estadoCantarTantos &&
          getUserPlayer(uid, jugadorUno, jugadorDos) ===
            jugadorQueDebeResponderEnvido) ||
          (estadoTrucoCantado &&
            !estadoCantarTantos &&
            getUserPlayer(uid, jugadorUno, jugadorDos) ===
              jugadorQueDebeResponderTruco)
          ? true
          : false;
      }

    case tiposBotones.truco:
      if (isMyTurn(uid, jugadorUno, jugadorDos, turno)) {
        return !estadoEnvidoCantado && !estadoCantarTantos && true;
      } else {
        return false;
      }

    case tiposBotones.botonTruco:
      if (isMyTurn(uid, jugadorUno, jugadorDos, turno)) {
        return !trucosCantados.find((e) => e === "truco") && true;
      } else {
        return false;
      }

    case tiposBotones.botonReTruco:
      if (isMyTurn(uid, jugadorUno, jugadorDos, turno)) {
        if (!!trucosCantados.find((e) => e === "truco"))
          if (!trucosCantados.find((e) => e === "re truco")) {
            return (
              (getUserPlayer(uid, jugadorUno, jugadorDos) !==
                jugadorQueCantoTruco &&
                estadoTrucoCantado) ||
              (getUserPlayer(uid, jugadorUno, jugadorDos) ===
                jugadorQueCantoTruco &&
                jugadorQueDebeResponderTruco ===
                  getUserPlayer(uid, jugadorUno, jugadorDos) &&
                true)
            );
          } else {
            return false;
          }
      } else {
        return false;
      }

    case tiposBotones.botonValeCuatro:
      if (isMyTurn(uid, jugadorUno, jugadorDos, turno)) {
        if (
          !!trucosCantados.find((e) => e === "truco") &&
          !!trucosCantados.find((e) => e === "re truco") &&
          !trucosCantados.find((e) => e === "vale cuatro")
        ) {
          return (
            (getUserPlayer(uid, jugadorUno, jugadorDos) !==
              jugadorQueCantoTruco &&
              estadoTrucoCantado) ||
            (getUserPlayer(uid, jugadorUno, jugadorDos) ===
              jugadorQueCantoTruco &&
              jugadorQueDebeResponderTruco ===
                getUserPlayer(uid, jugadorUno, jugadorDos) &&
              true)
          );
        }
      } else {
        return false;
      }

    case tiposBotones.tantos:
      if (isMyTurn(uid, jugadorUno, jugadorDos, turno)) {
        return (
          !!envidosCantados.find((e) => e === "quiero") &&
          estadoCantarTantos &&
          true
        );
      } else {
        return false;
      }

    case tiposBotones.irAlMazo:
      return isMyTurn(uid, jugadorUno, jugadorDos, turno) &&
        !estadoEnvidoCantado &&
        !estadoCantarTantos &&
        !estadoTrucoCantado
        ? true
        : false;

    default:
      return false;
  }
};
