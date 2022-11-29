import React from "react";
import { useHistory } from "react-router";
import { MesaDisponibleCard } from "../mesas/MesaDisponibleCard";
import { ChatGeneral } from "../inicio/chat/ChatGeneral";
import InfoDeUsuario from "../inicio/infoUsuario/InfoDeUsuario";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

export const SalaTorneo = ({ torneo }) => {
    const history = useHistory();
    const { uid } = useSelector((state) => state.auth);
    const { mesasTorneo } = useSelector((state) => state.mesas);
    const { torneoPartida } = torneo.
    console.log("Torneo Partida: " + mesasTorneo)

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
                        {mesasTorneo.map((mesa) => (
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
