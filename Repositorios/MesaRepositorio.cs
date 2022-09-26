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
            return _dbContext.Mesas.Where(m => m.Estado == "Disponible").ToList();
        }

        public void GuardarMesa(Mesa mesa)
        {
            _dbContext.Mesas.Add(mesa);
            _dbContext.SaveChanges();
        }

        public void EntrarAJugarAMesa(int idMesa, int idJugador)
        {
            Mesa mesa = _dbContext.Mesas.Where(m => m.IdMesa == idMesa).First();
            mesa.JugadorDos = idJugador;
            mesa.Estado = "Ocupada";

            _dbContext.SaveChanges();

        }
    }
}
