import React, { useState, useEffect } from "react";
import { db } from "../../firebase/Firebase";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  limit,
  
} from "firebase/firestore";
import "./chatGeneral.css";

export function ChatGeneral() {
  const [mensajes, setMensajes] = useState([]);
  const [input, setInput] = useState("");
  const fechaServidor = serverTimestamp();

  useEffect(() => {
    const q = query(collection(db, "ChatGeneral"),limit("10"), orderBy("fecha", "desc") );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let mensajes = [];
      QuerySnapshot.forEach((doc) => {
        mensajes.push({ ...doc.data(), id: doc.id });
      });
      setMensajes(mensajes.reverse());
    });
    return () => unsubscribe();
  }, []);

  const enviarMensaje = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "ChatGeneral"), {
      text: input,
      fecha: fechaServidor,
    });
    setInput("");
  };

  return (
    <div className="display">
    <div className="estiloChat">

      <h3 className="headerChat">
       Chat General
      </h3>
      <div>
        {mensajes.map((mensaje) => {
          return (
            <>
              <p className="mensajes"
                key={mensaje.id}>
                Cristian98: {mensaje.text}
              </p>
            </>
          );
        })}

        <form onSubmit={enviarMensaje} style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Mensaje"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            style={{ border: "none", width: "80%" }}
          />
          <button type="submit" style={{ border: "none" }}>
            Enviar
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}
