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

            Envido envido = new();
            envido.TantoJugadorUno = JuegoServicio.ContarTantoJugador(cartasJugadorUno);
            envido.TantoJugadorDos = JuegoServicio.ContarTantoJugador(cartasJugadorDos);
            partida.Envido = envido;

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
            int jugadorQueCantaEnvido = partida.Turno;

            if (partida.Envido.EnvidosCantados[^1] == "quiero")
            {
                partida.Turno = JuegoServicio.CambiarTurno(partida.Repartidor);
                partida.Envido.EstadoEnvidoCantado = false;
                partida.Envido.EstadoCantarTantos = true;
                partida.Envido.JugadorQueDebeResponderEnvido = JuegoServicio.CambiarTurno(partida.Repartidor);
            }
            else if (partida.Envido.EnvidosCantados[^1] == "no quiero")
            {
                partida.Turno = partida.Envido.JugadorQueCantoPrimeroEnvido;
                partida.Envido.EstadoEnvidoCantado = false;
                partida.Envido.EstadoCantarTantos = false;
                partida.Envido.JugadorQueDebeResponderEnvido = 0;
                partida.Envido.JugadorQueCantoPrimeroEnvido = 0;

                if (jugadorQueCantaEnvido == 1)
                {
                    partida.PuntosJugadorDos += JuegoServicio.CalcularPuntosEnvido(partida.Envido.EnvidosCantados, partida.PuntosJugadorUno, partida.PuntosJugadorDos);
                }
                else
                {
                    partida.PuntosJugadorUno += JuegoServicio.CalcularPuntosEnvido(partida.Envido.EnvidosCantados, partida.PuntosJugadorUno, partida.PuntosJugadorDos);
                }
            }
            else
            {
                partida.Turno = partida.Envido.JugadorQueDebeResponderEnvido;
            }
            await Clients.Group(userRoom).SendAsync("EnvidoCantado", partida);
        }

        public async Task CantarTantos(Partida partida)
        {
            string userRoom = Convert.ToString(partida.Room);
            if (partida.Turno == partida.Repartidor)
            {
                partida.Turno = partida.Envido.JugadorQueCantoPrimeroEnvido;
                partida.Envido.JugadorQueDebeResponderEnvido = 0;
                partida.Envido.JugadorQueCantoPrimeroEnvido = 0;
                partida.Envido.EstadoCantarTantos = false;

                if (JuegoServicio.EnvidoMasAlto(partida.Repartidor, partida.Envido.TantoCantadoJugadorUno, partida.Envido.TantoCantadoJugadorDos) == 1)
                {
                    partida.PuntosJugadorUno += JuegoServicio.CalcularPuntosEnvido(partida.Envido.EnvidosCantados, partida.PuntosJugadorUno, partida.PuntosJugadorDos);
                }
                else
                {
                    partida.PuntosJugadorDos += JuegoServicio.CalcularPuntosEnvido(partida.Envido.EnvidosCantados, partida.PuntosJugadorUno, partida.PuntosJugadorDos);
                }

            }
            else
            {
                partida.Turno = JuegoServicio.CambiarTurno(partida.Turno);
                partida.Envido.JugadorQueDebeResponderEnvido = JuegoServicio.CambiarTurno(partida.Turno);
            }

            await Clients.Group(userRoom).SendAsync("TantosCantados", partida);

        }

    }
}
