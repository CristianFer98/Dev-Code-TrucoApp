using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entidades;

namespace Servicios.Interfaces
{
    public interface IMesaServicio
    {
        public List<Mesa> ObtenerMesasDisponibles();
        public Mesa ObtenerMesaPorId(int id);
        public void GuardarMesa(Mesa mesa);
        public void EntrarAJugarAMesa(int idMesa, int idJugador);
    }
}
