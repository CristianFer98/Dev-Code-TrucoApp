export const getUserPlayer = (uid, jugadorUno, jugadorDos) => {
  if (uid === jugadorUno) {
    return 1;
  } else if (uid === jugadorDos) {
    return 2;
  } else {
    return false;
  }
};

export const isMyTurn = (uid, jugadorUno, jugadorDos, turno) => {
  if (getUserPlayer(uid, jugadorUno, jugadorDos) === turno) {
    return true;
  } else {
    return false;
  }
};

export const sePuedeTirarCarta = (
  uid,
  jugadorUno,
  jugadorDos,
  turno,
  estadoEnvidoCantado,
  estadoCantarTantos
) => {
  return isMyTurn(uid, jugadorUno, jugadorDos, turno) &&
    !estadoEnvidoCantado &&
    !estadoCantarTantos
    ? true
    : false;
};

export const sePuedeCantarQuieroNoQuiero = (
  uid,
  jugadorUno,
  jugadorDos,
  turno,
  estadoEnvidoCantado,
  estadoCantarTantos,
  jugadorQueDebeResponderEnvido
) => {
  return isMyTurn(uid, jugadorUno, jugadorDos, turno) &&
    estadoEnvidoCantado &&
    !estadoCantarTantos &&
    getUserPlayer(uid, jugadorUno, jugadorDos) === jugadorQueDebeResponderEnvido
    ? true
    : false;
};

export const sePuedeCantarEnvidos = (
  uid,
  jugadorUno,
  jugadorDos,
  turno,
  estadoEnvidoCantado,
  estadoCantarTantos,
  jugadorQueDebeResponderEnvido,
  envidosCantados,
  mano
) => {
  return isMyTurn(uid, jugadorUno, jugadorDos, turno) &&
    !estadoCantarTantos &&
    mano === 1 &&
    !envidosCantados.find((e) => e === "quiero") &&
    !envidosCantados.find((e) => e === "no quiero") &&
    estadoEnvidoCantado
    ? getUserPlayer(uid, jugadorUno, jugadorDos) ===
        jugadorQueDebeResponderEnvido
    : !estadoEnvidoCantado
    ? true
    : false;
};
