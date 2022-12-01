import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import { BotonCrearTorneo } from ".//BotonCrearTorneo";
import { ChatGeneral } from "../inicio/chat/ChatGeneral";
import InfoDeUsuario from "../inicio/infoUsuario/InfoDeUsuario";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { entrarAMesa } from "../../helpers/fetchConnection";
import { SocketContext } from "../../context/SocketContext";


export const TorneosDisponibles = () => {

    //ATRIBUTOS
    const history = useHistory();
    const { uid } = useSelector((state) => state.auth);
    const { connection } = useContext(SocketContext);
    const [torneos, setTorneos] = useState([]);


    //METODOS
    const handleVolverInicio = async (e) => {
        e.preventDefault();
        history.push("/inicio");
    };

    //OBTENER TORNEOS
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

    const jugar = async (idMesa, idJugadorUno) => {
        entrarAMesa(uid, idMesa, connection, idJugadorUno, 2);
    }


    //COMPRUEBO SI EL USUARIO VA A CREAR UNA MESA O SI VA A INGRESAR A UNA.
    const ingresarATorneo = async (idtorneo) => {
        localStorage.setItem("torneo", idtorneo);//esto lo capturo en mesa.

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
            var mesaInvoke = await respuesta.json();
            const { idJugadorUno, idMesa, invoke } = mesaInvoke;

            if (invoke == true) {
                await connection.invoke("CrearMesa", idJugadorUno, idMesa);//la clave esta aca, tengo que crear el connection.invoque de las dos mesas creadas. 

            } else {
                jugar(idMesa, idJugadorUno);
                console.log('A jugar')
            }
            history.push(`/inicio/tabla/${idtorneo}`);
            
        }
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
                                <p key={torneo.idTorneo} style={{ height: "100px", width: "100px", backgroundColor: "red", margin: "20px" }}
                                onClick={() => ingresarATorneo(torneo.idTorneo)}>Ingresar</p>
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
