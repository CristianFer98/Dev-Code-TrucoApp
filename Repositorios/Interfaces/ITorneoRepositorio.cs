using Entidades;
using Repositorios.Model;
using System;
using System.Collections.Generic;

namespace Repositorios.Interfaces
{
    public interface ITorneoRepositorio
    {
        TorneoCri CrearTorneo(TorneoCri nuevoTorneo);
        List<Mesa> ObtenerMesasDelTorneo(int idTorneo);
        List<Usuario> ObtenerParticipantes(int idMesa);
        List<TorneoCri> ObtenerTorneosDisponibles();
        MesaInvoke AgregarAUnaMesaDisponible(int idTorneo, int idUsuario);
        bool ConsultarMesaLlena(int idMesa);
        JugadoresEnMesa ObtenerJugadores(int idMesa);
        Mesa CrearMesaFinal(int idTorneo, int uid);
    }
}
