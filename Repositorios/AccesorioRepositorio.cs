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
        private readonly DevCodeTrucoApp_dbContext _dbContext;

        public AccesorioRepositorio(DevCodeTrucoApp_dbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void Comprar(int idAccesorio)
        {
           Accesorio accesorio= _dbContext.Accesorios.Find(idAccesorio);
            accesorio.Comprado = true;
            _dbContext.SaveChanges();
        }

        public List<Accesorio> GetAccesorios()
        {
            return _dbContext.Accesorios.ToList();
        }

        public void ComprarTodo(List<int> idsAccesorios)
        {
            foreach (int i in idsAccesorios)
            {
                Accesorio accesorio = _dbContext.Accesorios.Find(i);
                accesorio.Comprado = true;
                _dbContext.SaveChanges();
            }
        }
    }
}
