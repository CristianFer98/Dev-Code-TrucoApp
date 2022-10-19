using Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Servicios.Interfaces
{
    public interface IProductoServicio
    {
        public List<Producto> GetProductos();
        public Producto GetProductoPorId(int idProducto);
        public void ComprarProducto(int idProducto);
        public List<Color> GetColoresPorIdProducto(int idProducto);
        public List<Talle> GetTallesPorIdProducto(int idProducto);

    }
}
