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
        DevCodeTrucoApp_dbContext _dbContext;

        public TorneoRepositorio(DevCodeTrucoApp_dbContext dbContext)
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
            return null; //_dbContext.Torneos.Where(t=> t.Terminado == false);
        }
    }
}
