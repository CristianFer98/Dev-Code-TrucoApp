import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { jugar } from "../../actions/auth";

export const Inicio = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleJugar = (e) => {
    e.preventDefault();
    dispatch(jugar());
    history.push("/juego");
  };

  return (
    <div className="Home p-5">
      <button onClick={handleJugar} className="btn btn-primary">
        Jugar
      </button>
    </div>
  );
};
