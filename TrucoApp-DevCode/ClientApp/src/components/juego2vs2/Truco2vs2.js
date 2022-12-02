import React from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { salirDeMesa } from "../../actions/juego";
import { SocketContext } from "../../context/SocketContext";
import { ContadorPuntos2vs2 } from "./ContadorPuntos2vs2";
import { Mesa2vs2 } from "./Mesa2vs2";
import "../juego/truco.css";

export const Truco2vs2 = () => {
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
      <ContadorPuntos2vs2 />
      <Mesa2vs2 />
      <i
        onClick={dejarMesa}
        className="bi bi-box-arrow-right buttonLeaveTable btn btn-outline-danger m-3 fw-bold"
      ></i>
    </div>
  );
};
