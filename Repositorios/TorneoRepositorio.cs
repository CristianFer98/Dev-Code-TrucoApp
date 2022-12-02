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

        public Torneo ObtenerPorId(int torneoId)
        {
            return _dbContext.Torneos
                .Include(t => t.Participantes)
                .Include(t => t.Partidas)
                .Where(t => t.TorneoId == torneoId)
                .FirstOrDefault();
        }

        public Torneo CrearTorneo(Torneo torneo)
        {
            _dbContext.Torneos.Add(torneo);
            _dbContext.SaveChanges();
            return torneo;
        }

        public List<Torneo> ObtenerTorneosDisponibles()
        {
            return _dbContext.Torneos.Where(t=> t.Terminado == false).ToList();
        }
        public void SetearRondas(int torneoId, int ronda)
        {
            var torneo = _dbContext.Torneos.Where(t => t.TorneoId == torneoId).FirstOrDefault();
            torneo.NroRonda = ronda;
            _dbContext.SaveChanges();
        }
        public void EstaLleno(int torneoId)
        {
            var torneo = _dbContext.Torneos.Where(t => t.TorneoId == torneoId).FirstOrDefault();
            torneo.estaLleno = true;
            _dbContext.SaveChanges();
        }
        public void TerminarTorneo(int torneoId , int ganadorId)
        {
            var torneo = _dbContext.Torneos.Where(t => t.TorneoId == torneoId).FirstOrDefault();
            torneo.GanadorTorneo = ganadorId;
            torneo.Terminado = true;
            _dbContext.SaveChanges();
        }
    }
}
