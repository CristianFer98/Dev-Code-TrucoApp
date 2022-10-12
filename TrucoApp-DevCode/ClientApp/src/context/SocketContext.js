import { useEffect } from "react";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { useState } from "react";
import { useCallback } from "react";
import { obtenerMesas } from "../actions/mesas";
import { jugar } from "../actions/auth";
import { cantarEnvido, repartirCartas, tirarCarta } from "../actions/juego";
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
        await connection.invoke("InicializarMano", partida);
      }
    });
  }, [connection, uid]);

  useEffect(() => {
    connection?.on("EmpezarJuego", (juego) => {
      const {
        cartasJugadasJugadorUno,
        cartasJugadasJugadorDos,
        envido,
        ...partida
      } = juego;

      partida.puntosJugadorUno === 0 &&
        partida.puntosJugadorDos === 0 &&
        dispatch(jugar());

      dispatch(
        repartirCartas({
          ...partida,
          cartasJugadasJugadorUno: [],
          cartasJugadasJugadorDos: [],
          envido: {
            ...envido,
            envidosCantados: [],
          },
        })
      );
    });
  }, [connection, dispatch, uid]);

  useEffect(() => {
    connection?.on("CartaTirada", (juego) => {
      const { cartasJugadasJugadorUno, cartasJugadasJugadorDos, ...partida } =
        juego;
      dispatch(
        tirarCarta({
          ...partida,
          cartasJugadasJugadorUno: !!cartasJugadasJugadorUno
            ? cartasJugadasJugadorUno
            : [],
          cartasJugadasJugadorDos: !!cartasJugadasJugadorDos
            ? cartasJugadasJugadorDos
            : [],
        })
      );
    });
  }, [connection, dispatch, uid]);

  useEffect(() => {
    connection?.on("EnvidoCantado", (juego) => {
      dispatch(cantarEnvido(juego));
    });
  }, [connection, dispatch]);

  useEffect(() => {
    connection?.on("TantosCantados", (juego) => {
      dispatch(cantarEnvido(juego));
    });
  }, [connection, dispatch]);

  return (
    <SocketContext.Provider value={{ connection }}>
      {children}
    </SocketContext.Provider>
  );
};
