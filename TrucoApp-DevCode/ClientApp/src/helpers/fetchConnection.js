export const entrarAMesa = async (
  uid,
  idMesa,
  connection,
  jugadorUno,
  cantidadJugadores
) => { 
  const idJugador = uid;
  const resp = await fetch(
    `https://localhost:44342/api/Mesas/EntrarAJugar/${idMesa}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: idJugador,
    }
  );

  if (resp.ok) {
    const room = idMesa;
    var jsonResponse = await resp.json();//ver que me devuelve.
    const jugadorUno = jsonResponse.jugadorUno;
    const jugadorDos = jsonResponse.jugadorDos;
    const jugadorTres = jsonResponse.jugadorTres;
    const jugadorCuatro = jsonResponse.jugadorCuatro;

    await connection.invoke("OcuparMesa", {
      room,
      jugadorUno,
      jugadorDos,
      jugadorTres: !jugadorTres ? 0 : jugadorTres,
      jugadorCuatro: !jugadorCuatro ? 0 : jugadorCuatro,
      cantidadJugadores,
      idJugador,
    });
  }
};
export const entrarATorneo = async (uid, idTorneo, connection) => {
    const idJugador = uid;
    const resp = await fetch(
        `https://localhost:44342/api/Torneo/AgregarParticipante`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                TorneoId: idTorneo,
                IdUsuario: idJugador,
            }),
        }
    );

    if (resp.ok) {
        const room = idTorneo;
        //await connection.invoke("AgregarParticipante", { room, idJugador });
        await connection.invoke("AgregarParticipante");
    }
};