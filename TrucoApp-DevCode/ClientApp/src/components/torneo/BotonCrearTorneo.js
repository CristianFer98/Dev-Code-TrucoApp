import React from "react";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { SocketContext } from "../../context/SocketContext";
import Swal from "sweetalert2";


export const BotonCrearTorneo = () => {
    const { uid } = useSelector((state) => state.auth);
    const { connection } = useContext(SocketContext);

    const handleCrearTorneo = async (e) => {
        e.preventDefault();

        const resp = await fetch("https://dev-code-trucoapp20221119110900.azurewebsites.net/api/Torneo/CrearTorneo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Nombre: "Torneo",
                CantidadParticipantes: 4,
                estaLleno: false
            }),
        });

        if (resp.ok) {
            var jsonResponse = await resp.json();
            const participantes = jsonResponse.CantidadParticipantes;
            await connection.invoke("CrearTorneo");
            Swal.fire("Se creó el torneo", "", "success");
        }
    };
        return (
            <div
                onClick={handleCrearTorneo}
                className="animate__animated animate__fadeIn d-flex flex-column justify-content-center botonCrearMesa m-2 p-3 py-2">
                <i className="fa-solid fa-circle-plus fs-1 text-white"></i>
                <h4 className="text-white mt-2 text-center">Crear Torneo</h4>
            </div>
        );
    };