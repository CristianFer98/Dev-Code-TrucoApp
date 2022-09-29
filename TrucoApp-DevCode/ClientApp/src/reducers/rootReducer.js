import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { juegoReducer } from "./juegoReducer";
import { mesasReducer } from "./mesasReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  juego: juegoReducer,
  mesas: mesasReducer,
});
