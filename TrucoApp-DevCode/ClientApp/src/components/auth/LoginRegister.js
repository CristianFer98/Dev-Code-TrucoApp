import React, { useState } from "react";
import "./auth.css";
import { Login } from "./Login";
import { Register } from "./Register";

export const LoginRegister = () => {
  return (
    <div className="divContainer container-fluid d-flex flex-row col-12 p-0">
      <div className="divPicture animate__animated animate__fadeIn d-none d-md-block col-6"></div>

      <Login />
    </div>
  );
};
