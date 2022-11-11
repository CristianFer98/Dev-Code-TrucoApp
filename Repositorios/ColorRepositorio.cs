using Entidades;
using Repositorios.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositorios
{
    public class ColorRepositorio:IColorRepositorio
    {
        private readonly DevCodeDBContext _dbContext;
        public ColorRepositorio(DevCodeDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Color> GetColoresPorIdProducto(int idProducto)
        {
            List<Color> colores = (from c in _dbContext.Colors
                              join pColor in _dbContext.ProductoColors
                              on c.IdColor equals pColor.IdColor
                              where pColor.IdProducto == idProducto
                              select c).ToList();
            return colores;
        }
    }
}
