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

        public MesaServicio(IMesaRepositorio mesaRepositorio)
        {
            _mesaRepositorio = mesaRepositorio;
        }


        public List<Mesa> ObtenerMesasDisponibles()
        {
            return _mesaRepositorio.ObtenerMesasDisponibles();
        }
        public void GuardarMesa(Mesa mesa)
        {
            _mesaRepositorio.GuardarMesa(mesa);
        }
    }
}
