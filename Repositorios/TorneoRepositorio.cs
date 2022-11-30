using Entidades;
using Microsoft.EntityFrameworkCore;
using Repositorios.Interfaces;
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

        public Boolean AgregarAUnaMesaDisponible(int idTorneo, int idUsuario)
        {
            //obtengo las mesas de ese torneo. 
            //verifico cual esta vacia (de semifinal y final)
            //le asigno a esa mesa el usuario

            List <Mesa> mesasDisponibles = ObtenerMesasDelTorneo(idTorneo);

            foreach (Mesa mesas in mesasDisponibles) {
                if (mesas.Tipo.Equals("Semi")) {
                    if (mesas.JugadorUno == null) {
                        mesas.JugadorUno = idUsuario;
                        _dbContext.SaveChanges();
                        return true;
                    }

                    if (mesas.JugadorDos == null) {
                        mesas.JugadorDos = idUsuario;
                        _dbContext.SaveChanges();
                        return true;
                    }
                }
                
            }
            return false;
        }

        public bool ConsultarMesaIniciada(int idMesa)
        {
            Mesa mesa = _dbContext.Mesas.Where(m=> m.IdMesa == idMesa).FirstOrDefault();

            if (mesa.Estado.Equals("Ocupada"))
            {
                return true;
            }
            else {
                return false;
            }

        }

        public int CrearTorneo(TorneoCri nuevoTorneo)
        {
            _dbContext.TorneoCris.Add(nuevoTorneo);
            _dbContext.SaveChanges();

            return nuevoTorneo.IdTorneo;

        }

        public List<Mesa> ObtenerMesasDelTorneo(int idTorneo)
        {
            TorneoCri torneo = _dbContext.TorneoCris
                .Include(t => t.IdMesaSemiUnoNavigation)

                .Include(t => t.IdMesaSemiDosNavigation)

                .Include(t => t.IdMesaFinalNavigation)
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
             List <TorneoCri> torneos = _dbContext.TorneoCris.ToList();
            return torneos;
        }
    }
}
