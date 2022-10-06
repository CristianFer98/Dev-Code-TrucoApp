import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="form-group d-flex flex-column">
    <button
      className="buttonLogin d-flex justify-content-center align-items-center align-self-center mt-2 btn"
      onClick={() => loginWithRedirect()}
    >
      Ingresar
    </button>
    </div>
  );
};
