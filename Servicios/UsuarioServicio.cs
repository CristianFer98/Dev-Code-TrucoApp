using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Servicios.Interfaces;
using Repositorios.Interfaces;
using Entidades;

namespace Servicios
{
    public class UsuarioServicio : IUsuarioServicio
    {
        private readonly IUsuarioRepositorio _usuarioRepositorio;

        public UsuarioServicio(IUsuarioRepositorio usuarioRepositorio)
        {
            _usuarioRepositorio = usuarioRepositorio;
        }

        public Usuario Registrar(string email, string password, string nombreCompleto)
        {
            var usuarioNuevo = new Usuario
            {
                Email = email,
                Password = password,
                NombreCompleto = nombreCompleto
            };

            /*
             *TODO 
             * Validar email no repetido
             * Validar email válido
             * Validar password > 8
             * Validar todos los campos no null
             * La password debe almacenarse encriptada
             */            

            return _usuarioRepositorio.GuardarUsuario(usuarioNuevo);
        }
    }
}
