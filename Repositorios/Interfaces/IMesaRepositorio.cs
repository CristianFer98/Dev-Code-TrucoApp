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
        public Mesa ObtenerMesaPorId(int id);
        public Mesa GuardarMesa(Mesa mesa);
        public Mesa EntrarAJugarAMesa(int idMesa, int idJugador);
    }
}
