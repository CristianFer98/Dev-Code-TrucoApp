import React, { useContext } from "react";
import { useSelector } from "react-redux";
import img from "../../assets/no-foto.jpg";
import { SocketContext } from "../../context/SocketContext";
import { entrarATorneo } from "../../helpers/fetchConnection";
import { useHistory } from "react-router";
import { obtenerTorneoPartida } from "../../helpers/fetchConnection";

export const TorneoDisponibleCard = ({ torneo }) => {
    const { uid, foto } = useSelector((state) => state.auth);
    const { torneoId } = torneo;
    const { connection } = useContext(SocketContext);
    const history = useHistory();
    
    const handleIngresar = async (e) => {
      e.preventDefault();
        entrarATorneo(uid, torneoId, connection);
    };

    const handleJugar = async (e) => {
        history.push(`/inicio/salaTorneo/${torneoId}`);
    };

  return (
    <div className="mesaCarta animate__animated animate__fadeIn m-2 p-3 py-2 d-flex flex-column">
      <div className="d-flex flex-column justify-content-center align-items-center mt-2">
        <img
          referrerPolicy="no-referrer"
          className="d-flex rounded-circle"
          style={{ width: "2.5em", height: "2.5em", objectFit: "cover"}}
          alt=""
          src={foto!=null?foto:img}
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
          {torneo.estaLleno === true ? (
              <p
                  onClick={handleJugar}
                  className="buttonPlay fw-bolder cursor w-100 text-center rounded"
              >
                  jugar
              </p>
          ):
          (
                <p
                    onClick={handleIngresar}
                    className="buttonPlay fw-bolder cursor w-100 text-center rounded"
                >
                  anotarse
                </p>
          )}
    </div>
  );
};
