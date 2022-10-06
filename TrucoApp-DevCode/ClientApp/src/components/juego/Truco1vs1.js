import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { salirDeMesa } from "../../actions/juego";
import { ContadorPuntos } from "./ContadorPuntos";
import { Mesa } from "./Mesa";
import "./truco.css";

export const Truco1vs1 = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const dejarMesa = (e) => {
    e.preventDefault();
    dispatch(salirDeMesa());
    history.push("/inicio");
  };

  return (
    <div className="divContainer d-flex justify-content-center align-items-center bg-dark position-relative">
      <ContadorPuntos />
      <Mesa />
      <i
        onClick={dejarMesa}
        className="bi bi-box-arrow-right buttonLeaveTable btn btn-outline-danger m-3 fw-bold"
      ></i>
    </div>
  );
};
