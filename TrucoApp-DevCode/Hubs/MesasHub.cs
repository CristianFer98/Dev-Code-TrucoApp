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

        public async Task OcuparMesa(JugadoresMesa1vs1 jugadores)
        {
            jugadores.CartasRepartidas = JuegoServicio.RepartirCartas();
            await Clients.All.SendAsync("MesaOcupada", jugadores);
        }

        public async Task JoinRoom(JugadoresMesa1vs1 jugadores)
        {
            string userRoom = Convert.ToString(jugadores.Room);
            await Groups.AddToGroupAsync(Context.ConnectionId, userRoom);
            await Clients.Group(userRoom).SendAsync("EmpezarJuego", jugadores);
        }

    }
}
