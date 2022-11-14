using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entidades;

namespace Repositorios.Interfaces
{
    public interface IProductoRepositorio
    {
        public List<Producto> GetProductos();
        public Producto GetProductoPorId(int idProducto);
        public void ActualizarStock(int idProducto, int stockActual);
    }
}

