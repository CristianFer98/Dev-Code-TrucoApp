using Entidades;
using Microsoft.EntityFrameworkCore;
using Repositorios.Interfaces;
using System.Linq;

namespace Repositorios
{
    public class TorneoParticipanteRepositorio : ITorneoParticipanteRepositorio
    {
        DevCodeDBContext _dbContext;

        public TorneoParticipanteRepositorio(DevCodeDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public TorneoParticipante CrearParticipante(TorneoParticipante torneoParticipante)
        {
            _dbContext.TorneoParticipantes.Add(torneoParticipante);
            _dbContext.SaveChanges();
            return torneoParticipante;
        }
        
        public TorneoParticipante ObtenerParticipante(int idTorneo, int idUsuario)
        {
            return _dbContext.TorneoParticipantes
                .Include(tp => tp.Torneo)
                .Include(tp => tp.Usuario)
                .FirstOrDefault(tp => tp.IdTorneo == idTorneo && tp.IdUsuario == idUsuario);
        }
    }
}
