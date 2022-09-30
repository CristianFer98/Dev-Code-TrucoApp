using Entidades;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Servicios.Juego;

namespace Router.Hubs
{
    public class MesasHub : Hub
    {

        public async Task CrearMesa()
        {
            await Clients.All.SendAsync("MesasActualizadas");
        }

        public async Task OcuparMesa(Partida partida)
        {
            await Clients.All.SendAsync("MesasActualizadas");
            await Clients.All.SendAsync("MesaOcupada", partida);
        }

        public async Task JoinRoom(int room)
        {
            string userRoom = Convert.ToString(room);
            await Groups.AddToGroupAsync(Context.ConnectionId, userRoom);
        }

        public async Task SortearTurno(Partida partida)
        {
            string userRoom = Convert.ToString(partida.Room);

            List<Carta> CartasRepartidas = JuegoServicio.RepartirCartas();
            partida.CartasJugadorUno = new List<Carta>()
            {
                CartasRepartidas[0],
                CartasRepartidas[2],
                CartasRepartidas[4],
            };
            partida.CartasJugadorDos = new List<Carta>()
            {
                CartasRepartidas[1],
                CartasRepartidas[3],
                CartasRepartidas[5],
            };

            partida.Turno = JuegoServicio.AsignarTurno();

            await Clients.Group(userRoom).SendAsync("EmpezarJuego", partida);

        }

        public async Task TirarCarta(Jugada jugada)
        {
            string userRoom = Convert.ToString(jugada.Room);
            JuegoServicio.ActualizarPartida(jugada);
            Partida partidaActualizada = JuegoServicio.BuscarPartidaPorMesa(jugada.Room);
            await Clients.Group(userRoom).SendAsync("CartaTirada", partidaActualizada);
        }

    }
}
