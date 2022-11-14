import { types } from "../types/types";

const initialState = {
  mesas1vs1: [],
};

export const mesasReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.mesasObtenerMesas:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
