using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Servicios.Interfaces;
using Repositorios.Interfaces;
using Entidades;
using Servicios.Excepciones;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Configuration;

namespace Servicios
{
    public class UsuarioServicio : IUsuarioServicio
    {
        private readonly IUsuarioRepositorio _usuarioRepositorio;
        private readonly IConfiguration _configuracion;

        public UsuarioServicio(IUsuarioRepositorio usuarioRepositorio, 
            IConfiguration configuracion)
        {
            _usuarioRepositorio = usuarioRepositorio;
            _configuracion = configuracion;
        }


        public Usuario Login(string email, string password)
        {
            var usuario = _usuarioRepositorio.BuscarUsuarioPorMail(email);

            if (usuario == null)
            {
                throw new UsuarioNoEncontradoExcepcion(email);
            }
            if (!usuario.Password.Equals(password))
            {
                throw new ContraseñaIncorrectaExcepcion();
            }

            return usuario;
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

        public string FirmarToken(Usuario usuario)
        {
            var jwtSecret = _configuracion.GetSection("JwtSecurity:Secret").Value;
            var jwtIssuer = _configuracion.GetSection("JwtSecurity:Issuer").Value;
            var jwtAudience = _configuracion.GetSection("JwtSecurity:Audience").Value;

            var claims = new[] {
                new Claim(ClaimTypes.Name, usuario.NombreCompleto),
                new Claim(ClaimTypes.Email, usuario.Email)
            };

            var secretBytes = Encoding.UTF8.GetBytes(jwtSecret);
            var symmetricSecurityKey = new SymmetricSecurityKey(secretBytes);

            var signingCredentials = new SigningCredentials(
                symmetricSecurityKey, 
                SecurityAlgorithms.HmacSha256Signature);

            var jwtSecurityToken = new JwtSecurityToken(
                jwtIssuer, 
                jwtAudience, 
                claims,
                signingCredentials: signingCredentials);

            var jwtToken = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken);
            return jwtToken;
        }
    }
}
