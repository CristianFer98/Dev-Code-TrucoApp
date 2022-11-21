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
        public List<TorneoPartida> ObtenerTorneoPartidas(int id)
        {
            return _dbContext.TorneoPartidas
                .Include(tp => tp.Mesa)
                .Where(tp => tp.IdTorneo == id)
                .ToList();
        }
        public List<TorneoPartida> ObtenerTorneoPartidasPorRonda(int id, int ronda)
        {
            return _dbContext.TorneoPartidas
                .Include(tp => tp.Mesa)
                .Where(tp => tp.IdTorneo == id && tp.nroRonda == ronda)
                .ToList();
        }
    }
}
