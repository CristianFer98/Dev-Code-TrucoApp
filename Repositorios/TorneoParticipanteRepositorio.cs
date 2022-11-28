using Entidades;
using Microsoft.EntityFrameworkCore;
using Repositorios.Interfaces;
using System.Collections.Generic;
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
        
        public TorneoParticipante ObtenerParticipante(int torneoId, int idUsuario)
        {
            return _dbContext.TorneoParticipantes
                .Include(tp => tp.Usuario)
                .FirstOrDefault(tp => tp.TorneoId == torneoId && tp.IdUsuario == idUsuario);
        }
        public List<TorneoParticipante> ObtenerGanadoresUltimaRonda(int torneoId)
        {
            return _dbContext.TorneoParticipantes.Include(tp => tp.Usuario)
                .Where(tp => tp.TorneoId == torneoId && tp.NroRonda == tp.Torneo.NroRonda)
                .ToList();
        }
    }
}
