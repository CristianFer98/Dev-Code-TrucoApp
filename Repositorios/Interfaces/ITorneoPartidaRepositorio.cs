using Entidades;
using System.Collections.Generic;

namespace Repositorios.Interfaces
{
    public interface ITorneoPartidaRepositorio
    {
        TorneoPartida CrearTorneoPartida(TorneoPartida torneoPartida);
        List<TorneoPartida> ObtenerTorneoPartidas(int id);
        List<TorneoPartida> ObtenerTorneoPartidasPorRonda(int id, int ronda);
        TorneoPartida ObtenerTorneoMedianteMesa(int mesaId);
    }
}
