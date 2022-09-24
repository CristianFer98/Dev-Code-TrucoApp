import { useEffect } from "react";
import { createContext } from "react";
import { useSelector } from "react-redux";
import useSocket from "../hooks/useSocket";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { uid } = useSelector((state) => state.auth);
  const { connection, connectSocket, disconnectSocket } = useSocket();

  useEffect(() => {
    if (!!uid) {
      connectSocket();
    }
  }, [uid, connectSocket]);

  useEffect(() => {
    if (!uid) {
      disconnectSocket();
    }
  }, [uid, disconnectSocket]);

  return (
    <SocketContext.Provider value={{ connection }}>
      {children}
    </SocketContext.Provider>
  );
};
