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
        ITorneoRepositorio _torneoRepositorio;
        IMesaRepositorio _mesaRepositorio;
        public TorneoServicio(ITorneoRepositorio torneoRepositorio, IMesaRepositorio mesaRepositorio)
        {
            _torneoRepositorio = torneoRepositorio;
            _mesaRepositorio = mesaRepositorio;
        }

        public void CrearTorneo(Torneo torneo)
        {
            _torneoRepositorio.CrearTorneo(torneo);
        }

        public IEnumerable<Torneo> ObtenerTorneosDisponibles()
        {
            return _torneoRepositorio.ObtenerTorneosDisponibles();
        }
    }
}
