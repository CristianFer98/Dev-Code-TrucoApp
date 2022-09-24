import { useCallback, useState } from "react";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

const useSocket = () => {
  const [connection, setConnection] = useState(null);
  const connectSocket = useCallback(async () => {
    const connection = new HubConnectionBuilder()
      .withUrl("https://localhost:44342/mesashub")
      .configureLogging(LogLevel.Information)
      .build();

    await connection.start();
    setConnection(connection);
  }, []);

  const disconnectSocket = useCallback(async () => {
    await connection?.stop();
  }, [connection]);

  return {
    connection,
    connectSocket,
    disconnectSocket,
  };
};

export default useSocket;
