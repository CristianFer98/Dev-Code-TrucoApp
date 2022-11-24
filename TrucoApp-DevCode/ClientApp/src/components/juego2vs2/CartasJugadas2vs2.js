import React from "react";
import { useSelector } from "react-redux";
import {
  getCartasJugadas,
  getUserPlayer2vs2,
} from "../../helpers/truco/getUserTurno";
import { CartaMesa2vs2 } from "./CartaMesa2vs2";

export const CartasJugadas2vs2 = () => {
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { jugadorUno, jugadorDos, jugadorTres, jugadorCuatro } = partida;
  const jugador = getUserPlayer2vs2(
    uid,
    jugadorUno,
    jugadorDos,
    jugadorTres,
    jugadorCuatro
  );

  return (
    <>
      <>
        <div className="d-flex align-items-center">
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
        <div className="d-flex flex-column justify-content-between">
          <>
            <div className="d-flex flex-row-reverse">
              {getCartasJugadas("izquierda", jugador, partida).map(
                (carta, i) => {
                  return (
                    <div
                      key={i}
                      className="h-25 animate__animated animate__fadeInTop"
                      style={{
                        marginRight: `${i == 1 || i == 2 ? "-3.4rem" : "0px"}`,
                      }}
                    >
                      <CartaMesa2vs2 key={carta.id} carta={carta} />
                    </div>
                  );
                }
              )}
            </div>
          </>
          <>
            <div className="d-flex flex-row">
              {getCartasJugadas("abajo", jugador, partida).map((carta, i) => {
                return (
                  <div
                    key={i}
                    className="h-25 animate__animated animate__fadeInTop"
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
        <div className="d-flex flex-row-reverse align-items-center">
          {getCartasJugadas("derecha", jugador, partida).map((carta, i) => {
            return (
              <div
                key={i}
                className="h-25 animate__animated animate__fadeInLeft"
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
