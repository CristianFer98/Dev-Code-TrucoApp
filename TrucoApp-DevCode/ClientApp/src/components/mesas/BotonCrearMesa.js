import React from "react";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { SocketContext } from "../../context/SocketContext";
import Swal from "sweetalert2";

export const BotonCrearMesa = () => {
  const { uid } = useSelector((state) => state.auth);
  const { connection } = useContext(SocketContext);

  const handleCrearMesa = async (e) => {
    e.preventDefault();

      const resp = await fetch("https://virtserver.swaggerhub.com/LucasBenitez/DevCode/1.0.0/Guardar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        CantidadJugadores: 2,
        JugadorUno: uid,
        Tipo: "Publica",
        Estado: "Disponible",
        FechaCreacion: new Date(),
      }),
    });
    if (resp.ok) {
        await connection.invoke("CrearMesa")
      Swal.fire("Se creó la mesa", "", "success");
    }
  };

  return (
    <div
      onClick={handleCrearMesa}
      className="animate__animated animate__fadeIn d-flex flex-column justify-content-center botonCrearMesa m-2 p-3 py-2"
    >
      <i className="fa-solid fa-circle-plus fs-1 text-white"></i>
      <h5 className="text-white mt-2">Crear Mesa</h5>
    </div>
  );
};
