using Entidades;
using Microsoft.EntityFrameworkCore;
using Repositorios.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace Repositorios
{
    public class TorneoPartidaRepositorio : ITorneoPartidaRepositorio
    {
        DevCodeDBContext _dbContext;

        public TorneoPartidaRepositorio(DevCodeDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public TorneoPartida CrearTorneoPartida(TorneoPartida torneoPartida)
        {
            _dbContext.TorneoPartidas.Add(torneoPartida);
            _dbContext.SaveChanges();
            return torneoPartida;
        }
        public List<TorneoPartida> ObtenerTorneoPartidas(int torneoId)
        {
            return _dbContext.TorneoPartidas
                .Include(tp => tp.Mesa)
                .Where(tp => tp.TorneoId == torneoId)
                .ToList();
        }
        public List<TorneoPartida> ObtenerTorneoPartidasPorRonda(int torneoId, int ronda)
        {
            return _dbContext.TorneoPartidas
                .Include(tp => tp.Mesa)
                .Where(tp => tp.TorneoId == torneoId && tp.NroRonda == ronda)
                .ToList();
        }
        public TorneoPartida ObtenerTorneoMedianteMesa(int mesaId)
        {
            return _dbContext.TorneoPartidas.Where(tp => tp.IdMesa == mesaId).Single();
        }
    }
}
