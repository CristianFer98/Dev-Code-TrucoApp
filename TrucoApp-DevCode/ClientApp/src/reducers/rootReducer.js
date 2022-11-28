import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { juegoReducer } from "./juegoReducer";
import { mesasReducer } from "./mesasReducer";
import { uiReducer } from "./uiReducer";
import { torneosReducer } from "./torneosReducer";


export const rootReducer = combineReducers({
  auth: authReducer,
  juego: juegoReducer,
  mesas: mesasReducer,
  ui: uiReducer,
  torneos: torneosReducer
});
