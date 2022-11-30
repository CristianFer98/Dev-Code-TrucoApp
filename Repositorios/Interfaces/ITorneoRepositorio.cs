using Entidades;
using System;
using System.Collections.Generic;

namespace Repositorios.Interfaces
{
    public interface ITorneoRepositorio
    {
        int CrearTorneo(TorneoCri nuevoTorneo);
        List<Mesa> ObtenerMesasDelTorneo(int idTorneo);
        List<Usuario> ObtenerParticipantes(int idMesa);
        List<TorneoCri> ObtenerTorneosDisponibles();
        Boolean AgregarAUnaMesaDisponible(int idTorneo, int idUsuario);
        bool ConsultarMesaIniciada(int idMesa);
    }
}
