import React from "react";
<<<<<<< HEAD
import { Cuenta } from "../cuenta/Cuenta";
import { LoginButton } from "./LoginButton";
import LogoutButton from "./Logout";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
=======
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startLogin } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
>>>>>>> parent of 0b9f2a5 (add auth0)

export const Login = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleLoginInputChange] = useForm({
<<<<<<< HEAD
    lEmail: '',
    lPassword: '',
=======
    lEmail: "",
    lPassword: "",
>>>>>>> parent of 0b9f2a5 (add auth0)
  });

  const { lEmail, lPassword } = formLoginValues;

  const handleInputChange = (e) => {
    e.preventDefault();
    handleLoginInputChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(startLogin(lEmail, lPassword));
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
                className="buttonLogin d-flex justify-content-center align-items-center align-self-center mt-2 btn"
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
