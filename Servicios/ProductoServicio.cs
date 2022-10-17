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
    public class ProductoServicio:IProductoServicio
    {
        private readonly IProductoRepositorio _productoRepositorio;

        public ProductoServicio(IProductoRepositorio productoRepositorio)
        {
            _productoRepositorio = productoRepositorio;
        }

        public void ComprarProducto(int idProducto)
        {
            throw new NotImplementedException();
        }

        public Producto GetProductoPorId(int idProducto)
        {
            throw new NotImplementedException();
        }

        public List<Producto> GetProductos()
        {
            return _productoRepositorio.GetProductos();
        }
    }
}
