using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Servicios.Juego
{
    public class Jugada
    {
        public int Room { get; set; }
        public int Turno { get; set; }
        public Carta CartaJugada { get; set; }

    }
}
