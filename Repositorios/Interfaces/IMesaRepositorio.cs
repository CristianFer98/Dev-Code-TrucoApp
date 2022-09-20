using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entidades;

namespace Repositorios.Interfaces
{
    public interface IMesaRepositorio
    {
        public List<Mesa> ObtenerMesasDisponibles();
    }
}
