using System.Collections.Generic;
using Entidades;

namespace Repositorios.Interfaces
{
    public interface ITorneoParticipanteRepositorio
    {
        TorneoParticipante CrearParticipante(TorneoParticipante torneoParticipante);
        TorneoParticipante ObtenerParticipante(int idTorneo, int idUsuario);
        List<TorneoParticipante> ObtenerGanadoresUltimaRonda(int idTorneo);
    }
}
