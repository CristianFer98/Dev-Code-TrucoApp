using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Servicios.Juego
{
    public class Jugada
    {
        public Carta CartaJugada { get; set; }
        public Partida Partida { get; set; }
        public string Canto { get; set; }
    }
}
