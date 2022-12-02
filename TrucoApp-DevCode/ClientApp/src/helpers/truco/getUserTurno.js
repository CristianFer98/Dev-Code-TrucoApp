export const getUserPlayer = (
  uid,
  jugadorUno,
  jugadorDos,
  jugadorTres,
  jugadorCuatro
) => {
  if (uid === jugadorUno) {
    return 1;
  } else if (uid === jugadorDos) {
    return 2;
  } else if (uid === jugadorTres) {
    return 3;
  } else if (uid === jugadorCuatro) {
    return 4;
  } else {
    return false;
  }
};

export const getRivalPlayer = (uid, jugadorUno, jugadorDos) => {
  if (uid === jugadorUno) {
    return 2;
  } else if (uid === jugadorDos) {
    return 1;
  } else {
    return false;
  }
};

export const isMyTurn = (
  uid,
  jugadorUno,
  jugadorDos,
  turno,
  jugadorTres,
  jugadorCuatro
) => {
  if (
    getUserPlayer(uid, jugadorUno, jugadorDos, jugadorTres, jugadorCuatro) ===
    turno
  ) {
    return true;
  } else {
    return false;
  }
};

export const isMyTurn2vs2 = (
  uid,
  jugadorUno,
  jugadorDos,
  jugadorTres,
  jugadorCuatro,
  turno
) => {
  if (
    getUserPlayer(uid, jugadorUno, jugadorDos, jugadorTres, jugadorCuatro) ===
    turno
  ) {
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

export const envidoMasAlto2vs2 = (
  repartidor,
  tantoJugadorUno,
  tantoJugadorDos,
  tantoJugadorTres,
  tantoJugadorCuatro
) => {
  const tantosEquipoUno = [tantoJugadorUno, tantoJugadorDos].sort(
    (a, b) => b - a
  );
  const tantosEquipoDos = [tantoJugadorTres, tantoJugadorCuatro].sort(
    (a, b) => b - a
  );

  if (tantosEquipoUno[0] > tantosEquipoDos[0]) {
    return 1;
  } else if (tantosEquipoUno[0] < tantosEquipoDos[0]) {
    return 2;
  } else if (tantosEquipoUno[0] === tantosEquipoDos[0]) {
    switch (repartidor) {
      case 1:
      case 2:
        return 2;
      case 3:
      case 4:
        return 1;
      default:
        break;
    }
  }
};

export const getCartasJugadas = (lado, jugador, partida) => {
  if (lado === "izquierda") {
    switch (jugador) {
      case 1:
        return partida.cartasJugadasJugadorTres;
      case 2:
        return partida.cartasJugadasJugadorCuatro;
      case 3:
        return partida.cartasJugadasJugadorDos;
      case 4:
        return partida.cartasJugadasJugadorUno;
      default:
        break;
    }
  } else if (lado === "abajo") {
    switch (jugador) {
      case 1:
        return partida.cartasJugadasJugadorUno;
      case 2:
        return partida.cartasJugadasJugadorDos;
      case 3:
        return partida.cartasJugadasJugadorTres;
      case 4:
        return partida.cartasJugadasJugadorCuatro;
      default:
        break;
    }
  } else if (lado === "derecha") {
    switch (jugador) {
      case 1:
        return partida.cartasJugadasJugadorCuatro;
      case 2:
        return partida.cartasJugadasJugadorTres;
      case 3:
        return partida.cartasJugadasJugadorUno;
      case 4:
        return partida.cartasJugadasJugadorDos;
      default:
        break;
    }
  } else if (lado === "arriba") {
    switch (jugador) {
      case 1:
        return partida.cartasJugadasJugadorDos;
      case 2:
        return partida.cartasJugadasJugadorUno;
      case 3:
        return partida.cartasJugadasJugadorCuatro;
      case 4:
        return partida.cartasJugadasJugadorTres;
      default:
        break;
    }
  }
};

export const getCartasJugadores = (lado, jugador, partida) => {
  if (lado === "izquierda") {
    switch (jugador) {
      case 1:
        return partida.cartasJugadorTres;
      case 2:
        return partida.cartasJugadorCuatro;
      case 3:
        return partida.cartasJugadorDos;
      case 4:
        return partida.cartasJugadorUno;
      default:
        break;
    }
  } else if (lado === "abajo") {
    switch (jugador) {
      case 1:
        return partida.cartasJugadorUno;
      case 2:
        return partida.cartasJugadorDos;
      case 3:
        return partida.cartasJugadorTres;
      case 4:
        return partida.cartasJugadorCuatro;
      default:
        break;
    }
  } else if (lado === "derecha") {
    switch (jugador) {
      case 1:
        return partida.cartasJugadorCuatro;
      case 2:
        return partida.cartasJugadorTres;
      case 3:
        return partida.cartasJugadorUno;
      case 4:
        return partida.cartasJugadorDos;
      default:
        break;
    }
  } else if (lado === "arriba") {
    switch (jugador) {
      case 1:
        return partida.cartasJugadorDos;
      case 2:
        return partida.cartasJugadorUno;
      case 3:
        return partida.cartasJugadorCuatro;
      case 4:
        return partida.cartasJugadorTres;
      default:
        break;
    }
  }
};

export const getNumeroJugadores = (lado, jugador) => {
  if (lado === "izquierda") {
    switch (jugador) {
      case 1:
        return 3;
      case 2:
        return 4;
      case 3:
        return 2;
      case 4:
        return 1;
      default:
        break;
    }
  } else if (lado === "abajo") {
    switch (jugador) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
      case 4:
        return 4;
      default:
        break;
    }
  } else if (lado === "derecha") {
    switch (jugador) {
      case 1:
        return 4;
      case 2:
        return 3;
      case 3:
        return 1;
      case 4:
        return 2;
      default:
        break;
    }
  } else if (lado === "arriba") {
    switch (jugador) {
      case 1:
        return 2;
      case 2:
        return 1;
      case 3:
        return 4;
      case 4:
        return 3;
      default:
        break;
    }
  }
};

export const getAntesRepartidor = (repartidor) => {
  const jugadores = [1, 4, 2, 3];
  const indexRepartidor = jugadores.indexOf(repartidor);
  return jugadores[indexRepartidor] === 1 ? 3 : jugadores[indexRepartidor - 1];
};
