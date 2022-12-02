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
            List<Carta> rankingCartas = new() { cartaJugadorUno, cartaJugadorDos, cartaJugadorTres, cartaJugadorCuatro };

            Carta masAlta = rankingCartas.OrderBy(c => c.RankingValorTruco).ToList()[0];

            List<Carta> rankingCartasEquipoUno = new() { cartaJugadorUno, cartaJugadorDos };
            List<Carta> rankingCartasEquipoDos = new() { cartaJugadorTres, cartaJugadorCuatro };

            Carta masAltaEquipoUno = rankingCartasEquipoUno.OrderBy(c => c.RankingValorTruco).ToList()[0];
            Carta masAltaEquipoDos = rankingCartasEquipoDos.OrderBy(c => c.RankingValorTruco).ToList()[0];

            if (masAltaEquipoUno.RankingValorTruco == masAltaEquipoDos.RankingValorTruco)
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

        public static int EnvidoMasAlto(int repartidor, int tantoJugadorUno, int tantoJugadorDos, int tantoJugadorTres, int tantoJugadorCuatro)
        {

            List<int> tantosEquipoUno = new() { tantoJugadorUno, tantoJugadorDos };
            List<int> tantosEquipoDos = new() { tantoJugadorTres, tantoJugadorCuatro };

            int masAltaEquipoUno = tantosEquipoUno.OrderByDescending(c => c).ToList()[0];
            int masAltaEquipoDos = tantosEquipoDos.OrderByDescending(c => c).ToList()[0];

            if (masAltaEquipoUno > masAltaEquipoDos)
            {
                return 1;
            }
            else if (masAltaEquipoUno < masAltaEquipoDos)
            {
                return 2;
            }
            else
            {
                if (repartidor == 1 || repartidor == 2)
                {
                    return 2;
                }
                else
                {
                    return 1;
                }

            }

        }

        public static Partida EnvidoTurnos(Partida partida)
        {
            partida.Envido.JugadorQueCantoEnvido = partida.Turno;
            partida.JugadasRealizadas += 1;
            int jugadorQueCantaEnvido = partida.Turno;

            if (partida.Envido.EnvidosCantados[^1] == "quiero")
            {
                partida.Turno = AsignarTurno2vs2(partida.Repartidor);
                partida.Envido.EstadoEnvidoCantado = false;
                partida.Envido.EstadoCantarTantos = true;
                partida.Envido.JugadorQueDebeResponderEnvido = AsignarTurno2vs2(partida.Repartidor);
            }
            else if (partida.Envido.EnvidosCantados[^1] == "no quiero")
            {
                partida.Turno = partida.Envido.JugadorQueCantoPrimeroEnvido;
                partida.Envido.EstadoEnvidoCantado = false;
                partida.Envido.EstadoCantarTantos = false;
                partida.Envido.JugadorQueDebeResponderEnvido = 0;
                partida.Envido.JugadorQueCantoPrimeroEnvido = 0;

                if (jugadorQueCantaEnvido == 1 || jugadorQueCantaEnvido == 2)
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
                if (partida.Turno == partida.Envido.JugadorQueCantoPrimeroEnvido)
                {
                    if (partida.Truco.EstadoTrucoCantado == false)
                    {
                        partida.Turno = AsignarTurno2vs2(partida.Envido.JugadorQueCantoPrimeroEnvido);
                        partida.Envido.JugadorQueDebeResponderEnvido = AsignarTurno2vs2(partida.Envido.JugadorQueCantoPrimeroEnvido);
                    }
                    else
                    {
                        partida.Turno = partida.Truco.JugadorQueCantoPrimeroTruco;
                        partida.Envido.JugadorQueDebeResponderEnvido = partida.Truco.JugadorQueCantoPrimeroTruco;
                    }
                }
                else
                {
                    partida.Turno = partida.Envido.JugadorQueCantoPrimeroEnvido;
                    partida.Envido.JugadorQueDebeResponderEnvido = partida.Envido.JugadorQueCantoPrimeroEnvido;
                }
            }

            partida = JuegoServicio.VerificarSiAlguienGanoElPartido(partida);
            return partida;
        }

        public static Partida TrucoTurnos(Partida partida)
        {
            partida.Truco.JugadorQueCantoTruco = partida.Turno;
            partida.JugadasRealizadas += 1;

            int jugadorQueCantaTruco = partida.Turno;

            if (partida.Truco.TrucosCantados[^1] == "truco" || partida.Truco.TrucosCantados[^1] == "re truco" || partida.Truco.TrucosCantados[^1] == "vale cuatro")
            {
                partida.Truco.EstadoTrucoCantado = true;


                if (partida.Truco.TrucosCantados[^1] == "truco" || (partida.Truco.TrucosCantados[^1] == "re truco" || partida.Truco.TrucosCantados[^1] == "vale cuatro") && partida.Truco.TrucosCantados[^2] == "quiero")
                {
                    partida.Turno = AsignarTurno2vs2(jugadorQueCantaTruco);
                    partida.Truco.JugadorQueDebeResponderTruco = AsignarTurno2vs2(jugadorQueCantaTruco);
                    partida.Truco.JugadorQueCantoPrimeroTruco = jugadorQueCantaTruco;
                }

                else if ((partida.Truco.TrucosCantados[^1] == "re truco" || partida.Truco.TrucosCantados[^1] == "vale cuatro") && partida.Truco.TrucosCantados[^2] != "quiero")
                {
                    partida.Turno = partida.Truco.JugadorQueCantoPrimeroTruco;
                    partida.Truco.JugadorQueDebeResponderTruco = partida.Truco.JugadorQueCantoPrimeroTruco;
                }
            }
            else
            {
                partida.Truco.EstadoTrucoCantado = false;

                if (partida.Truco.TrucosCantados[^1] == "no quiero")
                {
                    partida = JuegoServicio.AsignarPuntosAGanadorMano(partida, jugadorQueCantaTruco == 1 || jugadorQueCantaTruco == 2 ? 2 : 1);
                }
                else
                {
                    partida.Turno = partida.Truco.JugadorQueCantoPrimeroTruco;
                    partida.Truco.JugadorQueDebeResponderTruco = jugadorQueCantaTruco;
                }
            }

            partida = JuegoServicio.VerificarSiAlguienGanoElPartido(partida);
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

                if (EnvidoMasAlto(partida.Repartidor, partida.Envido.TantoCantadoJugadorUno, partida.Envido.TantoCantadoJugadorDos, partida.Envido.TantoCantadoJugadorTres, partida.Envido.TantoCantadoJugadorCuatro) == 1)
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
                partida.Turno = AsignarTurno2vs2(partida.Turno);
                partida.Envido.JugadorQueDebeResponderEnvido = AsignarTurno2vs2(partida.Turno);
            }

            partida = JuegoServicio.VerificarSiAlguienGanoElPartido(partida);

            return partida;
        }

        public static Partida ActualizarPartida2vs2(Partida partida)
        {
            int? GanadorManoUno = (partida.CartasJugadasJugadorUno.Count > 0 && partida.CartasJugadasJugadorDos.Count > 0) && partida.CartasJugadasJugadorTres.Count > 0 && partida.CartasJugadasJugadorCuatro.Count > 0 ? CartaGanadora2vs2(partida.CartasJugadasJugadorUno[0], partida.CartasJugadasJugadorDos[0], partida.CartasJugadasJugadorTres[0], partida.CartasJugadasJugadorCuatro[0]) : null;

            int? GanadorManoDos = (partida.CartasJugadasJugadorUno.Count > 1 && partida.CartasJugadasJugadorDos.Count > 1) && partida.CartasJugadasJugadorTres.Count > 1 && partida.CartasJugadasJugadorCuatro.Count > 1 ? CartaGanadora2vs2(partida.CartasJugadasJugadorUno[1], partida.CartasJugadasJugadorDos[1], partida.CartasJugadasJugadorTres[1], partida.CartasJugadasJugadorCuatro[0]) : null;

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
                    if (EquipoGanadorManoUno != 0)
                    {
                        if (EquipoGanadorManoUno == EquipoGanadorManoDos)
                        {
                            //Gana el que ganó primera y segunda mano
                            //partida = AsignarPuntosAGanadorMano(partida, (int)GanadorManoDos);
                            JuegoServicio.AsignarPuntosAGanadorMano(partida, (int)EquipoGanadorManoDos);
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
                                JuegoServicio.AsignarPuntosAGanadorMano(partida, (int)EquipoGanadorManoUno);
                            }
                        }
                    }
                    else
                    {
                        if (EquipoGanadorManoDos != 0)
                        {
                            //Gana el que gano la segunda mando porque en la mano uno empardaron
                            //partida = AsignarPuntosAGanadorMano(partida, (int)GanadorManoDos);
                            JuegoServicio.AsignarPuntosAGanadorMano(partida, (int)EquipoGanadorManoDos);
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
                            JuegoServicio.AsignarPuntosAGanadorMano(partida, (int)EquipoGanadorManoTres);
                        }
                        else
                        {
                            if (EquipoGanadorManoUno != 0)
                            {
                                //Gana el que gano la mano uno porque empardaron en la tercera.
                                //partida = AsignarPuntosAGanadorMano(partida, (int)GanadorManoUno);
                                JuegoServicio.AsignarPuntosAGanadorMano(partida, (int)EquipoGanadorManoUno);
                            }
                            else
                            {
                                //Gana el que es mano porque empardaron las tres manos.
                                //partida = AsignarPuntosAGanadorMano(partida, CambiarTurno(partida.Repartidor));
                                JuegoServicio.AsignarPuntosAGanadorMano(partida, AsignarTurno2vs2(partida.Repartidor));
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
