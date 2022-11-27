using Entidades;
using Repositorios.Interfaces;
using Servicios.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MercadoPago.Resource.Preference;

namespace Servicios
{
    public class ProductoServicio:IProductoServicio
    {
        private readonly IProductoRepositorio _productoRepositorio;
        private readonly MercadoPagoServicio _mpServicio;

        public ProductoServicio(IProductoRepositorio productoRepositorio, MercadoPagoServicio mpServicio)
        {
            _productoRepositorio = productoRepositorio;
            _mpServicio = mpServicio;
            

        }

        public Producto GetProductoPorId(int idProducto)
        {
           return _productoRepositorio.GetProductoPorId(idProducto);
        }

        public List<Producto> GetProductos()
        {
            return _productoRepositorio.GetProductos();
        }

        public void ActualizarStock(int idProducto, int stockActual, int cantidadAComprar)
        {
            _productoRepositorio.ActualizarStock(idProducto, stockActual, cantidadAComprar);
        }

        public Task<string> ComprarProducto(int idProducto)
        {
            Producto prod = _productoRepositorio.GetProductoPorId(idProducto); 
            return _mpServicio.MercadoPagoAsync((int)prod.Precio, prod.Descripcion, (int)prod.CantidadAcomprar);
        }


    }
}
