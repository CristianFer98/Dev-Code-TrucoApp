using Entidades;
using Repositorios;
using Repositorios.Interfaces;
using Servicios.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Servicios
{
    public class TorneoServicio : ITorneoServicio
    {
        private readonly ITorneoRepositorio _torneoRepositorio;
        private readonly ITorneoParticipanteRepositorio _torneoParticipanteRepositorio;
        private readonly ITorneoPartidaRepositorio _torneoPartidaRepositorio;

        public TorneoServicio(ITorneoRepositorio torneoRepositorio,
             ITorneoParticipanteRepositorio torneoParticipanteRepositorio,
             ITorneoPartidaRepositorio torneoPartidaRepositorio)
        {
            _torneoRepositorio = torneoRepositorio;
            _torneoParticipanteRepositorio = torneoParticipanteRepositorio;
            _torneoPartidaRepositorio = torneoPartidaRepositorio;
        }

        public Torneo ObtenerTorneoPorId(int id)
        {
            return _torneoRepositorio.ObtenerPorId(id);
        }
        public Torneo CrearTorneo(Torneo torneo)
        {
            return _torneoRepositorio.CrearTorneo(torneo);
        }

        public IEnumerable<Torneo> ObtenerTorneosDisponibles()
        {
            return _torneoRepositorio.ObtenerTorneosDisponibles();
        }

        public void AgregarParticipante(int idTorneo, int idUsuario)
        {
            // Se obtiene el torneo si no esta llleno
            var torneo = _torneoRepositorio.ObtenerPorId(idTorneo);
            if (torneo is null)
            {
                throw new ArgumentException("El IdTorneo no es válido");
            }

            if (torneo.EstaLleno())
            {
                throw new ArgumentException("El torneo está lleno");
            }
            // Se obtiene el TorneoParticipante
            var participanteExistente = _torneoParticipanteRepositorio.ObtenerParticipante(idTorneo, idUsuario);
            // Si no existe se crea y se agrega al torneo
            if (participanteExistente is null)
            {
                var nuevoParticipante = new TorneoParticipante
                {
                    IdTorneo = idTorneo,
                    IdUsuario = idUsuario
                };

                nuevoParticipante = _torneoParticipanteRepositorio.CrearParticipante(nuevoParticipante);

                torneo.Participantes.Add(nuevoParticipante);
                // Si el torneo esta lleno se crean las partidas
                if (torneo.EstaLleno())
                {
                    // se calculan las rondas
                    int nroParticipantes = torneo.Participantes.Count;
                    int contador = 0;
                    while(nroParticipantes >= 2)
                    {
                        nroParticipantes = nroParticipantes / 2;
                        contador++;
                    }
                    int nroRondas = contador;
                    _torneoRepositorio.SetearRondas(idTorneo, nroRondas);
                    // get the id of the users
                    var idsUsuarios = torneo.Participantes.Select(p => p.IdUsuario).ToList();
                    // create the matches
                    crearPartidos(torneo, idsUsuarios);
                }
            }
        }

        public Torneo ProximaRonda(int idTorneo)
        {
            var torneo = _torneoRepositorio.ObtenerPorId(idTorneo);
            if (torneo is null)
            {
                throw new ArgumentException("El IdTorneo no es válido");
            }

            if(torneo.Terminado == true)
            {
                throw new ArgumentException("El torneo ha terminado");
            }
            
            var torneoPartidas = _torneoPartidaRepositorio.ObtenerTorneoPartidasPorRonda(idTorneo, torneo.nroRonda);
            // si hay partidas sin ganador, no se puede avanzar a la siguiente vuelta
            if (torneoPartidas.Any(x => x.Mesa.Ganador is null))
            {
                throw new ArgumentException("No se puede avanzar a la siguiente ronda, hay partidas sin ganador");
            }
            else
            {
                // Obtener ganadores
                var idsGanadores = torneoPartidas.Select(x => x.Mesa.Ganador.Value).ToList();
                if(idsGanadores.Count >= 2)
                    crearPartidos(torneo, idsGanadores);
                if(idsGanadores.Count == 1)
                {
                    // el torneo termino
                    throw new ArgumentException("El torneo termino");
                }
                return _torneoRepositorio.ObtenerPorId(idTorneo);
            }
        }

        private void crearPartidos(Torneo torneo, List<int> idsUsuarios)
        {
            _torneoRepositorio.SetearRondas(torneo.IdTorneo, torneo.nroRonda - 1);   
            bool esJugadorUno = true;
            int jugadorUnoId = 0;

            foreach (var idJugador in idsUsuarios)
            {
                if (esJugadorUno)
                {
                    jugadorUnoId = idJugador;
                    esJugadorUno = false;
                    continue;
                }

                var torneoPartida = new TorneoPartida()
                {
                    IdTorneo = torneo.IdTorneo,
                    nroRonda = torneo.nroRonda,
                    Mesa = new Mesa
                    {
                        CantidadJugadores = 2,
                        Estado = "Ocupada",
                        Tipo = "Privada",
                        FechaCreacion = DateTime.Now,
                        JugadorUno = jugadorUnoId,
                        JugadorDos = idJugador
                    }
                };
                _torneoPartidaRepositorio.CrearTorneoPartida(torneoPartida);

                esJugadorUno = true;
            }
        }
    }
}
