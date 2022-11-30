import React, { useEffect, useState } from "react";
import "./tabla.css";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { MesaDisponibleCard } from "./MesaDisponibleCard";

const TablaDeTorneo = ({ match }) => {
    //tengo que recibir el id del torneo que creo para traerme sus mesas.

    const history = useHistory();
    var idtorneo = match.params.idtorneo;


    //tengo que obtener las mesas de ese torneo (el ID del torneo ya lo tengo en la URL)
    const handleVolverInicio = (e) => {
        e.preventDefault();
        history.push("/inicio");
    };

    const [mesas, setMesas] = useState([]);


    useEffect(() => {
        obtenerMesasDelTorneo();
    },[]);

    const obtenerMesasDelTorneo = async () => {
        const respuesta = await fetch(`https://localhost:44342/api/Torneo/obtenerMesasDelTorneo/${idtorneo}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })

        if (respuesta.ok) {
            const mesas = await respuesta.json();
            setMesas(mesas);
        }
    }

  


    return (

        <>
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
                    style={{ marginLeft: "20px" }}
                    path="/inicio"
                >
                    Abandonar torneo
                </Button>{" "}

            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px",
                    color: "white",
                }}
            >

                {mesas.map((mesa) => (
                    <MesaDisponibleCard key={mesa.idMesa} mesa={mesa} />
                ))}
            </div>
        </>
    );
};

export default TablaDeTorneo;
