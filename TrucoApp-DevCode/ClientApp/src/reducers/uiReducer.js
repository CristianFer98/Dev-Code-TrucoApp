import { types } from "../types/types";

const initialState = {
  chantBox: false,
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

    default:
      return state;
  }
};
