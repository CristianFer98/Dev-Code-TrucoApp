import { types } from "../types/types";

export const startLogin = (email, password) => {
  return (dispatch) => {
    const { Usuarios } = require("../usuarios.json");

    const usuario = Usuarios.find(
      (usuario) => usuario.email === email && usuario.password === password
    );

    if (usuario) {
      dispatch(login(usuario.uid, usuario.email, usuario.password));
    }
  };
};

export const startLogout = () => {
  return (dispatch) => {
    dispatch(logout());
  };
};

const logout = () => ({
  type: types.authLogout,
});

const login = (uid, email, password) => ({
  type: types.authLogin,
  payload: {
    uid,
    email,
    password,
    jugando: false,
  },
});

export const jugar = () => ({
  type: types.authJugar,
  payload: {
    jugando: true,
  },
});
