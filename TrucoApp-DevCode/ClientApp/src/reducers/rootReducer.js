import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { juegoReducer } from "./juegoReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  juego: juegoReducer,
});
