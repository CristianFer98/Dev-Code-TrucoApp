import React, { useContext, useState, useEffect } from "react";
import { useSelector } from 'react-redux'



export const MesaDisponibleCard = ({ mesa }) => {

     
    const [nombreJugadorUno, setNombreJugadorUno] = useState('');
    const [nombreJugadorDos, setNombreJugadorDos] = useState('');

    //obtener las mesas cada un cierto tiempo para ver los que se setearon.
    useEffect(() => {
        const { idMesa } = mesa;

        setInterval(() => {
            obtenerJugadores(idMesa)
        }, 1500)


    })

    const obtenerJugadores = async (idMesa) => {

        const respuesta = await fetch(`https://localhost:44342/api/Torneo/obtenerJugadores/${idMesa}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },

        });

        if (respuesta.ok) {

            var jugadores = await respuesta.json();//recibe un jugadoresEnMesa

         
            setNombreJugadorUno(jugadores.nombreJugadorUno)
            setNombreJugadorDos(jugadores.nombreJugadorDos)
            
        }
    }

  




    return (
        <div className="mesaCarta animate__animated animate__fadeIn m-2 p-3 py-2 d-flex flex-column">
            <div className="d-flex w-100 justify-content-end">
                {nombreJugadorUno} - {nombreJugadorDos}
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center">


            </div>

            <div className="d-flex flex-column justify-content-center align-items-center my-1">

            </div>


        </div>
    );
};

