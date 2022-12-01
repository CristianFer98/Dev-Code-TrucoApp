using Entidades;
using Microsoft.EntityFrameworkCore;
using Repositorios.Interfaces;
using Repositorios.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Repositorios
{
    public class TorneoRepositorio : ITorneoRepositorio
    {
        DevCodeDBContext _dbContext;

        public TorneoRepositorio(DevCodeDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public MesaInvoke AgregarAUnaMesaDisponible(int idTorneo, int idUsuario)
        {
            /*ESTE METODO COMPRUEBA DOS COSAS> --
            1. SI LA SEGUNDA MESA DE LA SEMIFINAL ES NULL, LA CREO. (DEVUELVO UN OBJETO CON INFO DE LA MESA PARA EL CONNECTION.INVOKE)
            2. SI LA SEGUNDA MESA YA EXISTIA TENGO QUE INICIAR EL JUEGO. (DEVUELVO UN OBJETO CON INFO DE LA MESA PARA EL ENTRAR A MESA)
            */

            //Informacion que necesito.
            DateTime today = DateTime.Now;
            TorneoCri torneo = ObtenerTorneoPorId(idTorneo);
            MesaInvoke mesaInvoke = new MesaInvoke();
            List<Mesa> mesaDisponible = ObtenerMesasDelTorneo(idTorneo);


            //1. SI LA SEMI DOS ES NULO, CREO UNA MESA Y LA AGREGO. CREO EL OBJETO MESAINVOKE CON LA PROPUEDAD INVOKE TRUE
            if (torneo.IdMesaSemiDos == null)
            {
                Mesa semiDos = new Mesa
                {
                    CantidadJugadores = 2,
                    JugadorUno = idUsuario,
                    Tipo = "Semi",
                    Estado = "Disponible",
                    Torneo = true,
                    FechaCreacion = today
                };

                torneo.IdMesaSemiDosNavigation = semiDos;
                _dbContext.SaveChanges();

                mesaInvoke.invoke = true;
                mesaInvoke.idJugadorUno = idUsuario;
                mesaInvoke.idMesa = torneo.IdMesaSemiDos;

                return mesaInvoke;
            }


            //2. SI NO ERA NULL, ENTONCES EL USUARIO DEBE INGRESAR A JUGAR. RECORRO LAS MESAS Y LAS QUE ESTEN DISPONIBLES
            //LE ENVIO ESA INFORMACION PARA ENTRAR A LA MESA. 
            foreach (Mesa mesa in mesaDisponible)
            {
                if (mesa.Estado.Equals("Disponible"))
                {
                    mesaInvoke.invoke = false;
                    mesaInvoke.idMesa = mesa.IdMesa;
                    mesaInvoke.idJugadorUno = mesa.JugadorUno;
                    return mesaInvoke;
                }
            }

            return null;
        }

        public TorneoCri ObtenerTorneoPorId(int idTorneo)
        {
            return _dbContext.TorneoCris.Where(t => t.IdTorneo == idTorneo).Include(t=> t.IdMesaFinalNavigation).SingleOrDefault();
        }

        public bool ConsultarMesaLlena(int idMesa)
        {
            Mesa mesa = _dbContext.Mesas.Where(m => m.IdMesa == idMesa).FirstOrDefault();

            if (mesa.JugadorUno != null && mesa.JugadorDos != null)
            {
                return true;
            }
            else
            {
                return false;
            }

        }

        public TorneoCri CrearTorneo(TorneoCri nuevoTorneo)
        {
            _dbContext.TorneoCris.Add(nuevoTorneo);
            _dbContext.SaveChanges();

            return nuevoTorneo;

        }

        public List<Mesa> ObtenerMesasDelTorneo(int idTorneo)
        {
            TorneoCri torneo = _dbContext.TorneoCris
                .Include(t => t.IdMesaSemiUnoNavigation.JugadorUnoNavigation)
                .Include(t => t.IdMesaSemiUnoNavigation.JugadorDosNavigation)


                .Include(t => t.IdMesaSemiDosNavigation.JugadorUnoNavigation)
                .Include(t => t.IdMesaSemiDosNavigation.JugadorDosNavigation)


                .Include(t => t.IdMesaFinalNavigation.JugadorUnoNavigation)
                .Include(t => t.IdMesaFinalNavigation.JugadorDosNavigation)

                .Where(t => t.IdTorneo == idTorneo).SingleOrDefault();



            List<Mesa> mesas = new List<Mesa>();
            mesas.Add(torneo.IdMesaSemiUnoNavigation);
            mesas.Add(torneo.IdMesaSemiDosNavigation);
            mesas.Add(torneo.IdMesaFinalNavigation);

            return mesas;

        }



        public List<Usuario> ObtenerParticipantes(int idMesa)
        {
            int? usuarioU = (from mesa in _dbContext.Mesas where mesa.IdMesa == idMesa select mesa.JugadorUno).SingleOrDefault();
            int? usuarioD = (from mesa in _dbContext.Mesas where mesa.IdMesa == idMesa select mesa.JugadorDos).SingleOrDefault();

            Usuario usuarioUno = _dbContext.Usuarios.Where(u => u.IdUsuario == usuarioU).SingleOrDefault();
            Usuario usuarioDos = _dbContext.Usuarios.Where(u => u.IdUsuario == usuarioD).SingleOrDefault();

            List<Usuario> usuarios = new List<Usuario>();
            usuarios.Add(usuarioUno);
            usuarios.Add(usuarioDos);

            return usuarios;
        }

        public List<TorneoCri> ObtenerTorneosDisponibles()
        {
            List<TorneoCri> torneos = _dbContext.TorneoCris.ToList();
            return torneos;
        }

        public JugadoresEnMesa ObtenerJugadores(int idMesa)
        {
            Mesa mesa = _dbContext.Mesas.Where(m => m.IdMesa == idMesa).SingleOrDefault();

            string nombreJugadorUno = _dbContext.Usuarios.Where(u => u.IdUsuario == mesa.JugadorUno).Select(u=> u.NombreCompleto).SingleOrDefault();
            string nombreJugadorDos = _dbContext.Usuarios.Where(u => u.IdUsuario == mesa.JugadorDos).Select(u => u.NombreCompleto).SingleOrDefault();

            JugadoresEnMesa jugadores = new JugadoresEnMesa();
            jugadores.NombreJugadorUno = nombreJugadorUno;
            jugadores.NombreJugadorDos = nombreJugadorDos;

            return jugadores;
        }

        public Mesa CrearMesaFinal(int idTorneo, int uid)
        {
            DateTime today = DateTime.Now;
            TorneoCri torneo = ObtenerTorneoPorId(idTorneo);

            if (torneo.IdMesaFinal == null) {
                torneo.IdMesaFinalNavigation = new Mesa { CantidadJugadores = 2, JugadorUno = uid, Tipo = "Final", Estado = "Disponible", Torneo = true, FechaCreacion = today };
                _dbContext.SaveChanges();
                return torneo.IdMesaFinalNavigation;
            }
            return null;
        }
    }
}
