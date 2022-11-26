export const entrarAMesa = async (uid, idMesa, connection, jugadorUno) => {
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
    const jugadorDos = uid;
    await connection.invoke("OcuparMesa", { room, jugadorUno, jugadorDos });
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
                IdTorneo: idTorneo,
                IdUsuario: idJugador,
            }),
        }
    );

    //if (resp.ok) {
    //    const room = idTorneo;
    //    await connection.invoke("AgregarParticipante", { room, idJugador });
    //}
};