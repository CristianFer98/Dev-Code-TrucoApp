import { tiposBotones } from "../../types/tiposBotones";
import { getAntesRepartidor, getUserPlayer, isMyTurn } from "./getUserTurno";

export const verSiJugadorYaJugoCarta = (
  uid,
  jugadorUno,
  jugadorDos,
  cartasJugadasJugadorUno,
  cartasJugadasJugadorDos,
  cartasJugadasJugadorTres,
  cartasJugadasJugadorCuatro,
  jugadorTres,
  jugadorCuatro
) => {
  const numeroJugador = getUserPlayer(
    uid,
    jugadorUno,
    jugadorDos,
    jugadorTres,
    jugadorCuatro
  );

  switch (numeroJugador) {
    case 1:
      return cartasJugadasJugadorUno.length > 0 ? true : false;
    case 2:
      return cartasJugadasJugadorDos.length > 0 ? true : false;
    case 3:
      return cartasJugadasJugadorTres.length > 0 ? true : false;
    case 4:
      return cartasJugadasJugadorCuatro.length > 0 ? true : false;
    default:
      break;
  }
};

const puedeCantarReTrucoValeCuatro = (
  jugadorQueDebeResponderTruco,
  numeroJugador
) => {
  switch (jugadorQueDebeResponderTruco) {
    case 1:
    case 2:
      if (numeroJugador === 1 || numeroJugador === 2) {
        return true;
      } else {
        return false;
      }
    case 3:
    case 4:
      if (numeroJugador === 3 || numeroJugador === 4) {
        return true;
      } else {
        return false;
      }
    default:
      break;
  }
};

export const ocultarBotonesYAcciones = (uid, partida, botones) => {
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
    cartasJugadasJugadorTres,
    cartasJugadasJugadorCuatro,
    cantidadJugadores,
    repartidor,
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

  const numeroJugador = getUserPlayer(
    uid,
    jugadorUno,
    jugadorDos,
    jugadorTres,
    jugadorCuatro
  );

  const jugoCarta = verSiJugadorYaJugoCarta(
    uid,
    jugadorUno,
    jugadorDos,
    cartasJugadasJugadorUno,
    cartasJugadasJugadorDos,
    cartasJugadasJugadorTres,
    cartasJugadasJugadorCuatro,
    jugadorTres,
    jugadorCuatro
  );

  switch (botones) {
    case tiposBotones.cartas:
      return isMyTurn(
        uid,
        jugadorUno,
        jugadorDos,
        turno,
        jugadorTres,
        jugadorCuatro
      ) &&
        !estadoEnvidoCantado &&
        !estadoCantarTantos &&
        !estadoTrucoCantado
        ? true
        : false;

    case tiposBotones.envido:
      if (
        isMyTurn(uid, jugadorUno, jugadorDos, turno, jugadorTres, jugadorCuatro)
      ) {
        if (cantidadJugadores === 2) {
          return (
            mano === 1 &&
            !envidosCantados.find((e) => e === "quiero" || e === "no quiero") &&
            !estadoCantarTantos &&
            trucosCantados.length < 2 &&
            (!jugoCarta || (jugoCarta && estadoEnvidoCantado)) &&
            true
          );
        } else {
          if (cantidadJugadores == 4) {
            return (
              mano === 1 &&
              !envidosCantados.find(
                (e) => e === "quiero" || e === "no quiero"
              ) &&
              !estadoCantarTantos &&
              trucosCantados.length < 2 &&
              (!jugoCarta || (jugoCarta && estadoEnvidoCantado)) &&
              (getAntesRepartidor(repartidor) === numeroJugador ||
                repartidor === numeroJugador ||
                envidosCantados.length > 0 ||
                trucosCantados.length > 0) &&
              true
            );
          }
        }
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
      if (
        isMyTurn(uid, jugadorUno, jugadorDos, turno, jugadorTres, jugadorCuatro)
      ) {
        return (estadoEnvidoCantado &&
          !estadoCantarTantos &&
          numeroJugador === jugadorQueDebeResponderEnvido) ||
          (estadoTrucoCantado &&
            !estadoCantarTantos &&
            numeroJugador === jugadorQueDebeResponderTruco)
          ? true
          : false;
      }

    case tiposBotones.truco:
      if (
        isMyTurn(uid, jugadorUno, jugadorDos, turno, jugadorTres, jugadorCuatro)
      ) {
        return !estadoEnvidoCantado && !estadoCantarTantos && true;
      } else {
        return false;
      }

    case tiposBotones.botonTruco:
      if (
        isMyTurn(uid, jugadorUno, jugadorDos, turno, jugadorTres, jugadorCuatro)
      ) {
        return !trucosCantados.find((e) => e === "truco") && true;
      } else {
        return false;
      }

    case tiposBotones.botonReTruco:
      if (
        isMyTurn(uid, jugadorUno, jugadorDos, turno, jugadorTres, jugadorCuatro)
      ) {
        if (!!trucosCantados.find((e) => e === "truco"))
          if (!trucosCantados.find((e) => e === "re truco")) {
            if (cantidadJugadores === 2) {
              return (
                (numeroJugador !== jugadorQueCantoTruco &&
                  estadoTrucoCantado) ||
                (numeroJugador === jugadorQueCantoTruco &&
                  jugadorQueDebeResponderTruco === numeroJugador &&
                  true)
              );
            } else {
              return (
                (numeroJugador !== jugadorQueCantoTruco &&
                  estadoTrucoCantado) ||
                (puedeCantarReTrucoValeCuatro(
                  jugadorQueCantoTruco,
                  numeroJugador
                ) &&
                  puedeCantarReTrucoValeCuatro(
                    jugadorQueDebeResponderTruco,
                    numeroJugador
                  ) &&
                  true)
              );
            }
          } else {
            return false;
          }
      } else {
        return false;
      }

    case tiposBotones.botonValeCuatro:
      if (
        isMyTurn(uid, jugadorUno, jugadorDos, turno, jugadorTres, jugadorCuatro)
      ) {
        if (
          !!trucosCantados.find((e) => e === "truco") &&
          !!trucosCantados.find((e) => e === "re truco") &&
          !trucosCantados.find((e) => e === "vale cuatro")
        ) {
          if (cantidadJugadores === 2) {
            return (
              (numeroJugador !== jugadorQueCantoTruco && estadoTrucoCantado) ||
              (numeroJugador === jugadorQueCantoTruco &&
                jugadorQueDebeResponderTruco === numeroJugador &&
                true)
            );
          } else {
            return (
              (numeroJugador !== jugadorQueCantoTruco && estadoTrucoCantado) ||
              (puedeCantarReTrucoValeCuatro(
                jugadorQueCantoTruco,
                numeroJugador
              ) &&
                puedeCantarReTrucoValeCuatro(
                  jugadorQueDebeResponderTruco,
                  numeroJugador
                ) &&
                true)
            );
          }
        }
      } else {
        return false;
      }

    case tiposBotones.tantos:
      if (
        isMyTurn(uid, jugadorUno, jugadorDos, turno, jugadorTres, jugadorCuatro)
      ) {
        return (
          !!envidosCantados.find((e) => e === "quiero") &&
          estadoCantarTantos &&
          true
        );
      } else {
        return false;
      }

    case tiposBotones.irAlMazo:
      return isMyTurn(
        uid,
        jugadorUno,
        jugadorDos,
        turno,
        jugadorTres,
        jugadorCuatro
      ) &&
        !estadoEnvidoCantado &&
        !estadoCantarTantos &&
        !estadoTrucoCantado
        ? true
        : false;

    default:
      return false;
  }
};
