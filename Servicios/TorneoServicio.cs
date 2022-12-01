using Entidades;
using Repositorios;
using Repositorios.Interfaces;
using Repositorios.Model;
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
      

        public TorneoServicio(ITorneoRepositorio torneoRepositorio)
        {
            _torneoRepositorio = torneoRepositorio;
          
        }

        public MesaInvoke AgregarAUnaMesaDisponible(int idTorneo, int idUsuario)
        {
           return _torneoRepositorio.AgregarAUnaMesaDisponible(idTorneo, idUsuario);
        }

        public bool consultarMesaLlena(int idMesa)
        {
            return _torneoRepositorio.ConsultarMesaLlena(idMesa);
        }

        public Mesa CrearMesaFinal(int idTorneo, int uid)
        {
            return _torneoRepositorio.CrearMesaFinal(idTorneo, uid);
        }

        public TorneoCri CrearTorneo(TorneoCri nuevoTorneo)
        {
           return _torneoRepositorio.CrearTorneo(nuevoTorneo);
        }

        public JugadoresEnMesa obtenerJugadores(int idMesa)
        {
            return _torneoRepositorio.ObtenerJugadores(idMesa);
        }

        public List<Mesa> ObtenerMesasDelTorneo(int idTorneo)
        {
            return _torneoRepositorio.ObtenerMesasDelTorneo(idTorneo);
        }

        public List<Usuario> ObtenerParticipantes(int idMesa)
        {
            return _torneoRepositorio.ObtenerParticipantes(idMesa);
        }

        public List<TorneoCri> ObtenerTorneosDisponibles()
        {
            return _torneoRepositorio.ObtenerTorneosDisponibles();
        }
    }
}
