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

        private readonly IDictionary<string, UserConnection> _connections;

        public MesasHub(IDictionary<string, UserConnection> connections)
        {
            _connections = connections;
        }

        public async Task CrearMesa()
        {
            await Clients.All.SendAsync("MesasActualizadas");
        }

        public async Task OcuparMesa(Partida partida)
        {
            await Clients.All.SendAsync("MesasActualizadas");
            await Clients.All.SendAsync("MesaOcupada", partida);
        }

        public async Task JoinRoom(int user, int room)
        {
            string userRoom = Convert.ToString(room);

            UserConnection userConnection = new()
            {
                User = user,
                Room = userRoom
            };
            _connections[Context.ConnectionId] = userConnection;

            await Groups.AddToGroupAsync(Context.ConnectionId, userRoom);
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            if (_connections.TryGetValue(Context.ConnectionId, out UserConnection userConnection))
            {
                _connections.Remove(Context.ConnectionId);

                SendConnectedUsers(userConnection.Room);
            }

            return base.OnDisconnectedAsync(exception);

        }

        public async Task DejarMesa(int room)
        {
            string userRoom = Convert.ToString(room);

            await Groups.RemoveFromGroupAsync(Context.ConnectionId, userRoom);
            _connections.Remove(Context.ConnectionId);

            await SendConnectedUsers(userRoom);
        }

        public Task SendConnectedUsers(string room)
        {
            var users = _connections.Values.Where(c => c.Room == room).Select(c => c.User);

            return Clients.Group(room).SendAsync("UsersInRoom", users);

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
            partida.JugadasAutomaticasJugadorUno = 0;
            partida.JugadasAutomaticasJugadorDos = 0;

            if (partida.PuntosJugadorUno == 0 && partida.PuntosJugadorDos == 0)
            {
                partida.Turno = JuegoServicio.AsignarTurno();
                partida.Repartidor = JuegoServicio.CambiarTurno(partida.Turno);
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
