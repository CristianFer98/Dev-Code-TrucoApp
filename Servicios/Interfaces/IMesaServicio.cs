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
        public Mesa GuardarMesa(Mesa mesa);
        public Mesa EntrarAJugarAMesa(int idMesa, int idJugador);
        public void SetearGanador(int idMesa, int idJugador);
    }
}
