export const entrarAMesa = async (uid, idMesa, connection, jugadorUno) => {
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
    const jugadorDos = uid;
    await connection.invoke("OcuparMesa", { room, jugadorUno, jugadorDos });
  }
};
