import React from "react";
import { Cuenta } from "../cuenta/Cuenta";
import { LoginButton } from "./LoginButton";
import LogoutButton from "./Logout";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const Login = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleLoginInputChange] = useForm({
    lEmail: '',
    lPassword: '',
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
          <LoginButton
            type="submit"
            className="buttonLogin d-flex justify-content-center align-items-center align-self-center mt-2 btn"
          ></LoginButton>
          <LogoutButton/>
          <Cuenta/>
        </div>
      </div>
    </div>
  );
};
