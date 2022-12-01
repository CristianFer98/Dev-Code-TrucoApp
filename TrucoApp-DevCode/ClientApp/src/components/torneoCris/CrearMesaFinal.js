import React from "react";
import { SocketContext } from "../../context/SocketContext";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";



export const CrearMesaFinal = async (idTorneo, uid) => {

    const history = useHistory();

    const respuesta = await fetch(`https://localhost:44342/api/Torneo/crearMesaFinal/${idTorneo}/${uid}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            IdTorneo: idTorneo,
            IdUsuario: uid,
        }),
    });

    if (respuesta.ok) {

        var idMesaFinal = await respuesta.json();
        await connection.invoke("CrearMesa", uid, idMesa);

        history.push(`/inicio/tabla/${idTorneo}`);//me redirige al torneo en donde ya se creo la nueva mesa.


    }
}
