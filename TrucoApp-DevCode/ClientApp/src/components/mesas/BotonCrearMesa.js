import React from "react";
import { useSelector } from "react-redux";

export const BotonCrearMesa = ({ obtenerMesasDisponibles }) => {
  const { uid } = useSelector((state) => state.auth);

  const handleCrearMesa = async (e) => {
    e.preventDefault();

    const resp = await fetch("https://localhost:44342/api/Mesas/Guardar", {
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
      console.log("Mesa creada");
      obtenerMesasDisponibles();
    }
  };

  return (
    <div
      onClick={handleCrearMesa}
      className="animate__animated animate__fadeIn d-flex flex-column justify-content-center botonCrearMesa m-2 p-3 py-2"
    >
      <i className="fa-solid fa-circle-plus fs-1 text-white"></i>
      <h4 className="text-white mt-2">Crear Mesa</h4>
    </div>
  );
};
