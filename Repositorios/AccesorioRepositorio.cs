using Entidades;
using Repositorios.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositorios
{
    public class AccesorioRepositorio:IAccesorioRepositorio
    {
        private readonly DevCodeDBContext _dbContext;

        public AccesorioRepositorio(DevCodeDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Accesorio> GetAccesorios()
        {
            return _dbContext.Accesorios.ToList();
        }
    }
}
