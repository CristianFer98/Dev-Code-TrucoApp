﻿using Entidades;
using System.Collections.Generic;

namespace Repositorios.Interfaces
{
    public interface ITorneoRepositorio
    {
        Torneo ObtenerPorId(int idTorneo);
        List<Torneo> ObtenerTorneosDisponibles();
        Torneo CrearTorneo(Torneo torneo);
        void SetearRondas(int idTorneo, int ronda);
    }
}
