import { types } from "../types/types";

const initialState = {};

export const juegoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.juegoRepartirCartas:
      return {
        ...state,
        ...action.payload,
      };
    case types.juegoTirarCarta:
      return {
        ...state,
        ...action.payload,
      };
    case types.juegoCantarEnvido:
      return {
        ...state,
        ...action.payload,
      };

    case types.juegoBloquearTurnos:
      return {
        ...state,
        ...action.payload,
      };

    case types.juegoCantarTruco:
      return {
        ...state,
        ...action.payload,
      };

    case types.juegoUsuariosConectados:
      return {
        partida: { ...state.partida, turno: 0 },
        ...action.payload,
      };

    case types.juegoDejarMesa:
      return initialState;

    default:
      return state;
  }
};
