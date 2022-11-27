import { useEffect } from "react";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { useState } from "react";
import { useCallback } from "react";
import { obtenerMesas } from "../actions/mesas";
import { jugar } from "../actions/auth";
import { obtenerTorneos } from "../actions/torneos";
import {
    cantarEnvido,
    cantarTruco,
    repartirCartas,
    tirarCarta,
    usuariosConectados,
} from "../actions/juego";
import {
    checkChantSet,
    setCargandoFalse,
    setCargandoTrue,
} from "../actions/ui";
import { getUserPlayer } from "../helpers/truco/getUserTurno";
export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
    const { uid } = useSelector((state) => state.auth);
    const [connection, setConnection] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!!uid) {
            dispatch(obtenerMesas());
            dispatch(obtenerTorneos());
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
        connection?.on("MesaOcupada", async () => {
            dispatch(setCargandoTrue());
            setTimeout(() => {
                dispatch(jugar());
                dispatch(setCargandoFalse());
            }, 800);
        });
    }, [connection, dispatch]);

    useEffect(() => {
        connection?.on("UsersInRoom", (usuarios) => {
            dispatch(usuariosConectados(usuarios));
        });
    }, [connection, dispatch]);

    useEffect(() => {
        connection?.on("EmpezarJuego", (juego) => {
            const {
                cartasJugadasJugadorUno,
                cartasJugadasJugadorDos,
                envido,
                truco,
                ...partida
            } = juego;

            dispatch(
                repartirCartas({
                    ...partida,
                    horarioDeUltimoMovimiento: new Date(),
                    cartasJugadasJugadorUno: [],
                    cartasJugadasJugadorDos: [],
                    envido: {
                        ...envido,
                        envidosCantados: [],
                    },
                    truco: {
                        ...truco,
                        trucosCantados: [],
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
                    horarioDeUltimoMovimiento: new Date(),
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
            const { envido, jugadorUno, jugadorDos } = juego;
            const { jugadorQueCantoEnvido, envidosCantados } = envido;
            dispatch(
                cantarEnvido({ ...juego, horarioDeUltimoMovimiento: new Date() })
            );
            dispatch(
                checkChantSet(
                    jugadorQueCantoEnvido,
                    envidosCantados[envidosCantados.length - 1],
                    getUserPlayer(uid, jugadorUno, jugadorDos)
                )
            );
        });
    }, [connection, dispatch]);

    useEffect(() => {
        connection?.on("TantosCantados", (juego) => {
            const { envido, jugadorUno, jugadorDos } = juego;
            const { jugadorQueCantoEnvido, cantoTanto } = envido;
            dispatch(
                cantarEnvido({ ...juego, horarioDeUltimoMovimiento: new Date() })
            );
            dispatch(
                checkChantSet(
                    jugadorQueCantoEnvido,
                    cantoTanto,
                    getUserPlayer(uid, jugadorUno, jugadorDos)
                )
            );
        });
    }, [connection, dispatch]);

    useEffect(() => {
        connection?.on("TrucoCantado", (juego) => {
            const { truco, jugadorUno, jugadorDos } = juego;
            const { jugadorQueCantoTruco, trucosCantados } = truco;
            dispatch(
                cantarTruco({ ...juego, horarioDeUltimoMovimiento: new Date() })
            );
            dispatch(
                checkChantSet(
                    jugadorQueCantoTruco,
                    trucosCantados[trucosCantados.length - 1] === "no quiero"
                        ? "me voy al mazo"
                        : trucosCantados[trucosCantados.length - 1],
                    getUserPlayer(uid, jugadorUno, jugadorDos)
                )
            );
        });
    }, [connection, dispatch]);

    useEffect(() => {
        connection?.on("TorneosActualizados", () => {
            dispatch(obtenerTorneos());
        });
    }, [connection, dispatch]);

    return (
        <SocketContext.Provider value={{ connection }}>
            {children}
        </SocketContext.Provider>
    );
};