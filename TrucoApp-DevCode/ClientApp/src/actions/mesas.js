import { types } from "../types/types";
import { startLogin } from "./auth";

export const obtenerMesas = () => {
  return async (dispatch) => {
    const resp = await fetch(
      "https://dev-code-trucoapp20221119110900.azurewebsites.net/api/Mesas/obtenertodaslasmesas",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (resp.ok) {
      const data = await resp.json();

      const mesas1vs1 = data.filter((mesa) => mesa.cantidadJugadores === 2);
      const mesas2vs2 = data.filter((mesa) => mesa.cantidadJugadores === 4);
      const mesasTorneo = data.filter((mesa) => mesa.tipo == "Privada");

      dispatch({
        type: types.mesasObtenerMesas,
        payload: { mesas1vs1, mesas2vs2, mesasTorneo },
      });
    } else {
      console.log("Status code: " + resp.status);
    }
  };
};

export const obtenerMesa = (mesaId, history) => {
  return async (dispatch) => {
    const resp = await fetch(
      `https://dev-code-trucoapp20221119110900.azurewebsites.net/api/Mesas/ObtenerMesaPorId/${mesaId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (resp.ok) {
      const data = await resp.json();
      if (data.jugadorDos == null) {
        dispatch(startLogin("usuarioInvitado@hotmail.com", "1234"));
      } else {
        history.push("/inicio");
      }
    } else {
      // console.log("Status code: " + resp.status);
      history.push("/inicio");
    }
  };
};
