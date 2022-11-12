import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router";
import { entrarComoInvitado } from "../../actions/auth";
import { entrarAPartida, obtenerMesa } from "../../actions/mesas";
import { SocketContext } from "../../context/SocketContext";
import { entrarAMesa } from "../../helpers/fetchConnection";
import { PantallaCarga } from "./PantallaCarga";

export const CargarPartida = () => {
  const { mesas1vs1 } = useSelector((state) => state.mesas);
  const { mesaId } = useParams();
  const dispatch = useDispatch();
  const { connection } = useContext(SocketContext);
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(obtenerMesa(mesaId, history));
  }, [dispatch]);

  useEffect(() => {
    !!connection &&
      mesas1vs1.length > 0 &&
      mesas1vs1.find((mesa) => mesa.idMesa === Number(mesaId)).jugadorDos ===
        null &&
      dispatch(entrarComoInvitado(Number(mesaId))) &&
      setLoading(false);
  }, [mesas1vs1, dispatch, connection]);

  return loading ? <PantallaCarga /> : <Redirect to="/inicio" />;
};
