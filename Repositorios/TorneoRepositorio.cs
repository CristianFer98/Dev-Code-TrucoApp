using Entidades;
using Microsoft.EntityFrameworkCore;
using Repositorios.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Repositorios
{
    public class TorneoRepositorio : ITorneoRepositorio
    {
        DevCodeDBContext _dbContext;
        
        public TorneoRepositorio(DevCodeDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Torneo CrearTorneo(Torneo torneo)
        {
            _dbContext.Add(torneo);
            _dbContext.SaveChanges();
            return torneo;
        }

        public IEnumerable<Torneo> ObtenerTorneosDisponibles()
        {
            return _dbContext.Torneos.Where(t=> t.Terminado == false);
        }
    }
}
