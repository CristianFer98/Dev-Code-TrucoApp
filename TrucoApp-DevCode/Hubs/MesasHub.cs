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
            await Clients.All.SendAsync("MesaCreada");
        }

        public async Task OcuparMesa(Partida partida)
        {
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
            await Clients.All.SendAsync("MesaOcupada", partida);
        }

        public async Task JoinRoom(Partida partida)
        {
            string userRoom = Convert.ToString(partida.Room);
            await Groups.AddToGroupAsync(Context.ConnectionId, userRoom);
            JuegoServicio.AgregarPartida(partida);
            await Clients.Group(userRoom).SendAsync("EmpezarJuego", partida);
        }

    }
}
