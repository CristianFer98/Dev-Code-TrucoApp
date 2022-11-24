using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Servicios.Juego
{
    public class JuegoServicio2vs2
    {
        public static int AsignarTurno2vs2(int repartidor)
        {
            List<int> jugadores = new() { 1, 4, 2, 3 };
            int indexRepartidor = jugadores.IndexOf(repartidor);
            int turno = repartidor == 3 ? 1 : jugadores[indexRepartidor + 1];
            return turno;
        }

        public static int AsignarRepartidor2vs2(bool primeraMano, int repartidorAnterior)
        {
            int Repartidor;
            if (primeraMano)
            {
                Random Objeto = new();
                Repartidor = Objeto.Next(1, 5);
            }
            else
            {
                List<int> jugadores = new() { 1, 4, 2, 3 };
                int indexRepartidor = jugadores.IndexOf(repartidorAnterior);
                Repartidor = repartidorAnterior == 3 ? 1 : jugadores[indexRepartidor + 1];
            }
            return Repartidor;
        }

        public static int CartaGanadora2vs2(Carta cartaJugadorUno, Carta cartaJugadorDos, Carta cartaJugadorTres, Carta cartaJugadorCuatro)
        {
            List<Carta> rankingCartas = new List<Carta>() { cartaJugadorUno, cartaJugadorDos, cartaJugadorTres, cartaJugadorCuatro };

            Carta masAlta = rankingCartas.OrderBy(c => c.RankingValorTruco).ToList()[0];
            Carta segundaMasAlta = rankingCartas.OrderBy(c => c.RankingValorTruco).ToList()[1];

            if (masAlta.RankingValorTruco == segundaMasAlta.RankingValorTruco)
            {
                return 0;
            }
            else
            {
                return rankingCartas.IndexOf(masAlta) + 1;
            }
        }

        public static int EquipoGanadorMano(int jugadorGanadorMano, Partida partida)
        {
            if (jugadorGanadorMano != 0)
            {
                if (partida.EquipoUno.Contains(jugadorGanadorMano))
                {
                    return 1;
                }
                else if (partida.EquipoDos.Contains(jugadorGanadorMano))
                {
                    return 2;
                }
                else
                {
                    return 0;
                }
            }
            else
            {
                return 0;
            }
        }


        public static Partida ActualizarPartida2vs2(Partida partida)
        {
            int? GanadorManoUno = (partida.CartasJugadasJugadorUno.Count > 0 && partida.CartasJugadasJugadorDos.Count > 0) && partida.CartasJugadasJugadorTres.Count > 0 && partida.CartasJugadasJugadorCuatro.Count > 0 ? CartaGanadora2vs2(partida.CartasJugadasJugadorUno[0], partida.CartasJugadasJugadorDos[0], partida.CartasJugadasJugadorTres[0], partida.CartasJugadasJugadorCuatro[0]) : null;

            int? GanadorManoDos = (partida.CartasJugadasJugadorUno.Count > 1 && partida.CartasJugadasJugadorDos.Count > 1) && partida.CartasJugadasJugadorTres.Count > 1 && partida.CartasJugadasJugadorCuatro.Count > 1 ? CartaGanadora2vs2(partida.CartasJugadasJugadorUno[1], partida.CartasJugadasJugadorDos[1], partida.CartasJugadasJugadorTres[1], partida.CartasJugadasJugadorCuatro[0]) : null;

            int? GanadorManoTres = (partida.CartasJugadasJugadorUno.Count > 2 && partida.CartasJugadasJugadorDos.Count > 2) && partida.CartasJugadasJugadorTres.Count > 2 && partida.CartasJugadasJugadorCuatro.Count > 2 ? CartaGanadora2vs2(partida.CartasJugadasJugadorUno[2], partida.CartasJugadasJugadorDos[2], partida.CartasJugadasJugadorTres[2], partida.CartasJugadasJugadorCuatro[0]) : null;

            int? EquipoGanadorManoUno = (partida.CartasJugadasJugadorUno.Count > 0 && partida.CartasJugadasJugadorDos.Count > 0) && partida.CartasJugadasJugadorTres.Count > 0 && partida.CartasJugadasJugadorCuatro.Count > 0 ? EquipoGanadorMano(CartaGanadora2vs2(partida.CartasJugadasJugadorUno[0], partida.CartasJugadasJugadorDos[0], partida.CartasJugadasJugadorTres[0], partida.CartasJugadasJugadorCuatro[0]), partida) : null;

            int? EquipoGanadorManoDos = (partida.CartasJugadasJugadorUno.Count > 1 && partida.CartasJugadasJugadorDos.Count > 1) && partida.CartasJugadasJugadorTres.Count > 1 && partida.CartasJugadasJugadorCuatro.Count > 1 ? EquipoGanadorMano(CartaGanadora2vs2(partida.CartasJugadasJugadorUno[1], partida.CartasJugadasJugadorDos[1], partida.CartasJugadasJugadorTres[1], partida.CartasJugadasJugadorCuatro[0]), partida) : null;

            int? EquipoGanadorManoTres = (partida.CartasJugadasJugadorUno.Count > 2 && partida.CartasJugadasJugadorDos.Count > 2) && partida.CartasJugadasJugadorTres.Count > 2 && partida.CartasJugadasJugadorCuatro.Count > 2 ? EquipoGanadorMano(CartaGanadora2vs2(partida.CartasJugadasJugadorUno[2], partida.CartasJugadasJugadorDos[2], partida.CartasJugadasJugadorTres[2], partida.CartasJugadasJugadorCuatro[0]), partida) : null;

            if (partida.Mano == 1)
            {
                if (EquipoGanadorManoUno != null)
                {
                    if (EquipoGanadorManoUno != 0)
                    {
                        partida.Turno = (int)GanadorManoUno;
                    }
                    else
                    {
                        partida.Turno = AsignarTurno2vs2(partida.Repartidor);
                    }
                    partida.Mano = 2;
                }
                else
                {
                    partida.Turno = AsignarTurno2vs2(partida.Turno);
                }
            }
            else if (partida.Mano == 2)
            {
                if (EquipoGanadorManoDos != null)
                {
                    if (EquipoGanadorManoDos != 0)
                    {
                        if (EquipoGanadorManoUno == EquipoGanadorManoDos)
                        {
                            //Gana el que ganó primera y segunda mano
                            //partida = AsignarPuntosAGanadorMano(partida, (int)GanadorManoDos);
                            partida.Turno = 0;
                        }
                        else
                        {
                            if (EquipoGanadorManoDos != 0)
                            {
                                //Definen en tercera mano
                                partida.Turno = (int)GanadorManoDos;
                                partida.Mano = 3;
                            }
                            else
                            {
                                //Gana el que ganó la mano uno porque en la mano dos empardaron
                                //partida = AsignarPuntosAGanadorMano(partida, (int)GanadorManoUno);
                                partida.Turno = 0;
                            }
                        }
                    }
                    else
                    {
                        if (EquipoGanadorManoDos != 0)
                        {
                            //Gana el que gano la segunda mando porque en la mano uno empardaron
                            //partida = AsignarPuntosAGanadorMano(partida, (int)GanadorManoDos);
                            partida.Turno = 0;
                        }
                        else
                        {
                            //Vuelve a empardar y definen en tercera mano
                            partida.Turno = AsignarTurno2vs2(partida.Turno);
                            partida.Mano = 3;
                        }
                    }
                }
                else
                {
                    partida.Turno = AsignarTurno2vs2(partida.Turno);
                }
            }
            else
            {
                if (partida.Mano == 3)
                {
                    if (EquipoGanadorManoTres != null)
                    {
                        if (EquipoGanadorManoTres != 0)
                        {
                            //Gana el que gano una de las dos primeras manos y la mano tres.
                            //partida = AsignarPuntosAGanadorMano(partida, (int)GanadorManoTres);
                            partida.Turno = 0;
                        }
                        else
                        {
                            if (EquipoGanadorManoUno != 0)
                            {
                                //Gana el que gano la mano uno porque empardaron en la tercera.
                                //partida = AsignarPuntosAGanadorMano(partida, (int)GanadorManoUno);
                                partida.Turno = 0;
                            }
                            else
                            {
                                //Gana el que es mano porque empardaron las tres manos.
                                //partida = AsignarPuntosAGanadorMano(partida, CambiarTurno(partida.Repartidor));
                                partida.Turno = 0;
                            }
                        }
                    }
                    else
                    {
                        partida.Turno = AsignarTurno2vs2(partida.Turno);
                    }
                }
            }

            return partida;
        }

    }
}
