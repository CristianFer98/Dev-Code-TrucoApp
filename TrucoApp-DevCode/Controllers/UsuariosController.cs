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
using Servicios.Excepciones;

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

                var usuarioExistente = _usuarioServicio.Login(login.Email, login.Password);
                var jwtToken = _usuarioServicio.FirmarToken(usuarioExistente);

                return StatusCode(StatusCodes.Status200OK, new LoginResponse
                {
                    Id = usuarioExistente.IdUsuario,
                    Email = usuarioExistente.Email,
                    NombreCompleto = usuarioExistente.NombreCompleto,
                    JwtToken = jwtToken,
                });
            }
            catch (UsuarioNoEncontradoExcepcion)
            {
                return StatusCode(StatusCodes.Status404NotFound);
            }
            catch (ContraseñaIncorrectaExcepcion)
            {
                return StatusCode(StatusCodes.Status401Unauthorized);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        [Route("AgregarFotoPerfil/{idUsuario:int}")]
        public ActionResult AgregarFotoPerfil(int idUsuario, [FromBody] string imagen)
        {

            try
            {
                _usuarioServicio.AgregarFotoPerfil(idUsuario, imagen);
                return StatusCode(StatusCodes.Status200OK);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }


        }
    }
}
