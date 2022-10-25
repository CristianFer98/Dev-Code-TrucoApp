import { types } from "../types/types";

export const repartirCartas = (partida) => ({
  type: types.juegoRepartirCartas,
  payload: { partida },
});

export const tirarCarta = (partida) => ({
  type: types.juegoTirarCarta,
  payload: { partida },
});

export const salirDeMesa = () => {
  return (dispatch) => {
    dispatch({
      type: types.authDejarDeJugar,
      payload: { jugando: false },
    });

    setTimeout(() => {
      dispatch({ type: types.juegoDejarMesa });
    }, 2000);
  };
};

export const cantarEnvido = (partida) => ({
  type: types.juegoCantarEnvido,
  payload: { partida },
});

export const cantarTruco = (partida) => ({
  type: types.juegoCantarTruco,
  payload: { partida },
});

export const bloquearTurnos = (partida) => ({
  type: types.juegoBloquearTurnos,
  payload: { partida: { ...partida, turno: 0 } },
});

export const usuariosConectados = (usuarios) => ({
  type: types.juegoUsuariosConectados,
  payload: { usuariosConectados: usuarios },
});
