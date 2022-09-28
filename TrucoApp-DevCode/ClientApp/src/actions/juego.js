import { types } from "../types/types";

export const repartirCartas = (partida) => ({
  type: types.juegoRepartirCartas,
  payload: { partida },
});
