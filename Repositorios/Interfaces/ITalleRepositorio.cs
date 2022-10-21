using Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositorios.Interfaces
{
    public interface ITalleRepositorio
    {
        public List<Talle> GetTallesPorIdProducto(int idProducto);
    }
}
