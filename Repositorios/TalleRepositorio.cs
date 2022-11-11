using Entidades;
using Repositorios.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositorios
{
    public class TalleRepositorio : ITalleRepositorio
    {
        private readonly DevCodeDBContext _dbContext;

        public TalleRepositorio(DevCodeDBContext dbContext)
        {
            _dbContext = dbContext;
        }
        public List<Talle> GetTallesPorIdProducto(int idProducto)
        {
                List<Talle> talles = (from t in _dbContext.Talles
                                  join pTalles in _dbContext.ProductoTalles
                                  on t.IdTalles equals pTalles.IdTalles
                                  where pTalles.IdProducto == idProducto
                                  select t).ToList();
            return talles; 
        }
    }
}
