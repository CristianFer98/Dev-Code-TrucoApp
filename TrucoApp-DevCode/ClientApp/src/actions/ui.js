import { types } from "../types/types";

export const checkChantSet = (playerWhoSay, typeChant, numberPlayer) => {
  return (dispatch) => {
    const chantsNotDelete = [
      "Envido",
      "Real envido",
      "Falta envido",
      "Truco",
      "Re truco",
      "Vale cuatro",
    ];

    const chant = typeChant;
    const chantUpperCase = chant[0].toUpperCase() + chant.substring(1);

    if (numberPlayer !== playerWhoSay) {
      dispatch(setChantBox(chantUpperCase));
      if (!chantsNotDelete.includes(chantUpperCase)) {
        if (chantUpperCase === "Me voy al mazo") {
          setTimeout(() => {
            dispatch(removeChantBox());
          }, 800);
        } else {
          setTimeout(() => {
            dispatch(removeChantBox());
          }, 2000);
        }
      }
    } else {
      dispatch(removeChantBox());
    }
  };
};

const setChantBox = (chant) => ({
  type: types.uiSetChantBox,
  payload: chant,
});

export const removeChantBox = () => ({
  type: types.uiRemoveChantBox,
});

export const setCargandoTrue = () => ({
  type: types.uiSetCargandoTrue,
});

export const setCargandoFalse = () => ({
  type: types.uiSetCargandoFalse,
});

export const setCargandoTrue2vs2 = (jugadores) => ({
  type: types.uiSetCargandoTrue2vs2,
  payload: jugadores,
});

export const setCargandoFalse2vs2 = () => ({
  type: types.uiSetCargandoFalse2vs2,
});
