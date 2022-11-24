import React from "react";
// const imagenCarta = require.context("../../assets/cartas", true);

export const CartaMesa2vs2 = ({ carta }) => {
  return <img className="deck" src={carta.imagen} alt="cartaMesa" />;
};
