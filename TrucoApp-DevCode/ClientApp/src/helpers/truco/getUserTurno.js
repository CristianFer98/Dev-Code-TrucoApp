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

export const envidoMasAlto = (repartidor, tantoJugadorUno, tantoJugadorDos) => {
  if (tantoJugadorUno > tantoJugadorDos) {
    return 1;
  } else if (tantoJugadorUno < tantoJugadorDos) {
    return 2;
  } else if (tantoJugadorUno === tantoJugadorDos) {
    return repartidor === 1 ? 2 : 1;
  }
};
