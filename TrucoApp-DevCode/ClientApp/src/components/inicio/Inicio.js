import React from "react";
import { useDispatch } from "react-redux";
import { jugar } from "../../actions/auth";

export const Inicio = () => {
  const dispatch = useDispatch();

  const handleJugar = (e) => {
    e.preventDefault();
    dispatch(jugar());
  };

  return (
    <div className="Home p-5">
      <button onClick={handleJugar} className="btn btn-primary">
        Jugar
      </button>
    </div>
  );
};
