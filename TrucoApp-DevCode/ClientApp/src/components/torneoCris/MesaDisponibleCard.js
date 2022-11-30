import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../../context/SocketContext";
import { entrarAMesa } from "../../helpers/fetchConnection";

//CRIS

export const MesaDisponibleCard = ({ mesa }) => {

    const { idMesa, jugadorUno, jugadorDos, cantidadJugadores } = mesa;

    const { connection } = useContext(SocketContext);
    const [nombreJugadorUno, setNombreJugadorUno] = useState(null);
    const [nombreJugadorDos, setNombreJugadorDos] = useState(null);

    const [idJugadorUno, setIdJugadorUno] = useState(null);
    const [idJugadorDos, setIdJugadorDos] = useState(null);

    const [mesaHabilitada, setMesaHabilitada] = useState(false);
    

    const { uid } = useSelector((state) => state.auth);


    const jugar = async () => {
        entrarAMesa(uid, idMesa, connection, jugadorUno, cantidadJugadores);
    };
    /*
    useEffect(() => {
        localStorage.setItem("jugando", "NO");

        setInterval(() => {
            if (localStorage.getItem("jugando") == "NO") {
                consultarMesaIniciada(idMesa);
                console.log("entra")
            }
        }, 500)
    });
    */
    const consultarMesaIniciada = async (idMesa) => {
        const respuesta = await fetch(`https://localhost:44342/api/Torneo/consultarMesaIniciada/${idMesa}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })

        if (respuesta.ok) {
            const confirmacion = await respuesta.json();
            if (confirmacion) {
                jugar();               
            }
        }

    }

    useEffect(() => {
        if (nombreJugadorUno != null && nombreJugadorDos != null) {
            setMesaHabilitada(true);
        }
    })

    useEffect(() => {
        setInterval(() => {
            obtenerParticipantesDeLaMesa(idMesa);
        }, 1000)
    }, []);

    const obtenerParticipantesDeLaMesa = async (idMesa) => {
        const respuesta = await fetch(`https://localhost:44342/api/Torneo/obtenerParticipantes/${idMesa}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })

        if (respuesta.ok) {
            const users = await respuesta.json();

            if (users[0] != null) {
                setNombreJugadorUno(users[0].nombreCompleto);
                setIdJugadorUno(users[0].idUsuario)
            }
            if (users[1] != null) {
                setNombreJugadorDos(users[1].nombreCompleto);
                setIdJugadorDos(users[1].idUsuario)

            }
        }
    }


    return (
        <div className="mesaCarta animate__animated animate__fadeIn m-2 p-3 py-2 d-flex flex-column">
            <div className="d-flex w-100 justify-content-end">
                {nombreJugadorUno} <br></br> {nombreJugadorDos}
                {mesaHabilitada == true ? <button onClick={() => jugar()}>Ingresar</button> : ''}

            </div>

            <div className="d-flex flex-column justify-content-center align-items-center">


            </div>

            <div className="d-flex flex-column justify-content-center align-items-center my-1">

            </div>


        </div>
    );
};
