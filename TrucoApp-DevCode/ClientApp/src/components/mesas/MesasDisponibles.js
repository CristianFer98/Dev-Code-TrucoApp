import React from "react";
import { useHistory } from "react-router";
import { BotonCrearMesa } from "./BotonCrearMesa";
import { MesaDisponibleCard } from "./MesaDisponibleCard";
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

      <div className="d-flex flex-wrap mt-5">
        <BotonCrearMesa />
        <MesaDisponibleCard />
      </div>
    </div>
  );
};
