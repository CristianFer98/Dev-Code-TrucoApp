import React from "react";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";

export const CargandoPartida = ({ children }) => {
  const { cargando } = useSelector((state) => state.ui);

  return cargando ? (
    //   return (
    <div className="divContainer bg-dark d-flex flex-column justify-content-center align-items-center">
      <TailSpin
        height="55"
        width="55"
        color="rgba(158, 96, 2, 0.979)"
        visible={true}
      />
      <h4 className="mt-4 text-light">Cargando partida...</h4>
    </div>
  ) : (
    <>{children}</>
  );
};