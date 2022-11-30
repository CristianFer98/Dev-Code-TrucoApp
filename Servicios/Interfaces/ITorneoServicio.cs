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
        List<Torneo> ObtenerTorneosDisponibles();
        Torneo CrearTorneo(Torneo torneo);
        void AgregarParticipante(int torneoId, int idUsuario);
        Torneo ObtenerTorneoPorId(int torneoId);
        Torneo ProximaRonda(int torneoId);
        List<TorneoPartida> ObtenerTorneosPartida(int torneoId);
    }
}
