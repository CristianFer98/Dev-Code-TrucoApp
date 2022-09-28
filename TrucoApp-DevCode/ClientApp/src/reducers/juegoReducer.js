import { types } from "../types/types";

const initialState = {};

export const juegoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.juegoRepartirCartas:
      return {
        ...state,
        cartasJugadasRival: [],
        cartasJugadasJugador: [],
        ...action.payload,
      };

    default:
      return state;
  }
};
