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

        public Mesa ObtenerMesaPorId(int id)
        {
            return _dbContext.Mesas.Where(m => m.IdMesa == id).Single();
        }

        public Mesa GuardarMesa(Mesa mesa)
        {
            _dbContext.Mesas.Add(mesa);
            _dbContext.SaveChanges();
            return mesa;
        }

        public Mesa EntrarAJugarAMesa(int idMesa, int idJugador)
        {
            Mesa mesa = _dbContext.Mesas.Where(m => m.IdMesa == idMesa).First();
            if (mesa.CantidadJugadores == 2)
            {
                mesa.JugadorDos = idJugador;
                mesa.Estado = "Ocupada";
            }
            else
            {
                if (mesa.JugadorDos == null)
                {
                    mesa.JugadorDos = idJugador;
                }
                else if (mesa.JugadorTres == null)
                {
                    mesa.JugadorTres = idJugador;
                }
                else if (mesa.JugadorCuatro == null)
                {
                    mesa.JugadorCuatro = idJugador;
                    mesa.Estado = "Ocupada";
                }
            }

            _dbContext.SaveChanges();

            return mesa;

        }
        public void SetearGanador(int idMesa, int idJugador)
        {
            Mesa mesa = _dbContext.Mesas.Where(m => m.IdMesa == idMesa).Single();
            mesa.Ganador = idJugador;
            _dbContext.SaveChanges();
        }
    }
}
