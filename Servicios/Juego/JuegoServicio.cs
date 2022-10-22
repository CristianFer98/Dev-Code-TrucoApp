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

        public static Partida ActualizarPartida(Partida partida)
        {
            //Gana mano jugadorUno: 1, gana mano jugadorDos: 2, empardan 0, si es null es que un solo jugador tiró una carta y el otro todavía no tiro.
            int? GanadorManoUno = (partida.CartasJugadasJugadorUno.Count > 0 && partida.CartasJugadasJugadorDos.Count > 0) ? CartaGanadora(partida.CartasJugadasJugadorUno[0], partida.CartasJugadasJugadorDos[0]) : null;

            int? GanadorManoDos = (partida.CartasJugadasJugadorUno.Count > 1 && partida.CartasJugadasJugadorDos.Count > 1) ? CartaGanadora(partida.CartasJugadasJugadorUno[1], partida.CartasJugadasJugadorDos[1]) : null;

            int? GanadorManoTres = (partida.CartasJugadasJugadorUno.Count > 2 && partida.CartasJugadasJugadorDos.Count > 2) ? CartaGanadora(partida.CartasJugadasJugadorUno[2], partida.CartasJugadasJugadorDos[2]) : null;

            partida.JugadasRealizadas += 1;

            if (partida.Mano == 1)
            {
                if (GanadorManoUno != null)
                {
                    if (GanadorManoUno != 0)
                    {
                        partida.Turno = (int)GanadorManoUno;
                    }
                    else
                    {
                        partida.Turno = CambiarTurno(partida.Repartidor);
                    }
                    partida.Mano = 2;
                }
                else
                {
                    partida.Turno = CambiarTurno(partida.Turno);
                }
            }
            else if (partida.Mano == 2)
            {
                if (GanadorManoDos != null)
                {
                    if (GanadorManoUno != 0)
                    {
                        if (GanadorManoUno == GanadorManoDos)
                        {
                            //Gana el que ganó primera y segunda mano
                            partida = AsignarPuntosAGanadorMano(partida, (int)GanadorManoDos);
                        }
                        else
                        {
                            if (GanadorManoDos != 0)
                            {
                                //Definen en tercera mano
                                partida.Turno = (int)GanadorManoDos;
                                partida.Mano = 3;
                            }
                            else
                            {
                                //Gana el que ganó la mano uno porque en la mano dos empardaron
                                partida = AsignarPuntosAGanadorMano(partida, (int)GanadorManoUno);
                            }
                        }
                    }
                    else
                    {
                        if (GanadorManoDos != 0)
                        {
                            //Gana el que gano la segunda mando porque en la mano uno empardaron
                            partida = AsignarPuntosAGanadorMano(partida, (int)GanadorManoDos);
                        }
                        else
                        {
                            //Vuelve a empardar y definen en tercera mano
                            partida.Turno = CambiarTurno(partida.Repartidor);
                            partida.Mano = 3;
                        }
                    }
                }
                else
                {
                    partida.Turno = CambiarTurno(partida.Turno);
                }
            }
            else
            {
                if (partida.Mano == 3)
                {
                    if (GanadorManoTres != null)
                    {
                        if (GanadorManoTres != 0)
                        {
                            //Gana el que gano una de las dos primeras manos y la mano tres.
                            partida = AsignarPuntosAGanadorMano(partida, (int)GanadorManoTres);
                        }
                        else
                        {
                            if (GanadorManoUno != 0)
                            {
                                //Gana el que gano la mano uno porque empardaron en la tercera.
                                partida = AsignarPuntosAGanadorMano(partida, (int)GanadorManoUno);
                            }
                            else
                            {
                                //Gana el que es mano porque empardaron las tres manos.
                                partida = AsignarPuntosAGanadorMano(partida, CambiarTurno(partida.Repartidor));
                            }
                        }
                    }
                    else
                    {
                        partida.Turno = CambiarTurno(partida.Turno);
                    }
                }
            }

            return partida;
        }

        public static Partida SumarPuntosTruco(Partida partida, int ganadorMano, int puntosASumar)
        {
            if (ganadorMano == 1)
            {
                partida.PuntosJugadorUno += puntosASumar;

            }
            else
            {
                partida.PuntosJugadorDos += puntosASumar;
            }

            return partida;
        }

        public static Partida AsignarPuntosAGanadorMano(Partida partida, int ganadorMano)
        {

            partida.Turno = 0;
            partida.Truco.JugadorQueCantoPrimeroTruco = 0;
            partida.Truco.JugadorQueDebeResponderTruco = 0;
            partida.GanadorMano = ganadorMano;
            int PuntosGanadosTruco = CalcularPuntosTruco(partida.Truco.TrucosCantados);

            if (partida.Truco.TrucosCantados.Count == 0)
            {
                partida = SumarPuntosTruco(partida, ganadorMano, 1);
            }
            else
            {
                if (partida.Truco.TrucosCantados[0] == "no quiero" && partida.Envido.EnvidosCantados.Count == 0 && partida.Mano == 1 && partida.CartasJugadasJugadorUno.Count == 0 && partida.CartasJugadasJugadorDos.Count == 0)
                {
                    partida = SumarPuntosTruco(partida, ganadorMano, 2);
                }
                else
                {
                    partida = SumarPuntosTruco(partida, ganadorMano, PuntosGanadosTruco);
                }
            }

            return partida;
        }

        public static int CambiarTurno(int turno)
        {
            if (turno == 1)
            {
                return 2;
            }
            else
            {
                return 1;
            }
        }

        public static int CartaGanadora(Carta cartaJugadorUno, Carta cartaJugadorDos)
        {
            if (cartaJugadorUno.RankingValorTruco < cartaJugadorDos.RankingValorTruco)
            {
                return 1;
            }
            else if (cartaJugadorUno.RankingValorTruco > cartaJugadorDos.RankingValorTruco)
            {
                return 2;
            }
            else
            {
                return 0;
            }
        }

        public static List<string> EncontrarCartasMismoPalo(List<Carta> cartas)
        {
            List<string> PalosDeCartas = cartas.Select(c => c.Palo).ToList();

            List<string> PalosRepetidos = new();

            for (int i = 0; i < PalosDeCartas.Count; i++)
            {
                if (PalosDeCartas.IndexOf(PalosDeCartas[i]) != i)
                {
                    PalosRepetidos.Add(PalosDeCartas[i]);
                }
            }

            return PalosRepetidos;
        }

        public static int ContarTantoJugador(List<Carta> cartas)
        {
            if (EncontrarCartasMismoPalo(cartas).Count > 0)
            {
                List<Carta> ListaCartasMismoPalo = cartas.Where(c => c.Palo == EncontrarCartasMismoPalo(cartas)[0]).ToList();
                return EncontrarCartasMismoPalo(cartas).Count == 1
                    ? ListaCartasMismoPalo[0].RankingValorEnvido + ListaCartasMismoPalo[1].RankingValorEnvido + 20
                    : ListaCartasMismoPalo.OrderByDescending(c => c.RankingValorEnvido).ToList()[0].RankingValorEnvido +
                      ListaCartasMismoPalo.OrderByDescending(c => c.RankingValorEnvido).ToList()[1].RankingValorEnvido + 20;
            }
            else
            {
                return cartas.OrderByDescending(c => c.RankingValorEnvido).ToList()[0].RankingValorEnvido;
            }
        }

        public static int CalcularPuntosEnvido(List<string> envidosCantados, int puntosJugadorUno, int puntosJugadorDos)
        {

            List<dynamic> envidosCantadosDinamicos = envidosCantados.Cast<dynamic>().ToList();
            List<dynamic> envidosCantadosConvertidos = envidosCantadosDinamicos.Select(e => e == "envido" ? 2 : e == "real envido" ? 3 : e).ToList();


            if (envidosCantadosConvertidos.Contains("quiero"))
            {
                if (!envidosCantadosConvertidos.Contains("falta envido"))
                {
                    envidosCantadosConvertidos.RemoveAt(envidosCantadosConvertidos.Count - 1);
                }
                else
                {
                    envidosCantadosConvertidos.Clear();
                    envidosCantadosConvertidos.Add(puntosJugadorUno > puntosJugadorDos ?
                    30 - puntosJugadorUno : 30 - puntosJugadorDos);
                }
            }
            else
            {
                envidosCantadosConvertidos.RemoveAt(envidosCantadosConvertidos.Count - 1);
                envidosCantadosConvertidos.RemoveAt(envidosCantadosConvertidos.Count - 1);
                if (envidosCantadosConvertidos.Count == 0) envidosCantadosConvertidos.Add(1);
            }

            return envidosCantadosConvertidos.Cast<int>().ToList().Sum();
        }

        public static int EnvidoMasAlto(int repartidor, int tantoJugadorUno, int tantoJugadorDos)
        {
            if (tantoJugadorUno > tantoJugadorDos)
            {
                return 1;
            }
            else if (tantoJugadorUno < tantoJugadorDos)
            {
                return 2;
            }
            else
            {
                return repartidor == 1 ? 2 : 1;
            }
        }

        public static int CalcularPuntosTruco(List<string> trucosCantados)
        {
            if (trucosCantados.Count == 0)
            {
                return 1;
            }
            else
            {
                List<string> trucosCantadosDinamicos = trucosCantados.Cast<string>().ToList();
                List<string> trucosCantadosConvertidos = trucosCantadosDinamicos.Select(e => e == "truco" ? "2" : e == "re truco" ? "3" : e == "vale cuatro" ? "4" : e).ToList();

                List<string> trucosCantadosReconvertidos = trucosCantadosConvertidos.Where(e => e != "quiero").ToList();

                if (trucosCantadosReconvertidos.Count != 1)
                {
                    if (trucosCantadosConvertidos.Contains("no quiero"))
                    {
                        if (trucosCantadosConvertidos[^2] != "quiero")
                        {
                            trucosCantadosReconvertidos.RemoveAt(trucosCantadosReconvertidos.Count - 1);
                            trucosCantadosReconvertidos.RemoveAt(trucosCantadosReconvertidos.Count - 1);
                            if (trucosCantadosReconvertidos.Count == 0)
                            {
                                trucosCantadosReconvertidos.Add("1");
                            }
                        }
                        else
                        {
                            trucosCantadosReconvertidos.RemoveAt(trucosCantadosReconvertidos.Count - 1);
                            if (trucosCantadosReconvertidos.Count == 0)
                            {
                                trucosCantadosReconvertidos.Add("1");
                            }
                        }
                    }
                }
                else
                {
                    trucosCantadosReconvertidos.RemoveAt(trucosCantadosReconvertidos.Count - 1);
                    trucosCantadosReconvertidos.Add("1");
                }

                return Int32.Parse(trucosCantadosReconvertidos[^1]);
            }

        }

        public static Partida EnvidoTurnos(Partida partida)
        {
            partida.Envido.JugadorQueCantoEnvido = partida.Turno;
            partida.JugadasRealizadas += 1;
            int jugadorQueCantaEnvido = partida.Turno;

            if (partida.Envido.EnvidosCantados[^1] == "quiero")
            {
                partida.Turno = JuegoServicio.CambiarTurno(partida.Repartidor);
                partida.Envido.EstadoEnvidoCantado = false;
                partida.Envido.EstadoCantarTantos = true;
                partida.Envido.JugadorQueDebeResponderEnvido = JuegoServicio.CambiarTurno(partida.Repartidor);
            }
            else if (partida.Envido.EnvidosCantados[^1] == "no quiero")
            {
                partida.Turno = partida.Envido.JugadorQueCantoPrimeroEnvido;
                partida.Envido.EstadoEnvidoCantado = false;
                partida.Envido.EstadoCantarTantos = false;
                partida.Envido.JugadorQueDebeResponderEnvido = 0;
                partida.Envido.JugadorQueCantoPrimeroEnvido = 0;

                if (jugadorQueCantaEnvido == 1)
                {
                    partida.PuntosJugadorDos += JuegoServicio.CalcularPuntosEnvido(partida.Envido.EnvidosCantados, partida.PuntosJugadorUno, partida.PuntosJugadorDos);
                }
                else
                {
                    partida.PuntosJugadorUno += JuegoServicio.CalcularPuntosEnvido(partida.Envido.EnvidosCantados, partida.PuntosJugadorUno, partida.PuntosJugadorDos);
                }
            }
            else
            {
                partida.Turno = partida.Envido.JugadorQueDebeResponderEnvido;
            }

            partida = VerificarSiAlguienGanoElPartido(partida);
            return partida;
        }

        public static Partida TantosEnvidoTurnos(Partida partida)
        {
            partida.Envido.JugadorQueCantoEnvido = partida.Turno;
            partida.JugadasRealizadas += 1;

            if (partida.Turno == partida.Repartidor)
            {
                partida.Turno = partida.Envido.JugadorQueCantoPrimeroEnvido;
                partida.Envido.JugadorQueDebeResponderEnvido = 0;
                partida.Envido.JugadorQueCantoPrimeroEnvido = 0;
                partida.Envido.EstadoCantarTantos = false;

                if (JuegoServicio.EnvidoMasAlto(partida.Repartidor, partida.Envido.TantoCantadoJugadorUno, partida.Envido.TantoCantadoJugadorDos) == 1)
                {
                    partida.PuntosJugadorUno += JuegoServicio.CalcularPuntosEnvido(partida.Envido.EnvidosCantados, partida.PuntosJugadorUno, partida.PuntosJugadorDos);
                }
                else
                {
                    partida.PuntosJugadorDos += JuegoServicio.CalcularPuntosEnvido(partida.Envido.EnvidosCantados, partida.PuntosJugadorUno, partida.PuntosJugadorDos);
                }
            }
            else
            {
                partida.Turno = JuegoServicio.CambiarTurno(partida.Turno);
                partida.Envido.JugadorQueDebeResponderEnvido = JuegoServicio.CambiarTurno(partida.Turno);
            }

            partida = VerificarSiAlguienGanoElPartido(partida);

            return partida;
        }

        public static Partida VerificarSiAlguienGanoElPartido(Partida partida)
        {
            if (partida.PuntosJugadorUno >= 30 || partida.PuntosJugadorDos >= 30)
            {
                partida.Turno = 0;
                partida.GanadorPartida = partida.PuntosJugadorUno >= 30 ? 1 : 2;
            }

            return partida;
        }

        public static Partida TrucoTurnos(Partida partida)
        {
            partida.Truco.JugadorQueCantoTruco = partida.Turno;
            partida.JugadasRealizadas += 1;
            
            int jugadorQueCantaTruco = partida.Turno;

            if (partida.Truco.TrucosCantados[^1] == "truco" || partida.Truco.TrucosCantados[^1] == "re truco" || partida.Truco.TrucosCantados[^1] == "vale cuatro")
            {
                partida.Turno = JuegoServicio.CambiarTurno(jugadorQueCantaTruco);
                partida.Truco.EstadoTrucoCantado = true;
                partida.Truco.JugadorQueDebeResponderTruco = JuegoServicio.CambiarTurno(jugadorQueCantaTruco);

                if (partida.Truco.TrucosCantados[^1] == "truco" || (partida.Truco.TrucosCantados[^1] == "re truco" || partida.Truco.TrucosCantados[^1] == "vale cuatro") && partida.Truco.TrucosCantados[^2] == "quiero")
                {
                    partida.Truco.JugadorQueCantoPrimeroTruco = jugadorQueCantaTruco;
                }
            }
            else
            {
                partida.Truco.EstadoTrucoCantado = false;

                if (partida.Truco.TrucosCantados[^1] == "no quiero")
                {
                    partida = AsignarPuntosAGanadorMano(partida, CambiarTurno(jugadorQueCantaTruco));
                }
                else
                {
                    partida.Turno = partida.Truco.JugadorQueCantoPrimeroTruco;
                    partida.Truco.JugadorQueDebeResponderTruco = jugadorQueCantaTruco;
                }
            }

            partida = VerificarSiAlguienGanoElPartido(partida);
            return partida;
        }

    }
}
