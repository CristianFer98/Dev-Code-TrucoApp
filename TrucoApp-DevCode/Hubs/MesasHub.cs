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

        public async Task CrearMesa(int user, int room)
        {
            await JoinRoom(user, room);
            await Clients.All.SendAsync("MesasActualizadas");
        }

        public async Task OcuparMesa(Partida partida)
        {
            await JoinRoom(partida.IdJugador, partida.Room);
            string userRoom = Convert.ToString(partida.Room);

            if (partida.CantidadJugadores == 2)
            {

                await Clients.All.SendAsync("MesasActualizadas");
                await Clients.Group(userRoom).SendAsync("MesaOcupada");
                await InicializarMano(partida);
            }
            else
            {
                if (partida.JugadorUno != 0 && partida.JugadorDos != 0 && partida.JugadorTres != 0 && partida.JugadorCuatro != 0)
                {
                    await Clients.All.SendAsync("MesasActualizadas");
                    await InicializarMano2vs2(partida);
                }
                await Clients.Group(userRoom).SendAsync("MesaOcupada2vs2", partida);
            }
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

            List<Carta> CartasRepartidas = JuegoServicio.RepartirCartas(2);
            List<Carta> cartasJugadorUno = new()
            {
                CartasRepartidas[0],
                CartasRepartidas[1],
                CartasRepartidas[2],
            };
            List<Carta> cartasJugadorDos = new()
            {
                CartasRepartidas[3],
                CartasRepartidas[4],
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
        public async Task InicializarMano2vs2(Partida partida)
        {
            string userRoom = Convert.ToString(partida.Room);

            List<Carta> CartasRepartidas = JuegoServicio.RepartirCartas(4);
            partida.EquipoUno = new()
            {
                1,
                2
            };
            partida.EquipoDos = new()
            {
                3,
                4
            };

            List<Carta> cartasJugadorUno = new()
            {
                CartasRepartidas[0],
                CartasRepartidas[1],
                CartasRepartidas[2],
            };
            List<Carta> cartasJugadorDos = new()
            {
                CartasRepartidas[3],
                CartasRepartidas[4],
                CartasRepartidas[5],
            };
            List<Carta> cartasJugadorTres = new()
            {
                CartasRepartidas[6],
                CartasRepartidas[7],
                CartasRepartidas[8],
            };
            List<Carta> cartasJugadorCuatro = new()
            {
                CartasRepartidas[9],
                CartasRepartidas[10],
                CartasRepartidas[11],
            };

            partida.CartasJugadorUno = cartasJugadorUno;
            partida.CartasJugadorDos = cartasJugadorDos;
            partida.CartasJugadorTres = cartasJugadorTres;
            partida.CartasJugadorCuatro = cartasJugadorCuatro;
            partida.Mano = 1;
            partida.JugadasRealizadas = 0;

            Envido envido = new();
            Truco truco = new();
            envido.TantoJugadorUno = JuegoServicio.ContarTantoJugador(cartasJugadorUno);
            envido.TantoJugadorDos = JuegoServicio.ContarTantoJugador(cartasJugadorDos);
            envido.TantoJugadorTres = JuegoServicio.ContarTantoJugador(cartasJugadorTres);
            envido.TantoJugadorCuatro = JuegoServicio.ContarTantoJugador(cartasJugadorCuatro);
            partida.Envido = envido;
            partida.Truco = truco;

            if (partida.PuntosJugadorUno == 0 && partida.PuntosJugadorDos == 0)
            {
                partida.Repartidor = JuegoServicio2vs2.AsignarRepartidor2vs2(true, 0);
                partida.Turno = JuegoServicio2vs2.AsignarTurno2vs2(partida.Repartidor);
                //Sacar esto cuando aplique lo de los puntos
                partida.GanadorMano = null;
            }
            else
            {
                partida.Repartidor = JuegoServicio2vs2.AsignarRepartidor2vs2(false, partida.Repartidor);
                partida.Turno = JuegoServicio2vs2.AsignarTurno2vs2(partida.Repartidor);
                partida.GanadorMano = null;
            }

            await Clients.Group(userRoom).SendAsync("EmpezarJuego2vs2", partida);
        }

        public async Task TirarCarta(Partida partida)
        {
            string userRoom = Convert.ToString(partida.Room);
            Partida partidaActualizada = partida;

            if (partida.CantidadJugadores == 2)
            {
                partidaActualizada = JuegoServicio.ActualizarPartida(partida);
            }
            else if (partida.CantidadJugadores == 4)
            {
                partidaActualizada = JuegoServicio2vs2.ActualizarPartida2vs2(partida);
            }

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

        #region TorneosHub
        public async Task CrearTorneo()
        {
            await Clients.All.SendAsync("TorneosActualizados");
        }
        public async Task AgregarParticipante(TorneoParticipante torneoParticipante)
        {
            await Clients.All.SendAsync("TorneosActualizados");
        }
        public async Task JoinRoomTorneo(int user, int room)
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
        public async Task OcuparMesaTorneo(Partida partida)
        {
            await JoinRoomTorneo(partida.JugadorUno, partida.Room);
            await JoinRoomTorneo(partida.JugadorDos, partida.Room);
            partida.CantidadJugadores = 2;
            string userRoom = Convert.ToString(partida.Room);
         
            await Clients.All.SendAsync("MesasActualizadas");
            await Clients.Group(userRoom).SendAsync("MesaOcupada");
            await InicializarMano(partida);
        }
        #endregion
    }
}
