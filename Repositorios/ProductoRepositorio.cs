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

        public void ComprarProducto(int idProducto)
        {
            throw new NotImplementedException();
        }

        public Producto GetProductoPorId(int idProducto)
        {
            throw new NotImplementedException();
        }

        public List <Producto> GetProductos()
        {
            return _dbContext.Productos.Take(4).ToList();
        }
    }
}
