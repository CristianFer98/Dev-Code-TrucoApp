import React from "react";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { SocketContext } from "../../context/SocketContext";
import { useHistory } from "react-router";


export const BotonCrearTorneo = () => { 

    const { connection } = useContext(SocketContext);
    const { uid } = useSelector((state) => state.auth);
    const history = useHistory();
    

    const handleCrearTorneo = async (e) => {
        e.preventDefault();

        //Lo que voy a hacer no es crear un torneo sino tres mesas. Las tres mesas van a estar vacias a medida que los usuarios se vayan agregando
        //El que crea el torneo entra en la primera mesa, el segundo que entra se enfrenta a el y asi con los otros dos. Tengo que crear un torneo en la base
        //ese torneo (un unico registro) tiene FK a tres mesas (TORNEO 1 A MESA 50, TORNEO 1 A MESA 51, TORNEO 1 A MESA 52) PARA QUE MESAS DISPONIBLES
        //NO ME TRAIGA ESAS MESAS TENGO QUE PONERLE UN ATRIBUTO (TORNEO TRUE) ESAS MESAS POR EL MOMENTO VACIAS VAN A APARECER EN MI TABLA.
        //A MEDIDA QUE SE CARGUEN LAS MESAS HASTA QUE NO ESTEN LOS CUATRO NO APARECERA EL BOTON JUGAR. LA TERCERA MESA PERMANECERA VACIA HASTA QUE NO
        //ESTEN LOS DOS DISPONIBLES.


        const resp = await fetch("https://localhost:44342/api/Torneo/CrearTorneo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Usuario: uid,
                Nombre: "Torneo",
                CantidadParticipantes: 4
            }),
        });
        //tengo que obtener el ID del torneo creado
        if (resp.ok) {
            var idtorneo = await resp.json();
            history.push(`/inicio/tabla/${idtorneo}`);

        } 
    };
        return (
            <div
                onClick={handleCrearTorneo}
                className="animate__animated animate__fadeIn d-flex flex-column justify-content-center botonCrearMesa m-2 p-3 py-2">
                <i className="fa-solid fa-circle-plus fs-1 text-white"></i>
                <h4 className="text-white mt-2 text-center">Crear Torneo</h4>
            </div>
        );
    };