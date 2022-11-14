using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entidades;

namespace Servicios.Interfaces
{
    public interface ITorneoServicio
    {
        IEnumerable<Torneo> ObtenerTorneosDisponibles();
        void CrearTorneo(Torneo torneo);
    }
}
