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
  envidosCantados,
  estadoCantarTantos,
  mano
) => {
  if (isMyTurn(uid, jugadorUno, jugadorDos, turno)) {
    return (
      !envidosCantados.find((e) => e === "quiero") &&
      !envidosCantados.find((e) => e === "no quiero") &&
      !estadoCantarTantos &&
      mano === 1 &&
      true
    );
  } else {
    return false;
  }
};

export const botonEnvido = (envidosCantados) => {
  return (
    !!envidosCantados &&
    ((!!envidosCantados[0] &&
      envidosCantados[0] === "envido" &&
      !envidosCantados[1]) ||
      !envidosCantados[0]) &&
    true
  );
};

export const botonRealEnvido = (envidosCantados) => {
  return (
    !!envidosCantados &&
    !envidosCantados.find((e) => e === "real envido" || e === "falta envido") &&
    true
  );
};

export const botonFaltaEnvido = (envidosCantados) => {
  return (
    !!envidosCantados &&
    !envidosCantados.find((e) => e === "falta envido") &&
    true
  );
};

export const botonesTantos = (
  envidosCantados,
  estadoCantarTantos,
  uid,
  jugadorUno,
  jugadorDos,
  turno
) => {
  if (isMyTurn(uid, jugadorUno, jugadorDos, turno)) {
    return (
      !!envidosCantados.find((e) => e === "quiero") &&
      estadoCantarTantos &&
      true
    );
  } else {
    return false;
  }
};

export const envidoMasAlto = (repartidor, tantoJugadorUno, tantoJugadorDos) => {
  if (tantoJugadorUno > tantoJugadorDos) {
    return 1;
  } else if (tantoJugadorUno < tantoJugadorDos) {
    return 2;
  } else if (tantoJugadorUno === tantoJugadorDos) {
    return repartidor === 1 ? 2 : 1;
  }
};

export const sePuedeCantarTruco = (
  uid,
  jugadorUno,
  jugadorDos,
  turno,
  estadoEnvidoCantado,
  estadoCantarTantos
) => {
  if (isMyTurn(uid, jugadorUno, jugadorDos, turno)) {
    return !estadoEnvidoCantado && !estadoCantarTantos && true;
  } else {
    return false;
  }
};
