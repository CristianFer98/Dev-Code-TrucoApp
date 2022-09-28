import { types } from "../types/types";

export const repartirCartas = (cartas) => ({
  type: types.juegoRepartirCartas,
  payload: { cartas },
});
