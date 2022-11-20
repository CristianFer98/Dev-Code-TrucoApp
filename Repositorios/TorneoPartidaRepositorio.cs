using Entidades;
using Microsoft.EntityFrameworkCore;
using Repositorios.Interfaces;
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
    }
}
