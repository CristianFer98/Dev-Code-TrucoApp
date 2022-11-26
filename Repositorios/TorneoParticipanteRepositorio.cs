﻿using Entidades;
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

        public List<TorneoParticipante> ObtenerGanadoresUltimaRonda(int idTorneo)
        {
            return _dbContext.TorneoParticipantes.Include(tp => tp.Usuario)
                .Where(tp => tp.IdTorneo == idTorneo && tp.nroRonda == tp.Torneo.nroRonda)
                .ToList();
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