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

        public List <Color> GetColoresPorIdProducto(int idProducto)
        {
           List<Color> cc =(from c in _dbContext.Colors 
                       join pc in _dbContext.ProductoColors
                       on c.IdColor equals pc.IdColor
                       where pc.IdProducto == idProducto
                       select c).ToList();
            return cc;
        }

        public Producto GetProductoPorId(int idProducto)
        {
            return _dbContext.Productos.Find(idProducto);
        }

        public List <Producto> GetProductos()
        {
            return _dbContext.Productos.Take(4).ToList();
        }


    }
}
