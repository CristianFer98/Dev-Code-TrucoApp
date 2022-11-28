import React from "react";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";

export const PantallaCarga = () => {
  const { jugadoresConectados } = useSelector((state) => state.ui);

  return (
    <div className="divContainer bg-dark d-flex flex-column justify-content-center align-items-center">
      <TailSpin
        height="55"
        width="55"
        color="rgba(158, 96, 2, 0.979)"
        visible={true}
      />
      {!jugadoresConectados ? (
        <h4 className="mt-4 text-light">Cargando partida...</h4>
      ) : (
        <h4 className="mt-4 text-light">Esperando jugadores...</h4>
      )}

      {jugadoresConectados && (
        <h4 className="mt-2 text-light">Conectados: {jugadoresConectados}/4</h4>
      )}
    </div>
  );
};
