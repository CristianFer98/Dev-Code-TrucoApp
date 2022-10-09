using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Servicios.Juego
{
    public class Partida
    {
        public int Room { get; set; }
        public int JugadorUno { get; set; }
        public int JugadorDos { get; set; }
        public List<Carta> CartasJugadorUno { get; set; }
        public List<Carta> CartasJugadorDos { get; set; }
        public List<Carta> CartasJugadasJugadorUno { get; set; }
        public List<Carta> CartasJugadasJugadorDos { get; set; }
        public int Turno { get; set; }
        public int Repartidor { get; set; }
        public int Mano { get; set; }
        public int? GanadorMano { get; set; }
        public int PuntosJugadorUno { get; set; }
        public int PuntosJugadorDos { get; set; }
    }
}
