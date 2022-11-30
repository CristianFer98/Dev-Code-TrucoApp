using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entidades;

namespace Servicios.Interfaces
{
    public interface ITorneoServicio
    {
        int CrearTorneo(TorneoCri nuevoTorneo);
        public List<Mesa> ObtenerMesasDelTorneo(int idTorneo);
        List<Usuario> ObtenerParticipantes(int idMesa);
        List<TorneoCri> ObtenerTorneosDisponibles();
        Boolean AgregarAUnaMesaDisponible(int idTorneo, int idUsuario);
        Boolean consultarMesaIniciada(int idMesa);
    }
}
