import { types } from "../types/types";

export const obtenerTorneos = () => {
    return async (dispatch) => {
        const resp = await fetch(
            "https://dev-code-trucoapp20221119110900.azurewebsites.net/api/Torneo/ObtenerTodosLosTorneos",
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
                type: types.torneosObtenerTorneos,
                payload: data,
            });
        } else {
            console.log("Status code: " + resp.status);
        }
    };
};

export const obtenerTorneoPartida = (torneoId, connection) => {
    return async (dispatch) => {
        const resp = await fetch(
            `https://dev-code-trucoapp20221119110900.azurewebsites.net/api/Torneo/ObtenerTodosLosTorneosPartida/${torneoId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log("Response: " + resp)
        if (resp.ok) {
            const data = await resp.json();
            await connection.invoke("TorneosPartidaActualizados");
            console.log("DATA: " + data)
            dispatch({
                type: types.obtenerTorneoPartida,
                payload: data,
            });
        } else {
            console.log("Status code: " + resp.status);
        }
    };
};

