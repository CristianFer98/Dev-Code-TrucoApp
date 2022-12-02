export const entrarAMesa = async (
  uid,
  idMesa,
  connection,
  jugadorUno,
  cantidadJugadores
) => {
  const idJugador = uid;
  const resp = await fetch(
    `https://dev-code-trucoapp20221119110900.azurewebsites.net/api/Mesas/EntrarAJugar/${idMesa}`,
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
    var jsonResponse = await resp.json();
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
        `https://dev-code-trucoapp20221119110900.azurewebsites.net/api/Torneo/AgregarParticipante`,
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
        await connection.invoke("AgregarParticipante", {
          TorneoId: idTorneo,
          IdUsuario: idJugador
        });
    }
};

export const entrarAMesaTorneo = async (
    uid,
    idMesa,
    connection,
    jugadorUno,
    cantidadJugadores
) => {
    const resp = await fetch(
        `https://dev-code-trucoapp20221119110900.azurewebsites.net/api/Mesas/ObtenerMesaPorId/${idMesa}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }
    );

    if (resp.ok) {
        const room = idMesa;
        var jsonResponse = await resp.json();
        const jugadorUno = jsonResponse.jugadorUno;
        const jugadorDos = jsonResponse.jugadorDos;
        const jugadorTres = jsonResponse.jugadorTres;
        const jugadorCuatro = jsonResponse.jugadorCuatro;

        await connection.invoke("OcuparMesaTorneo", {
            room,
            jugadorUno,
            jugadorDos,
            jugadorTres: !jugadorTres ? 0 : jugadorTres,
            jugadorCuatro: !jugadorCuatro ? 0 : jugadorCuatro,
            cantidadJugadores,
        });
    }
};