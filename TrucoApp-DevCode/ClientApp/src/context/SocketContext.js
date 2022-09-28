import { useEffect } from "react";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { useState } from "react";
import { useCallback } from "react";
import { tirarCarta } from "../actions/juego";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { uid } = useSelector((state) => state.auth);
  const [connection, setConnection] = useState();
  const dispatch = useDispatch();

  const conectarSockets = useCallback(async () => {
    const connection = new HubConnectionBuilder()
      .withUrl("https://localhost:44342/mesashub")
      .configureLogging(LogLevel.Information)
      .build();

    // connection.on("MesaCreada", (message) => {
    //   console.log(message);
    // });

    connection.on("CartaTirada", (juego) => {
      console.log(juego);

      // const {
      //   cartasJugadorUno,
      //   cartasJugadorDos,
      //   cartasJugadasJugadorUno,
      //   cartasJugadasJugadorDos,
      //   jugadorUno,
      //   jugadorDos,
      //   turno,
      // } = juego;
      // const partida = {
      //   cartasJugadorUno,
      //   cartasJugadorDos,
      //   cartasJugadasJugadorUno,
      //   cartasJugadasJugadorDos,
      //   turno,
      // };

      // if (jugadorUno === uid) {
      //   dispatch(
      //     tirarCarta({
      //       ...partida,
      //       cartas: cartasJugadorUno,
      //     })
      //   );
      // } else if (jugadorDos === uid) {
      //   dispatch(
      //     tirarCarta({
      //       ...partida,
      //       cartas: cartasJugadorDos,
      //     })
      //   );
      // }
    });

    await connection.start();
    setConnection(connection);
  }, []);

  const desconectarSockets = useCallback(async () => {
    await connection?.stop();
  }, [connection]);

  useEffect(() => {
    if (!!uid) {
      conectarSockets();
    }
  }, [uid, conectarSockets]);

  useEffect(() => {
    if (!uid) {
      desconectarSockets();
    }
  }, [uid, desconectarSockets]);

  return (
    <SocketContext.Provider value={{ connection }}>
      {children}
    </SocketContext.Provider>
  );
};
