import { types } from "../types/types";

export const startLogin = (email, password) => {
  return (dispatch) => {
    const { Usuarios } = require("../usuarios.json");

    const usuario = Usuarios.find(
      (usuario) => usuario.email === email && usuario.password === password
    );

    if (usuario) {
      dispatch(
        login(usuario.uid, usuario.email, usuario.password, usuario.nombre, usuario.foto)
      );
    }
  };
};

export const onLoginSuccess = (uid, email, nombre, foto) => {
  return (dispatch) => {
    dispatch(
      login(uid, email, '', nombre, foto)
    )
  }
}

export const startLogout = () => {
  return (dispatch) => {
    dispatch(logout());
  };
};

const logout = () => ({
  type: types.authLogout,
});

const login = (uid, email, password, nombre, foto) => ({
  type: types.authLogin,
  payload: {
    uid,
    email,
    password,
    nombre,
    foto,
    jugando: false,
    invitado: false,
  },
});

export const jugar = () => ({
  type: types.authJugar,
  payload: {
    jugando: true,
  },
});

export const entrarComoInvitado = (idMesa) => ({
  type: types.authEntrarComoInvitado,
  payload: {
    invitado: true,
    mesaInvitado: idMesa,
  },
});
