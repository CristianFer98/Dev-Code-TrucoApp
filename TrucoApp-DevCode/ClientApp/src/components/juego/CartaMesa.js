import React from "react";
import mazo from "../../assets/cartas/Mazo.png";

export const CartaMesa = () => {
  return (
    <div>
      <img className="cardTable" src={mazo} alt="cartaMesa" />
    </div>
  );
};
