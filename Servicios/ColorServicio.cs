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
    public class ColorServicio : IColorServicio
    {

        private readonly IColorRepositorio _colorRepositorio;

        public ColorServicio(IColorRepositorio colorRepositorio)
        {
            _colorRepositorio = colorRepositorio;
        }
        public List<Color> GetColoresPorIdProducto(int idProducto)
        {
            return _colorRepositorio.GetColoresPorIdProducto(idProducto);
        }
    }
}
