import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { MesaTorneoCard } from "../mesas/MesaTorneoCard";
import { ChatGeneral } from "../inicio/chat/ChatGeneral";
import InfoDeUsuario from "../inicio/infoUsuario/InfoDeUsuario";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
//import { obtenerTorneoPartida } from "../../actions/torneos";
import { Redirect, useParams } from "react-router";
import { obtenerTorneoPartida } from "../../helpers/fetchConnection";

export const SalaTorneo = () => {
    const history = useHistory();
    const { uid } = useSelector((state) => state.auth);
    const { torneoId } = useParams();
    const dispatch = useDispatch();
    const [torneoPartida, setTorneoPartida] = useState([]);

    useEffect(() => {
        obtenerMesasDelTorneo();
    }, []);

    const obtenerMesasDelTorneo = async () => {
        const respuesta = await fetch(`https://localhost:44342/api/Torneo/ObtenerTodosLosTorneosPartida/${torneoId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })

        if (respuesta.ok) {
            const mesas = await respuesta.json();
            mesas.CantidadJugadores = 2
            setTorneoPartida(mesas);
        }
    }

    const handleVolverInicio = async (e) => {
        e.preventDefault();
        history.push("/inicio");
    };


    return (
        <div style={{ display: "flex", width: "100%" }}>
            <div style={{ display: "flex", width: "80%", flexDirection: "column" }}>
                <InfoDeUsuario />
                <div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "20px",
                        }}
                    >
                        <Button
                            variant="dark"
                            onClick={handleVolverInicio}
                            style={{ marginLeft: "50px" }}
                        >
                            Regresar al Inicio
                        </Button>{" "}
                    </div>
                    <div
                        className="d-flex flex-wrap mt-4"
                        style={{
                            marginLeft: "40px",
                            marginRight: "40px",
                            marginTop: "0px",
                        }}
                    >
                        {torneoPartida.map((mesa) => (
                            <MesaTorneoCard key={mesa.idMesa} mesa={mesa} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="chat">
                <ChatGeneral />
            </div>
        </div>
    );
};
