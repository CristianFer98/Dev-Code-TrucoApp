using Entidades;
using Repositorios.Interfaces;
using Servicios.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Servicios
{
    public class TalleServicio : ITalleServicio
    {
        private readonly ITalleRepositorio _talleRepositorio;
        public TalleServicio(ITalleRepositorio talleRepositorio)
        {
            _talleRepositorio = talleRepositorio;
        }
        public List<Talle> GetTallesPorIdProducto(int idProducto)
        {
            return _talleRepositorio.GetTallesPorIdProducto(idProducto);
        }
    }
}
