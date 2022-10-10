using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Servicios.Juego
{
    public class Truco
    {
        public List<string> TipoTrucoEnJuego { get; set; }
        public int JugadorQueCantoPrimeroTruco { get; set; }
        public int JugadorQueDebeResponderTruco { get; set; }
        public bool EstadoTrucoCantado { get; set; }
    }
}
