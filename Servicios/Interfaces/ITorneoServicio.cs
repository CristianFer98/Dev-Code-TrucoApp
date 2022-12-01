using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entidades;
using Repositorios.Model;

namespace Servicios.Interfaces
{
    public interface ITorneoServicio
    {
        TorneoCri CrearTorneo(TorneoCri nuevoTorneo);
        public List<Mesa> ObtenerMesasDelTorneo(int idTorneo);
        List<Usuario> ObtenerParticipantes(int idMesa);
        List<TorneoCri> ObtenerTorneosDisponibles();
        MesaInvoke AgregarAUnaMesaDisponible(int idTorneo, int idUsuario);
        Boolean consultarMesaLlena(int idMesa);
        JugadoresEnMesa obtenerJugadores(int idMesa);
        Mesa CrearMesaFinal(int idTorneo, int uid);
    }
}
