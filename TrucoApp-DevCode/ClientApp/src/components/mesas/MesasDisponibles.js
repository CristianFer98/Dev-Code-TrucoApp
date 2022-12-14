import React from "react";
import { useHistory } from "react-router";
import { BotonCrearMesa } from ".//BotonCrearMesa";
import { MesaDisponibleCard } from "./MesaDisponibleCard";
import "./mesasDisponibles.css";
import { ChatGeneral } from "../inicio/chat/ChatGeneral";
import InfoDeUsuario from "../inicio/infoUsuario/InfoDeUsuario";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

export const MesasDisponibles = () => {
    const history = useHistory();
    const { uid } = useSelector((state) => state.auth);
    const { mesas1vs1 } = useSelector((state) => state.mesas);

    const handleVolverInicio = async (e) => {
        e.preventDefault();
        history.push("/inicio");
    };

    return (
        <div style={{ display: "flex", width: "100%" }}>
            <div style={{ display: "flex", width: "80%", flexDirection: "column" }}>
                <InfoDeUsuario />
                <h2 className="text-light px-5 pt-5">Mesas disponibles</h2>
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
                        {!mesas1vs1.find((mesa) => mesa.jugadorUno === uid) && (
                            <BotonCrearMesa cantidadJugadoresMesa={2} />
                        )}
                        {mesas1vs1.filter((mesa) => mesa.tipo === "Publica").map((mesa) => (
                            <MesaDisponibleCard key={mesa.idMesa} mesa={mesa} />
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
