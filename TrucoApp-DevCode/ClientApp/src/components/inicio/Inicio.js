import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { jugar } from "../../actions/auth";
import { ChatGeneral } from "./ChatGeneral";
import InfoDeUsuario from "./InfoDeUsuario";
import "./inicio.css";
import unovsuno from "../../assets/1vs1.png";
import dosvsdos from "../../assets/2vs2.png";
import tresvstres from "../../assets/3vs3.png";
import unovsmaquina from "../../assets/1vsmaquina.png";
import torneo from "../../assets/copa.jpg";

export const Inicio = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleJugar = (e) => {
    e.preventDefault();
    dispatch(jugar());
    history.push("/inicio/mesas");
  };

  return (
    <div
      className=""
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "auto",
          width: "100%",
        }}
      >
        <InfoDeUsuario />

        <div className="menuPrincipal">
          <button
            onClick={handleJugar}
            className="boton"
            style={{
              backgroundImage: `url(${unovsuno})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "80%",
              backgroundPosition: "15px",
            }}
          ></button>

          <button
            onClick={handleJugar}
            className="boton"
            style={{
              backgroundImage: `url(${dosvsdos})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "92%",
              backgroundPosition: "5px",
            }}
          ></button>

          <button
            onClick={handleJugar}
            className="boton"
            style={{
              backgroundImage: `url(${tresvstres})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "70%",
              backgroundPosition: "25px",
            }}
          ></button>

          <button
            onClick={handleJugar}
            className="boton"
            style={{
              backgroundImage: `url(${unovsmaquina})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "70%",
              backgroundPosition: "25px",
            }}
          >
            <span style={{ paddingBottom: "25px" }}>Uno VS Maquina</span>
          </button>

          <button
            onClick={handleJugar}
            className="boton"
            style={{
              backgroundImage: `url(${torneo})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "70%",
              backgroundPosition: "25px",
            }}
          >
            <span style={{ paddingBottom: "15px" }}>Torneo </span>
          </button>
        </div>
      </div>

      <ChatGeneral />
    </div>
  );
};
