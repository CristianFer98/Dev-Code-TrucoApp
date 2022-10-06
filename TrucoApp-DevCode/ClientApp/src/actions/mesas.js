import { types } from "../types/types";

export const obtenerMesas = () => {
  return async (dispatch) => {
    const resp = await fetch(
      "https://localhost:44342/api/Mesas/obtenertodaslasmesas",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (resp.ok) {
      const data = await resp.json();
      dispatch({
        type: types.mesasObtenerMesas,
        payload: data,
      });
    } else {
      console.log("Status code: " + resp.status);
    }
  };
};
