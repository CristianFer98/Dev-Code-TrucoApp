import
{ types }
from "../types/types";

const initialState = {
  torneoPartida: [],
};

export const torneosReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case types.torneosObtenerTorneos:
            return {
                ...state,
            torneoPartida: action.payload,
      };

        default:
            return state;
    }
};
