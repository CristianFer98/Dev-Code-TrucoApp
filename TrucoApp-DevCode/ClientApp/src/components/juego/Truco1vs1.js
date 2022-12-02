import React from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { salirDeMesa } from "../../actions/juego";
import { SocketContext } from "../../context/SocketContext";
import { ContadorPuntos } from "./ContadorPuntos";
import { Mesa } from "./Mesa";
import "./truco.css";

export const Truco1vs1 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { connection } = useContext(SocketContext);
  const { partida } = useSelector((state) => state.juego);
  const { ganadorPartida } = partida;
  const { room } = partida;

  const dejarMesa = async (e) => {
    e.preventDefault();
      if (!ganadorPartida) await connection.invoke("DejarMesa", room);

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
