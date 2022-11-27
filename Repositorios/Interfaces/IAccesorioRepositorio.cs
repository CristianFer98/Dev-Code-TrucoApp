using Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositorios.Interfaces
{
    public interface IAccesorioRepositorio
    {
        public List<Accesorio> GetAccesorios();
        public Accesorio GetAccesorioPorId(int idAccesorio);
        public void ActualizarEstadoComprado(int idAccesorio);
        public void ActualizarEstadosComprado(List<int> idsAccesorios);
    }
}
