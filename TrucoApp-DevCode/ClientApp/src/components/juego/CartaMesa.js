import React from "react";
// const imagenCarta = require.context("../../assets/cartas", true);

export const CartaMesa = ({ carta, animation }) => {
  return (
    <div className={`animate__animated ${animation}`}>
      <img className="cardTable" src={carta.imagen} alt="cartaMesa" />
    </div>
  );
};
