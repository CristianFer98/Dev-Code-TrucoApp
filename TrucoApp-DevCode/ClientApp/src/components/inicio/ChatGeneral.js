import React, { useState, useEffect } from "react";
import { db } from "../../firebase/Firebase";
import { query, collection, orderBy, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";

export function ChatGeneral() {
  const [mensajes, setMensajes] = useState([]);
  const [input , setInput] = useState('');
  const fechaServidor = serverTimestamp();

  useEffect(() => {
    const q = query(collection(db, "ChatGeneral"), orderBy('fecha'));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let mensajes = [];
      QuerySnapshot.forEach((doc) => {
        mensajes.push({ ...doc.data(), id: doc.id });
      });
      setMensajes(mensajes);
    });
    return () => unsubscribe();
  }, []);

  const enviarMensaje = async(e)=>{
    e.preventDefault();
    await addDoc(collection(db, 'ChatGeneral'), {
        text: input,
        fecha: fechaServidor,
    })
    setInput('');
  }

    return (
        <div style={{ alignSelf: "end", backgroundColor: "#C2C2C2", height: "auto", borderRadius: "25PX" }} >
            <h4 style={{ backgroundColor: "#1A2930", WebkitBorderTopLeftRadius: "25PX", color: "#C2C2C2", textAlign: "center" }}>Chat General</h4>
      <ul>
        {mensajes.map((mensaje) => {
            return (
              <>
              <li key={mensaje.id} style={{ color: "#1A2930" }}> 
                        {mensaje.text}

               </li>
              </>
          );
        })}
      </ul>

      <form onSubmit={enviarMensaje} >
                <input type="text" placeholder="Mensaje" onChange={(e) => setInput(e.target.value)} value={input} style={{border:"none"}} />
                <button type="submit" style={{border:"none"}}>Enviar</button>
      </form>
    </div>
  );
}
