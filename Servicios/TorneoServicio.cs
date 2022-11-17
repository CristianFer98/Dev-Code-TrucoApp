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
            var torneo = _torneoRepositorio.ObtenerPorId(idTorneo);
            if (torneo is null)
            {
                throw new ArgumentException("El IdTorneo no es válido");
            }

            if (torneo.EstaLleno())
            {
                throw new ArgumentException("El torneo está lleno");
            }

            var participanteExistente = _torneoParticipanteRepositorio.ObtenerParticipante(idTorneo, idUsuario);
            if (participanteExistente is null)
            {
                var nuevoParticipante = new TorneoParticipante
                {
                    IdTorneo = idTorneo,
                    IdUsuario = idUsuario
                };

                nuevoParticipante = _torneoParticipanteRepositorio.CrearParticipante(nuevoParticipante);

                torneo.Participantes.Add(nuevoParticipante);

                if (torneo.EstaLleno())
                {
                    bool esJugadorUno = true;
                    int jugadorUnoId = 0; //1

                    foreach (var participante in torneo.Participantes)
                    {
                        if (esJugadorUno)
                        {
                            jugadorUnoId = participante.IdUsuario;
                            esJugadorUno = false;
                            continue;
                        }

                        var torneoPartida = new TorneoPartida()
                        {
                            IdTorneo = idTorneo,
                            Mesa = new Mesa
                            {
                                CantidadJugadores = 2,
                                Estado = "Ocupada",
                                Tipo = "Privada",
                                FechaCreacion = DateTime.Now,
                                JugadorUno = jugadorUnoId,
                                JugadorDos = participante.IdUsuario
                            }
                        };

                        _torneoPartidaRepositorio.CrearTorneoPartida(torneoPartida);

                        esJugadorUno = true;
                    }
                }
            }
        }
    }
}
