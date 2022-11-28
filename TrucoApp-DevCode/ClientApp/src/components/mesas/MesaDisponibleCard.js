import React, { useContext } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import img from "../../assets/no-foto.jpg";
import { SocketContext } from "../../context/SocketContext";
import { entrarAMesa } from "../../helpers/fetchConnection";
import { ModalLink } from "./ModalLink";

export const MesaDisponibleCard = ({ mesa }) => {
  const { uid, invitado, mesaInvitado } = useSelector((state) => state.auth);
  const { Usuarios } = require("../../usuarios.json");
  const { idMesa, jugadorUno, tipo, cantidadJugadores } = mesa;
  const { connection } = useContext(SocketContext);

  useEffect(() => {
    invitado &&
      !!mesaInvitado &&
      mesaInvitado === idMesa &&
      entrarAMesa(uid, idMesa, connection, jugadorUno, cantidadJugadores);
  }, [invitado, mesaInvitado]);

  const handleJugar = async (e) => {
    e.preventDefault();
    entrarAMesa(uid, idMesa, connection, jugadorUno, cantidadJugadores);
  };

  return (
    <div className="mesaCarta animate__animated animate__fadeIn m-2 p-3 py-2 d-flex flex-column">
      <div className="d-flex w-100 justify-content-end">
        {jugadorUno === uid ? (
          <div className="dropdown">
            <i
              className="bi bi-three-dots text-light align-self-center"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></i>

            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <button className="dropdown-item">Eliminar</button>
              </li>
              <li>
                {/* Modal link */}
                <ModalLink idMesa={idMesa} />
                {/* Modal link */}
              </li>
            </ul>
          </div>
        ) : (
          <div className="mt-1"></div>
        )}
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center">
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
          {" "}
          {jugadorUno}
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
