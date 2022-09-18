import React from "react";
import { useHistory } from "react-router";
import "./mesasDisponibles.css";

export const MesasDisponibles = () => {
  const history = useHistory();

  const handleVolverInicio = (e) => {
    e.preventDefault();
    history.push("/inicio");
  };

  return (
    <div className="w-100 p-3">
      <div>
        <button onClick={handleVolverInicio} className="btn btn-primary">
          Volver al inicio
        </button>

        <h3 className="mesasH3 text-light mt-4">Mesas disponibles 1 vs 1:</h3>
      </div>

      <div className="mt-5">
        <div className="animate__animated animate__fadeIn d-flex flex-column justify-content-center botonCrearMesa m-2 p-3 py-2">
          <i className="fa-solid fa-circle-plus fs-1 text-white"></i>
          <h4 className="text-white mt-2">Crear Mesa</h4>
        </div>
      </div>
    </div>
  );
};
