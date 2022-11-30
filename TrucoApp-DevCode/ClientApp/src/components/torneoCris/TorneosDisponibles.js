import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { BotonCrearTorneo } from ".//BotonCrearTorneo";
import { TorneoDisponibleCard } from "./TorneoDisponibleCard";
import { ChatGeneral } from "../inicio/chat/ChatGeneral";
import InfoDeUsuario from "../inicio/infoUsuario/InfoDeUsuario";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

export const TorneosDisponibles = () => {
    const history = useHistory();
    const { uid } = useSelector((state) => state.auth);

    const handleVolverInicio = async (e) => {
        e.preventDefault();
        history.push("/inicio");
    };

    const [torneos, setTorneos] = useState([]);

    useEffect(() => {
        obtenerTorneos();
    }, []);

    const obtenerTorneos = async (idMesa) => {
        const respuesta = await fetch(`https://localhost:44342/api/Torneo/obtenerTorneos`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })

        if (respuesta.ok) {
            const torneos = await respuesta.json();
            setTorneos(torneos)
        }
    }

    const ingresarATorneo = async (idtorneo) => {

        const respuesta = await fetch("https://localhost:44342/api/Torneo/ingresarATorneo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                IdTorneo: idtorneo,
                IdUsuario: uid,
            }),
        });

        if (respuesta.ok) {
            var confirmacion = await respuesta.json();    
            
        }

        history.push(`/inicio/tabla/${idtorneo}`);

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
                       
                        <BotonCrearTorneo />

                        {torneos.map((torneo) => (
                            <div>
                            <p key={torneo.idTorneo} style={{ height: "100px", width: "100px", backgroundColor: "red", margin: "20px" }}>{torneo.idTorneo}</p>
                                <button type="button" class="btn btn-primary" onClick={() => ingresarATorneo(torneo.idTorneo)}>Primary</button>
                            </div>

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
