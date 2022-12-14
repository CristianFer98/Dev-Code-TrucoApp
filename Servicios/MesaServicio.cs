using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Servicios.Interfaces;
using Repositorios.Interfaces;
using Entidades;

namespace Servicios
{
    public class MesaServicio : IMesaServicio
    {

        private readonly IMesaRepositorio _mesaRepositorio;
        private readonly ITorneoServicio _torneoServicio;
        public MesaServicio(IMesaRepositorio mesaRepositorio)
        {
            _mesaRepositorio = mesaRepositorio;
        }

        public List<Mesa> ObtenerMesasDisponibles()
        {
            return _mesaRepositorio.ObtenerMesasDisponibles();
        }

        public Mesa ObtenerMesaPorId(int id)
        {
            return _mesaRepositorio.ObtenerMesaPorId(id);
        }

        public Mesa GuardarMesa(Mesa mesa)
        {
            return _mesaRepositorio.GuardarMesa(mesa);
        }

        public Mesa EntrarAJugarAMesa(int idMesa, int idJugador)
        {
            return _mesaRepositorio.EntrarAJugarAMesa(idMesa, idJugador);
        }
        public void SetearGanador(int idMesa, int idJugador)
        {
            _mesaRepositorio.SetearGanador(idMesa, idJugador);
        }
    }
}
