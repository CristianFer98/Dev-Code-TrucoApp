import React, { useEffect, useState } from "react";
import "./tabla.css";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { MesaDisponibleCard } from "./MesaDisponibleCard";

const TablaDeTorneo = ({ match }) => {
    //tengo que recibir el id del torneo que creo para traerme sus mesas.

    const history = useHistory();
    const idtorneo = match.params.idtorneo;
    const [mesaSemiUno, setMesaSemiUno] = useState([]);
    const [mesaSemiDos, setMesaSemiDos] = useState([]);
    const [mesaFinal, setMesaFinal] = useState([]);


    //tengo que obtener las mesas de ese torneo (el ID del torneo ya lo tengo en la URL)
    const handleVolverInicio = (e) => {
        e.preventDefault();
        history.push("/inicio");
    };



    useEffect(() => {
        setInterval(() => {
            obtenerMesasDelTorneo();
        },1000)
    }, []);

    const obtenerMesasDelTorneo = async () => {
        const respuesta = await fetch(`https://localhost:44342/api/Torneo/obtenerMesasDelTorneo/${idtorneo}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })

        if (respuesta.ok) {
            const mesas = await respuesta.json();
            if (mesas[0] != null) {
                setMesaSemiUno(mesas[0]);
            }

            if (mesas[1] != null) {
                setMesaSemiDos(mesas[1]);
            }

            if (mesas[2] != null) {
                setMesaFinal(mesas[2]);
            }
           
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

                <MesaDisponibleCard mesa={mesaSemiUno} />
                {mesaFinal.length != 0 ? <MesaDisponibleCard mesa={mesaFinal} /> : ''}
                {mesaSemiDos.length != 0 ? <MesaDisponibleCard mesa={mesaSemiDos} /> : ''}
            </div>
        </>
    );
};

export default TablaDeTorneo;
