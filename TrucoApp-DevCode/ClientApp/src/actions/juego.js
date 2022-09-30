import { types } from "../types/types";

export const repartirCartas = (partida) => ({
  type: types.juegoRepartirCartas,
  payload: { partida },
});

export const tirarCarta = (partida) => ({
  type: types.tirarCarta,
  payload: { partida },
});

export const salirDeMesa = () => ({
  type: types.authDejarDeJugar,
  payload: { jugando: false },
});
