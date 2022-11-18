using Entidades;
using Repositorios.Interfaces;
using Servicios.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Servicios
{
    public class AccesorioServicio : IAccesorioServicio
    {
        private readonly IAccesorioRepositorio _accesorioRepositorio;
        private readonly MercadoPagoServicio _mpServicio;

        public AccesorioServicio(IAccesorioRepositorio accesorioRepositorio, MercadoPagoServicio mpServicio)
        {
            _accesorioRepositorio = accesorioRepositorio;
            _mpServicio = mpServicio;
        }

        public void ActualizarEstadoComprado(int idAccesorio)
        {
            _accesorioRepositorio.ActualizarEstadoComprado(idAccesorio);
        }

        public Task<string> ComprarAccesorio(int idAccesorio)
        {
            Accesorio acc = _accesorioRepositorio.GetAccesorioPorId(idAccesorio);
            return _mpServicio.MercadoPagoAsync((int)acc.Precio, acc.Descripcion,1);
        }

        public List<Accesorio> GetAccesorios()
        {
            return _accesorioRepositorio.GetAccesorios();
        }

        public void ComprarTodo(List<int> idsAccesorios)
        {
            _accesorioRepositorio.ComprarTodo(idsAccesorios);
        }

    }
}
