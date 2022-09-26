using Entidades;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
            await Clients.All.SendAsync("MesaOcupada", jugadores);
        }

    }
}
