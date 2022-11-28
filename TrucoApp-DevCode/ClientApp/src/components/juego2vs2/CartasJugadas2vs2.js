import React from "react";
import { useSelector } from "react-redux";
import {
  getCartasJugadas,
  getUserPlayer,
} from "../../helpers/truco/getUserTurno";
import { CartaMesa2vs2 } from "./CartaMesa2vs2";

export const CartasJugadas2vs2 = () => {
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { jugadorUno, jugadorDos, jugadorTres, jugadorCuatro } = partida;
  const jugador = getUserPlayer(
    uid,
    jugadorUno,
    jugadorDos,
    jugadorTres,
    jugadorCuatro
  );

  return (
    <>
      <>
        <div className="d-flex align-items-center" style={{ width: "33%" }}>
          {getCartasJugadas("izquierda", jugador, partida).map((carta, i) => {
            return (
              <div
                key={i}
                className="h-25 animate__animated animate__fadeInLeft"
                style={{
                  marginLeft: `${i == 1 || i == 2 ? "-3.4rem" : "0px"}`,
                }}
              >
                <CartaMesa2vs2 key={carta.id} carta={carta} />
              </div>
            );
          })}
        </div>
      </>
      <>
        <div
          className="d-flex flex-column align-items-center justify-content-between"
          style={{ width: "33%" }}
        >
          <>
            <div className="d-flex flex-row-reverse">
              {getCartasJugadas("arriba", jugador, partida).map((carta, i) => {
                return (
                  <div
                    key={i}
                    className="h-25 animate__animated animate__fadeInDown"
                    style={{
                      marginRight: `${i == 1 || i == 2 ? "-3.4rem" : "0px"}`,
                    }}
                  >
                    <CartaMesa2vs2 key={carta.id} carta={carta} />
                  </div>
                );
              })}
            </div>
          </>
          <>
            <div className="d-flex flex-row">
              {getCartasJugadas("abajo", jugador, partida).map((carta, i) => {
                return (
                  <div
                    key={i}
                    className="h-25 animate__animated animate__fadeInUp"
                    style={{
                      marginLeft: `${i == 1 || i == 2 ? "-3.4rem" : "0px"}`,
                      bottom: "20px",
                    }}
                  >
                    <CartaMesa2vs2 key={carta.id} carta={carta} />
                  </div>
                );
              })}
            </div>
          </>
        </div>
      </>
      <>
        <div
          className="d-flex flex-row-reverse align-items-center"
          style={{ width: "33%" }}
        >
          {getCartasJugadas("derecha", jugador, partida).map((carta, i) => {
            return (
              <div
                key={i}
                className="h-25 animate__animated animate__fadeInRight"
                style={{
                  marginRight: `${i == 1 || i == 2 ? "-3.4rem" : "0px"}`,
                }}
              >
                <CartaMesa2vs2 key={carta.id} carta={carta} />
              </div>
            );
          })}
        </div>
      </>
    </>
  );
};
