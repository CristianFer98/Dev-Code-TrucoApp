import { types } from "../types/types";

export const repartirCartas = (partida) => ({
  type: types.juegoRepartirCartas,
  payload: { partida },
});

export const tirarCarta = (partida) => ({
  type: types.juegoTirarCarta,
  payload: { partida },
});

export const salirDeMesa = () => ({
  type: types.authDejarDeJugar,
  payload: { jugando: false },
});

export const cantarEnvido = (partida) => ({
  type: types.juegoCantarEnvido,
  payload: { partida },
});

export const bloquearTurnos = (partida) => ({
  type: types.juegoBloquearTurnos,
  payload: { partida: { ...partida, turno: 0 } },
});
