using System.Collections.Generic;
using Entidades;

namespace Repositorios.Interfaces
{
    public interface ITorneoPartidaRepositorio
    {
        TorneoPartida CrearTorneoPartida(TorneoPartida torneoPartida);
        List<TorneoPartida> ObtenerTorneoPartidas(int id);
        List<TorneoPartida> ObtenerTorneoPartidasPorRonda(int id, int ronda);
    }
}
