using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Servicios.Juego
{
    public class JuegoServicio
    {
        public static List<Carta> Mazo { get; set; } = new List<Carta>()
        {
            new Carta(1, 1, "Espada", 1, 1, "./Espada/1Espada.png"),
            new Carta(2, 1, "Basto", 2, 1, "./Basto/1Basto.png"),
            new Carta(3, 7, "Espada", 3, 7, "./Espada/7Espada.png"),
            new Carta(4, 7, "Oro", 4, 7, "./Oro/7Oro.png"),
            new Carta(5, 3, "Espada", 5, 3, "./Espada/3Espada.png"),
            new Carta(6, 3, "Copa", 5, 3, "./Copa/3Copa.png"),
            new Carta(7, 3, "Basto", 5, 3, "./Basto/3Basto.png"),
            new Carta(8, 3, "Oro", 5, 3, "./Oro/3Oro.png"),
            new Carta(9, 2, "Espada", 6, 2, "./Espada/2Espada.png"),
            new Carta(10, 2, "Oro", 6, 2, "./Oro/2Oro.png"),
            new Carta(11, 2, "Copa", 6, 2, "./Copa/2Copa.png"),
            new Carta(12, 2, "Basto", 6, 2, "./Basto/2Basto.png"),
            new Carta(13, 1, "Oro", 7, 1, "./Oro/1Oro.png"),
            new Carta(14, 1, "Copa", 7, 1, "./Copa/1Copa.png"),
            new Carta(15, 12, "Espada", 8, 0, "./Espada/12Espada.png"),
            new Carta(16, 12, "Oro", 8, 0, "./Oro/12Oro.png"),
            new Carta(17, 12, "Copa", 8, 0, "./Copa/12Copa.png"),
            new Carta(18, 12, "Basto", 8, 0, "./Basto/12Basto.png"),
            new Carta(19, 11, "Espada", 9, 0, "./Espada/11Espada.png"),
            new Carta(20, 11, "Oro", 9, 0, "./Oro/11Oro.png"),
            new Carta(21, 11, "Copa", 9, 0, "./Copa/11Copa.png"),
            new Carta(22, 11, "Basto", 9, 0, "./Basto/11Basto.png"),
            new Carta(23, 10, "Espada", 10, 0, "./Espada/10Espada.png"),
            new Carta(24, 10, "Oro", 10, 0, "./Oro/10Oro.png"),
            new Carta(25, 10, "Copa", 10, 0, "./Copa/10Copa.png"),
            new Carta(26, 10, "Basto", 10, 0, "./Basto/10Basto.png"),
            new Carta(27, 7, "Copa", 11, 7, "./Copa/7Copa.png"),
            new Carta(28, 7, "Basto", 11, 7, "./Basto/7Basto.png"),
            new Carta(29, 6, "Espada", 12, 6, "./Espada/6Espada.png"),
            new Carta(30, 6, "Oro", 12, 6, "./Oro/6Oro.png"),
            new Carta(31, 6, "Copa", 12, 6, "./Copa/6Copa.png"),
            new Carta(32, 6, "Basto", 12, 6, "./Basto/6Basto.png"),
            new Carta(33, 5, "Espada", 13, 5, "./Espada/5Espada.png"),
            new Carta(34, 5, "Oro", 13, 5, "./Oro/5Oro.png"),
            new Carta(35, 5, "Copa", 13, 5, "./Copa/5Copa.png"),
            new Carta(36, 5, "Basto", 13, 5, "./Basto/5Basto.png"),
            new Carta(37, 4, "Espada", 14, 4, "./Espada/4Espada.png"),
            new Carta(38, 4, "Oro", 14, 4, "./Oro/4Oro.png"),
            new Carta(39, 4, "Copa", 14, 4, "./Copa/4Copa.png"),
            new Carta(40, 4, "Basto", 14, 4, "./Basto/4Basto.png"),
        };


        public static List<Carta> RepartirCartas()
        {
            List<Carta> CartasRepartidas = new();
            List<int> Numeros = new();

            for (int i = 0; Numeros.Count < 6; i++)
            {
                Random Objeto = new();
                int RandomNumero = Objeto.Next(0, 40);

                if (!Numeros.Contains(RandomNumero))
                {
                    Numeros.Add(RandomNumero);
                    CartasRepartidas.Add(Mazo[RandomNumero]);
                }
            }
            return CartasRepartidas;
        }

        public static int AsignarTurno()
        {
            Random Objeto = new();
            int RandomNumero = Objeto.Next(1, 3);

            return RandomNumero;
        }


        public static Partida ActualizarPartida(Jugada jugada)
        {
            if (jugada.Partida.Turno == 1)
            {
                jugada.Partida.Turno = 2;
            }
            else if (jugada.Partida.Turno == 2)
            {
                jugada.Partida.Turno = 1;
            }

            return jugada.Partida;
        }

    }
}
