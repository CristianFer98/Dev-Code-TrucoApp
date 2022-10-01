import { types } from "../types/types";

const initialState = {};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        ...action.payload,
      };

    case types.authJugar:
      return {
        ...state,
        ...action.payload,
      };

    case types.authDejarDeJugar:
      return {
        ...state,
        ...action.payload,
      };

    case types.authLogout:
      return {};

    default:
      return state;
  }
};
