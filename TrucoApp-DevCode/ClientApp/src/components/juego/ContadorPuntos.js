import React from "react";

export const ContadorPuntos = () => {
  return (
    <div className="counterDiv animateanimate__animated animate__fadeInDownBig d-flex flex-column text-white bg-dark border border-end-0 border-3 p-3">
      <div className="d-flex flex-column">
        <p className="fw-bold p-0 m-0 align-self-center">Vos</p>
        <p className="p-0 m-0 align-self-center">0</p>
      </div>
      <hr style={{ color: "white", height: 2 }} className="w-100" />

      <div className="d-flex flex-column">
        <p className="fw-bold p-0 m-0 align-self-center">Yo</p>
        <p className="p-0 m-0 align-self-center">0</p>
      </div>
    </div>
  );
};
