import React from "react";
import { useHistory } from "react-router";
import img from "../../assets/no-foto.jpg";

export const TorneoDisponibleCard = () => {
  const history = useHistory();

  const handleIngresar = () => {
    history.push("/inicio/tabla");
  };

  return (
    <div className="mesaCarta animate__animated animate__fadeIn m-2 p-3 py-2 d-flex flex-column">
      <div className="d-flex flex-column justify-content-center align-items-center mt-2">
        <img
          referrerPolicy="no-referrer"
          className="d-flex rounded-circle"
          style={{ width: "2.5em", height: "2.5em", objectFit: "cover" }}
          alt=""
          src={img}
        />
        <div
          className="text-center mt-1"
          style={{ color: "#ffffff", fontSize: "0.68em" }}
        >
          Organizador: Cristian
        </div>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center my-1">
        <p style={{ fontSize: "0.8em" }} className="text-white my-0 fw-bolder">
         Torneo A 500 puntos
        </p>
        <p style={{ fontSize: "0.8em" }} className="text-white my-0 fw-bolder">
          Sin flor
        </p>
      </div>

      <p
        onClick={handleIngresar}
        className="buttonPlay fw-bolder cursor w-100 text-center rounded"
      >
        Jugar
      </p>
    </div>
  );
};
