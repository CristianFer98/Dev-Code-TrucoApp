import { types } from "../types/types";
import { startLogin } from "./auth";

export const obtenerTorneos = () => {
    return async (dispatch) => {
        const resp = await fetch(
            "https://localhost:44342/api/Torneo/ObtenerTodosLosTorneos",
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

//export const obtenerMesa = (mesaId, history) => {
//    return async (dispatch) => {
//        const resp = await fetch(
//            `https://localhost:44342/api/Mesas/ObtenerMesaPorId/${mesaId}`,
//            {
//                method: "GET",
//                headers: {
//                    "Content-Type": "application/json",
//                },
//            }
//        );

//        if (resp.ok) {
//            const data = await resp.json();
//            if (data.jugadorDos == null) {
//                dispatch(startLogin("usuarioInvitado@hotmail.com", "1234"));
//            } else {
//                history.push("/inicio");
//            }
//        } else {
//             console.log("Status code: " + resp.status);
//            history.push("/inicio");
//        }
//    };
//};
