using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Servicios.Juego
{
    public class Envido
    {
        public int TantoJugadorUno { get; set; }
        public int TantoJugadorDos { get; set; }
        public List<string> EnvidosCantados { get; set; }
        public int JugadorQueCantoPrimeroEnvido { get; set; }
        public int JugadorQueDebeResponderEnvido { get; set; }
        public bool EstadoEnvidoCantado { get; set; }
        public bool EstadoCantarTantos { get; set; }
        public int TantoCantadoJugadorUno { get; set; }
        public int TantoCantadoJugadorDos { get; set; }
    }
}
