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
        public int JugadorTres { get; set; }
        public int JugadorCuatro { get; set; }
        public List<int> EquipoUno { get; set; }
        public List<int> EquipoDos { get; set; }
        public List<Carta> CartasJugadorUno { get; set; }
        public List<Carta> CartasJugadorDos { get; set; }
        public List<Carta> CartasJugadorTres { get; set; }
        public List<Carta> CartasJugadorCuatro { get; set; }
        public List<Carta> CartasJugadasJugadorUno { get; set; }
        public List<Carta> CartasJugadasJugadorDos { get; set; }
        public List<Carta> CartasJugadasJugadorTres { get; set; }
        public List<Carta> CartasJugadasJugadorCuatro { get; set; }
        public int Turno { get; set; }
        public int Repartidor { get; set; }
        public int Mano { get; set; }
        public int? GanadorMano { get; set; }
        public int PuntosJugadorUno { get; set; }
        public int PuntosJugadorDos { get; set; }
        public int PuntosEquipoUno { get; set; }
        public int PuntosEquipoDos { get; set; }
        public Envido Envido { get; set; }
        public Truco Truco { get; set; }
        public int? GanadorPartida { get; set; }
        public int JugadasRealizadas { get; set; }
        public int JugadasAutomaticasJugadorUno { get; set; }
        public int JugadasAutomaticasJugadorDos { get; set; }
        public int CantidadJugadores { get; set; }
        public int IdJugador { get; set; }
    }
}
