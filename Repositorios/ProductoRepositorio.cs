using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entidades;
using Repositorios.Interfaces;

namespace Repositorios
{
    public class ProductoRepositorio:IProductoRepositorio
    {
        private readonly DevCodeDBContext _dbContext;

        public ProductoRepositorio(DevCodeDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Producto GetProductoPorId(int idProducto)
        {
            return _dbContext.Productos.Find(idProducto);
        }

        public List <Producto> GetProductos()
        {
            return _dbContext.Productos.Take(4).ToList();
        }

        public void ActualizarStock(int idProducto, int stockActual)
        {
            Producto producto = _dbContext.Productos.Find(idProducto);
            producto.Stock = stockActual;
            _dbContext.SaveChanges();
        }


    }
}
