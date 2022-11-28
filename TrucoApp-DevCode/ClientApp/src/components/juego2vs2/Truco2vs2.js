import React from "react";
import "../juego/truco.css";
import { ContadorPuntos2vs2 } from "./ContadorPuntos2vs2";
import { Mesa2vs2 } from "./Mesa2vs2";

export const Truco2vs2 = () => {
  return (
    <div className="divContainer d-flex justify-content-center align-items-center bg-dark position-relative">
      <ContadorPuntos2vs2 />
      <Mesa2vs2 />
      <i className="bi bi-box-arrow-right buttonLeaveTable btn btn-outline-danger m-3 fw-bold"></i>
    </div>
  );
};
