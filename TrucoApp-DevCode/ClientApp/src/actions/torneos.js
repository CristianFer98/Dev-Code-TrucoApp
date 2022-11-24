import { types } from "../types/types";

export const obtenerTorneos = () => {
    return async (dispatch) => {
        const resp = await fetch(
            "https://localhost:44342/api/Torneo/obtenertodoslostorneos",
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
                type: types.mesasObtenerTorneos,
                payload: data,
            });
        } else {
            console.log("Status code: " + resp.status);
        }
    };
};

