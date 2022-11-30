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
      

        public TorneoServicio(ITorneoRepositorio torneoRepositorio)
        {
            _torneoRepositorio = torneoRepositorio;
          
        }

        public Boolean AgregarAUnaMesaDisponible(int idTorneo, int idUsuario)
        {
           return _torneoRepositorio.AgregarAUnaMesaDisponible(idTorneo, idUsuario);
        }

        public bool consultarMesaIniciada(int idMesa)
        {
            return _torneoRepositorio.ConsultarMesaIniciada(idMesa);
        }

        public int CrearTorneo(TorneoCri nuevoTorneo)
        {
           return _torneoRepositorio.CrearTorneo(nuevoTorneo);
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
