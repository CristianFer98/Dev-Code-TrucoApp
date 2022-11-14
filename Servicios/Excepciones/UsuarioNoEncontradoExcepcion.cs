using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Servicios.Excepciones
{
    public class UsuarioNoEncontradoExcepcion : DevCodeExcepcion
    {
        public UsuarioNoEncontradoExcepcion(string usuario) : base($"El usuario {usuario} no esta registrado", HttpStatusCode.NotFound) { }
    }
}
