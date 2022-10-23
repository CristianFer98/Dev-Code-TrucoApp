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


        public async Task InicializarMano(Partida partida)
        {
            string userRoom = Convert.ToString(partida.Room);

            List<Carta> CartasRepartidas = JuegoServicio.RepartirCartas();
            List<Carta> cartasJugadorUno = new()
            {
                CartasRepartidas[0],
                CartasRepartidas[2],
                CartasRepartidas[4],
            };
            List<Carta> cartasJugadorDos = new()
            {
                CartasRepartidas[1],
                CartasRepartidas[3],
                CartasRepartidas[5],
            };
            partida.CartasJugadorUno = cartasJugadorUno;
            partida.CartasJugadorDos = cartasJugadorDos;
            partida.Mano = 1;
            partida.JugadasRealizadas = 0;

            Envido envido = new();
            Truco truco = new();
            envido.TantoJugadorUno = JuegoServicio.ContarTantoJugador(cartasJugadorUno);
            envido.TantoJugadorDos = JuegoServicio.ContarTantoJugador(cartasJugadorDos);
            partida.Envido = envido;
            partida.Truco = truco;

            if (partida.PuntosJugadorUno == 0 && partida.PuntosJugadorDos == 0)
            {
                partida.Turno = JuegoServicio.AsignarTurno();
                partida.Repartidor = JuegoServicio.CambiarTurno(JuegoServicio.AsignarTurno());
            }
            else
            {
                partida.Turno = partida.Repartidor;
                partida.Repartidor = JuegoServicio.CambiarTurno(partida.Repartidor);
                partida.GanadorMano = null;
            }

            await Clients.Group(userRoom).SendAsync("EmpezarJuego", partida);
        }

        public async Task TirarCarta(Partida partida)
        {
            string userRoom = Convert.ToString(partida.Room);
            Partida partidaActualizada = JuegoServicio.ActualizarPartida(partida);
            await Clients.Group(userRoom).SendAsync("CartaTirada", partidaActualizada);
        }

        public async Task CantarEnvido(Partida partida)
        {
            string userRoom = Convert.ToString(partida.Room);

            Partida partidaActualizada = JuegoServicio.EnvidoTurnos(partida);

            await Clients.Group(userRoom).SendAsync("EnvidoCantado", partidaActualizada);
        }

        public async Task CantarTantos(Partida partida)
        {
            string userRoom = Convert.ToString(partida.Room);
            Partida partidaActualizada = JuegoServicio.TantosEnvidoTurnos(partida);

            await Clients.Group(userRoom).SendAsync("TantosCantados", partidaActualizada);
        }

        public async Task CantarTruco(Partida partida)
        {
            string userRoom = Convert.ToString(partida.Room);
            Partida partidaActualizada = JuegoServicio.TrucoTurnos(partida);
            await Clients.Group(userRoom).SendAsync("TrucoCantado", partidaActualizada);
        }

    }
}
