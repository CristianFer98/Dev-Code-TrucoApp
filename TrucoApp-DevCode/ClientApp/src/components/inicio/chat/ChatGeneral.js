import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase/Firebase';
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  limit,
} from 'firebase/firestore';
import './chatGeneral.css';
import { useSelector } from 'react-redux'


export function ChatGeneral() {
  const [mensajes, setMensajes] = useState([]);
  const [input, setInput] = useState('');
    const fechaServidor = serverTimestamp();
    const { nombre } = useSelector((state) => state.auth);


  //genero una query hacia la BD trayendo la coleccion ChatGeneral con un limite de 10 mensajes.
  useEffect(() => {
    const q = query(
      collection(db, 'ChatGeneral'),
      limit('12'),
      orderBy('fecha', 'desc')
    );

    //hago una captura de esos datos lo guardo en un array con la info y el id (mensaje.push)
    //lo guardo en mi constante mensajes (.reverse me invierte el array para mostrar bien el chat)
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let mensajes = [];
      QuerySnapshot.forEach((doc) => {
        mensajes.push({ ...doc.data(), id: doc.id });
      });
      setMensajes(mensajes.reverse());
    });
    return () => unsubscribe();
  }, []);

  //obtengo el evento, agrego el documento a la coleccion ChatGeneral
  //en la BD con la info del input y la fecha del servidor
  const enviarMensaje = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'ChatGeneral'), {
      text: nombre + ': ' + input,
      fecha: fechaServidor,
    });
    setInput('');
  };

  /* Recorro mi state mensajes con un map
     El form envia el mensaje, el input por cada cambio modifica el valor del input con el e.target.value
  */
  return (
    <div className="estiloChat">
      <h3 className="headerChat">Chat General</h3>
      <div>
        {mensajes.map((mensaje) => (
          <p className="mensajes" key={mensaje.id}>
            {mensaje.text}
          </p>
        ))}

        <form onSubmit={enviarMensaje} style={{ display: 'flex' }}>
          <input
            type="text"
            placeholder="Mensaje"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            style={{ border: 'none', width: '80%' }}
          />
          <button type="submit" style={{ border: 'none' }}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
