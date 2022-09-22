using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entidades;
using Repositorios.Interfaces;

namespace Repositorios
{
    public class MesaRepositorio : IMesaRepositorio
    {

        private readonly DevCodeDBContext _dbContext;

        public MesaRepositorio(DevCodeDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Mesa> ObtenerMesasDisponibles()
        {

            return _dbContext.Mesas.ToList();

        }

        public void GuardarMesa(Mesa mesa)
        {
            _dbContext.Mesas.Add(mesa);
            _dbContext.SaveChanges();
        }


    }
}
