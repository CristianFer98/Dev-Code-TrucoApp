import React, { useContext } from "react";
import { useSelector } from "react-redux";
import img from "../../assets/no-foto.jpg";
import { SocketContext } from "../../context/SocketContext";

export const MesaDisponibleCard = ({ mesa }) => {
  const { uid } = useSelector((state) => state.auth);
  const { Usuarios } = require("../../usuarios.json");
  const { idMesa, jugadorUno, tipo } = mesa;
  const usuario = Usuarios.find((usuario) => usuario.uid === jugadorUno);
  const { connection } = useContext(SocketContext);

  const handleJugar = async (e) => {
    e.preventDefault();

    const idJugador = uid;
    const resp = await fetch(
      `https://localhost:44342/api/Mesas/EntrarAJugar/${idMesa}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: idJugador,
      }
    );

    if (resp.ok) {
      const room = idMesa;
      const jugadorDos = uid;
      await connection.invoke("OcuparMesa", { room, jugadorUno, jugadorDos });
    }
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
          {usuario.nombre}
        </div>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center my-1">
        <p style={{ fontSize: "0.8em" }} className="text-white my-0 fw-bolder">
          A 30 puntos
        </p>
        <p style={{ fontSize: "0.8em" }} className="text-white my-0 fw-bolder">
          {tipo}
        </p>
      </div>

      {mesa.jugadorUno !== uid && (
        <p
          onClick={handleJugar}
          className="buttonPlay fw-bolder cursor w-100 text-center rounded"
        >
          Jugar
        </p>
      )}
    </div>
  );
};
