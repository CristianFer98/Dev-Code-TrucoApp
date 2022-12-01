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

        //Lo que voy a hacer es crear una mesa cuando se crea el torneo, y asignar al jugador que la creo a la primera mesa como jugador uno.
        //Luego a la siguiente persona que entre a la mesa. Va a crear la segunda mesa y se le va a asignar el jugador uno a esa segunda mesa
        //Para la tercera persona que ingresa, los jugadorUno ya van a estar ocupado. Va a entrar a la primera mesa con el jugador uno que se encuentre
        //en ella. 

        //CREO EL TORNEO Y LE ASIGNO A LA PRIMERA MESA EL JUGADOR UNO QUIEN LO CREO
        const resp = await fetch("https://localhost:44342/api/Torneo/CrearTorneo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Usuario: uid,
                Nombre: "Torneo",
            }),
        });

        if (resp.ok) {
            //RECIBO EL TORNEO CON ESA UNICA MESA QUE SE CREO Y USO EL METODO CONNECTION.INVOKE("CREAR MESA" USER, ID).
            var torneo = await resp.json(); //recibo el torneo y quiero (el ID y el ID de la mesa con el ID del jugador uno)
            const { idTorneo, idMesaSemiUnoNavigation } = torneo;
            const { idMesa, jugadorUno } = idMesaSemiUnoNavigation;

            await connection.invoke("CrearMesa", jugadorUno, idMesa);//la clave esta aca, tengo que crear el connection.invoque de las dos mesas creadas. 
            history.push(`/inicio/tabla/${idTorneo}`);

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