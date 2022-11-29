using Entidades;
using System.Collections.Generic;

namespace Repositorios.Interfaces
{
    public interface ITorneoRepositorio
    {
        Torneo ObtenerPorId(int torneoId);
        List<Torneo> ObtenerTorneosDisponibles();
        Torneo CrearTorneo(Torneo torneo);
        void SetearRondas(int torneoId, int ronda);
        void EstaLleno(int torneoId);
    }
}
