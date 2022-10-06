import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const Registro = () => {
  const [formRegisterValues, handleRegisterInputChange] = useForm({
    rName: '',
    rEmail: '',
    rPassword: '',
    rPasswordConfirm: '',
  });

  const { rName, rEmail, rPassword, rPasswordConfirm } = formRegisterValues;

  const handleInputChange = (e) => {
    e.preventDefault();
    handleRegisterInputChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(rName, rEmail, rPassword, rPasswordConfirm);
  };

  return (
    <div className="col-12 animate__animated animate__fadeIn col-md-6 d-flex justify-content-center bg-white">
      <div className="d-flex flex-column align-self-center col-8 col-sm-6 col-md-8 col-xl-5">
        <div>
          <p className="mb-3 text-center fs-3 fw-bold">Registrate!</p>
          <form onSubmit={handleSubmit} className="mb-3">
            <div className="form-group d-flex flex-column">
              {/* <label className="text-muted mb-1" htmlFor="exampleInputName">
            Nombre y apellido
          </label> */}
              <div>
                <input
                  type="text"
                  className="form-control"
                  name="rName"
                  value={rName}
                  onChange={handleInputChange}
                  id="exampleInputName"
                  placeholder="Nombre y apellido"
                />
              </div>

              <div>
                <input
                  type="text"
                  className="form-control mt-3"
                  id="exampleInputEmail1"
                  name="rEmail"
                  value={rEmail}
                  onChange={handleInputChange}
                  placeholder="Email"
                />
              </div>

              <div>
                <input
                  type="password"
                  className="form-control mt-3"
                  id="exampleInputPassword1"
                  name="rPassword"
                  value={rPassword}
                  onChange={handleInputChange}
                  placeholder="Contraseña"
                />
              </div>

              <div>
                <input
                  type="password"
                  className="form-control mt-3"
                  id="exampleInputPassword2"
                  name="rPasswordConfirm"
                  value={rPasswordConfirm}
                  onChange={handleInputChange}
                  placeholder="Confirmar contraseña"
                />
              </div>
              <button
                type="submit"
                className="buttonLogin d-flex justify-content-center align-self-center mt-4 mb-2 btn btn-primary"
              >
                Registrarse
              </button>
            </div>
          </form>

          <div className="registerLink text-muted d-flex justify-content-center">
            Ya tenés una cuenta?
            <Link to="/auth/login" className="registerLinkP">
              <p className="registerLinkP ms-1">Ingresa</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
