import { types } from "../types/types";

const initialState = {
  chantBox: false,
  cargando: false,
  jugadoresConectados: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetChantBox:
      return {
        ...state,
        chantBox: action.payload,
      };

    case types.uiRemoveChantBox:
      return {
        ...state,
        chantBox: false,
      };

    case types.uiSetCargandoTrue:
      return {
        ...state,
        cargando: true,
      };

    case types.uiSetCargandoFalse:
      return {
        ...state,
        cargando: false,
      };

    case types.uiSetCargandoTrue2vs2:
      return {
        ...state,
        cargando: true,
        jugadoresConectados: action.payload,
      };

    case types.uiSetCargandoFalse2vs2:
      return {
        ...state,
        cargando: false,
        jugadoresConectados: false,
      };

    default:
      return state;
  }
};
