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

            JugadoresMesa1vs1 jugadoresYCartas = new JugadoresMesa1vs1();
            jugadoresYCartas.JugadorUno = jugadores.JugadorUno;
            jugadoresYCartas.JugadorDos = jugadores.JugadorDos;
            jugadoresYCartas.CartasRepartidas = JuegoServicio.RepartirCartas();

            await Clients.All.SendAsync("MesaOcupada", jugadoresYCartas);
        }

    }
}
