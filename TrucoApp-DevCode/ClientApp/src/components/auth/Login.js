import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { startLogin, onLoginSuccess } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const Login = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleLoginInputChange] = useForm({
    lEmail: "",
    lPassword: "",
  });

  const { lEmail, lPassword } = formLoginValues;

  const handleInputChange = (e) => {
    e.preventDefault();
    handleLoginInputChange(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://localhost:44342/api/Usuarios/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: lEmail,
        Password: lPassword,
      }),
    });

    var jsonResponse = await response.json();
    if (response.ok) {
      localStorage.setItem("token", jsonResponse.jwtToken);
      dispatch(
        onLoginSuccess(
          jsonResponse.id,
          jsonResponse.email,
          jsonResponse.nombreCompleto,
          jsonResponse.fotoPerfil
        )
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Usuario o password incorrecto",
        text: "Vuelva a intentar",
      });
    }
    //dispatch(startLogin(lEmail, lPassword));
  };

  return (
    <div className="col-12 animate__animated animate__fadeIn col-md-6 d-flex justify-content-center bg-white">
      <div className="d-flex flex-column align-self-center col-8 col-sm-6 col-md-8 col-xl-5">
        <div>
          <div className="p-0 d-flex flex-column justify-content-center align-items-center">
            <p className="loginBienvenido">Bienvenido!</p>
            <p className="mb-3 fs-3 fw-bold">Ingresá a tu cuenta</p>
          </div>

          <form onSubmit={handleSubmit} className="mb-3">
            <div className="form-group d-flex flex-column">
              <label className="text-muted mb-1" htmlFor="exampleInputEmail1">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                value={lEmail}
                onChange={handleInputChange}
                name="lEmail"
                placeholder="Ingresar email"
              />

              <label
                className="text-muted mt-2 mb-1"
                htmlFor="exampleInputPassword1"
              >
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                value={lPassword}
                onChange={handleInputChange}
                name="lPassword"
                placeholder="Ingresar contraseña"
              />
              <p id="emailHelp" className="forgotPassword form-text">
                Olvidaste tu contraseña?
              </p>

              <button
                type="submit"
                className="buttonLogin d-flex justify-content-center align-items-center align-self-center mt-2 btn btn-primary"
              >
                Ingresar
              </button>

              <div
                className="d-flex justify-content-center"
                id="signInDiv"
              ></div>
            </div>
          </form>

          <div className="registerLink text-center text-muted d-flex justify-content-center">
            No tenés cuenta?
            <Link to="/auth/registro" className="registerLinkP">
              <p className="registerLinkP ms-1">Registrate</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
