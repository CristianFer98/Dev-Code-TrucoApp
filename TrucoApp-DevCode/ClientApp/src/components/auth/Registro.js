import React from "react";
import { Link } from "react-router-dom";

export const Registro = () => {
  return (
    <div className="col-12 animate__animated animate__fadeIn col-md-6 d-flex justify-content-center bg-white">
      <div className="d-flex flex-column align-self-center col-8 col-sm-6 col-md-8 col-xl-5">
        <div>
          <p className="mb-3 text-center fs-3 fw-bold">Registrate!</p>
          <form className="mb-3">
            <div className="form-group d-flex flex-column">
              {/* <label className="text-muted mb-1" htmlFor="exampleInputName">
            Nombre y apellido
          </label> */}
              <div>
                <input
                  type="text"
                  className="form-control"
                  name="rName"
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
                  placeholder="Email"
                />
              </div>

              <div>
                <input
                  type="password"
                  className="form-control mt-3"
                  id="exampleInputPassword1"
                  name="rPassword"
                  placeholder="Contraseña"
                />
              </div>

              <div>
                <input
                  type="password"
                  className="form-control mt-3"
                  id="exampleInputPassword2"
                  name="rPasswordConfirm"
                  placeholder="Confirmar contraseña"
                />
              </div>
              <button
                type="submit"
                className="buttonLogin d-flex justify-content-center align-self-center mt-4 mb-2 btn"
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
