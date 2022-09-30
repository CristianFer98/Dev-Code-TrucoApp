import { useEffect } from "react";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { useState } from "react";
import { useCallback } from "react";
import { obtenerMesas } from "../actions/mesas";
import { jugar } from "../actions/auth";
import { repartirCartas } from "../actions/juego";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { uid } = useSelector((state) => state.auth);
  const [connection, setConnection] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!!uid) {
      dispatch(obtenerMesas());
    }
  }, [uid, dispatch]);

  const conectarSockets = useCallback(async () => {
    const connection = new HubConnectionBuilder()
      .withUrl("https://localhost:44342/mesashub")
      .configureLogging(LogLevel.Information)
      .build();

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

  useEffect(() => {
    connection?.on("MesasActualizadas", () => {
      dispatch(obtenerMesas());
    });
  }, [connection, dispatch]);

  useEffect(() => {
    connection?.on("MesaOcupada", async (partida) => {
      const { jugadorUno, jugadorDos, room } = partida;

      if (jugadorUno === uid) {
        await connection.invoke("JoinRoom", room);
      } else if (jugadorDos === uid) {
        await connection.invoke("JoinRoom", room);
        await connection.invoke("SortearTurno", partida);
      }
    });
  }, [connection, uid]);

  useEffect(() => {
    connection?.on("EmpezarJuego", (juego) => {
      const { cartasJugadorUno, cartasJugadorDos, ...partida } = juego;
      dispatch(jugar());
      if (partida.jugadorUno === uid) {
        dispatch(
          repartirCartas({
            ...partida,
            cartas: cartasJugadorUno,
          })
        );
      } else if (partida.jugadorDos === uid) {
        dispatch(
          repartirCartas({
            ...partida,
            cartas: cartasJugadorDos,
          })
        );
      }
    });
  }, [connection, dispatch, uid]);

  return (
    <SocketContext.Provider value={{ connection }}>
      {children}
    </SocketContext.Provider>
  );
};
