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
            return _mpServicio.MercadoPagoAsync((int)acc.Precio,"Avatar Accesorio",1);
        }

        public List<Accesorio> GetAccesorios()
        {
            return _accesorioRepositorio.GetAccesorios();
        }

        public void ActualizarEstadosComprado(List<int> idsAccesorios)
        {
            _accesorioRepositorio.ActualizarEstadosComprado(idsAccesorios);

        }
        public Task<string> ComprarTodo(int opcionIdsAccesoriosComprados)
        {
            int[] idsAccesoriosPelo = { 1, 2, 3, 4, 5, 6 };
            int [] idsAccesoriosRopa = { 7, 8, 9, 10, 11 };
            string descripcion = "Avatar Accesorios";
            int cantidad = 0;
            int precio = 0;

            switch (opcionIdsAccesoriosComprados)
            {
                case 1:
                    cantidad = idsAccesoriosPelo.Length;
                    foreach (int i in idsAccesoriosPelo)
                    {
                        Accesorio accesorio = _accesorioRepositorio.GetAccesorioPorId(i);
                        precio = (int)accesorio.Precio;
                    }
                    break;
                case 2:
                     cantidad = idsAccesoriosRopa.Length;
                    foreach (int i in idsAccesoriosRopa)
                    {
                        Accesorio accesorio = _accesorioRepositorio.GetAccesorioPorId(i);
                        precio = (int)accesorio.Precio;
                    }
                    break;
            }


            return _mpServicio.MercadoPagoAsync(precio, descripcion, cantidad);



        }
    }
}
