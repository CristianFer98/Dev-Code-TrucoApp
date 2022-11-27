using Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MercadoPago.Resource.Preference;

namespace Servicios.Interfaces
{
    public interface IProductoServicio
    {
        public List<Producto> GetProductos();
        public Producto GetProductoPorId(int idProducto);
        public Task<string> ComprarProducto(int idProducto);
        public void ActualizarStock(int idProducto, int stockActual, int cantidadAComprar);
    }
}
