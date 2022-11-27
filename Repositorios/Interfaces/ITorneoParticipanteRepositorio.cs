using Entidades;
using System.Collections.Generic;

namespace Repositorios.Interfaces
{
    public interface ITorneoParticipanteRepositorio
    {
        TorneoParticipante CrearParticipante(TorneoParticipante torneoParticipante);
        TorneoParticipante ObtenerParticipante(int torneoId, int idUsuario);
        List<TorneoParticipante> ObtenerGanadoresUltimaRonda(int torneoId);
    }
}
