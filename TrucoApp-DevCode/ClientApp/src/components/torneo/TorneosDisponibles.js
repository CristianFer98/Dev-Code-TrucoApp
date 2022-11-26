import React from "react";
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
    const { torneoPartida } = useSelector((state) => state.torneos);
    console.log("Torneo Partida: " + torneoPartida)

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
                       
                        <BotonCrearTorneo />

                        {torneoPartida.map((torneo) => (
                            <TorneoDisponibleCard key={torneo.idTorneo} torneo={torneo} />
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
