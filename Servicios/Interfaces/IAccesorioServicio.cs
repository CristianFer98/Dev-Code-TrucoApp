using Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Servicios.Interfaces
{
    public interface IAccesorioServicio
    {
        public List<Accesorio> GetAccesorios();
        public void Comprar(int idAccesorio);
    }
}
