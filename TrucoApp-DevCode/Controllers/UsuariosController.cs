using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Servicios.Interfaces;
using Entidades;
using System.Text.Json;
using System.Text.Json.Serialization;
using Router.Hubs;
using DTOs;

namespace Router.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly IUsuarioServicio _usuarioServicio;

        public UsuariosController(IUsuarioServicio usuarioServicio)
        {
            _usuarioServicio = usuarioServicio;
        }

        [HttpPost]
        [Route("Registrar")]
        public ActionResult Registrar([FromBody] UsuarioDto usuario)
        {
            try
            {
                if (usuario is null)
                    return BadRequest("¡El usuario no puede ser nulo!");

                _usuarioServicio.Registrar(
                    usuario.Email, 
                    usuario.Password, 
                    usuario.NombreCompleto);

                return StatusCode(StatusCodes.Status200OK);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



        [HttpPost]
        [Route("Login")]
        public ActionResult Login([FromBody] LoginDto login)
        {
            try
            {
                if (login is null)
                    return BadRequest("¡El usuario no puede ser nulo!");

                //Llamar a UsuarioService pasandole (string email, string password)
                //InvalidCredentialsException
                //En el servicio llamas a tu repo buscando un usuario por email
                //Si no encuentra usuario con ese email tiras una exception
                //Si encontras usuario con ese email te fijas que la password.Equals(password)
                //Si todo está bien retornas ok
                //Si no retornas StatusCodes.Status401Unauthorized

                return StatusCode(StatusCodes.Status200OK);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
