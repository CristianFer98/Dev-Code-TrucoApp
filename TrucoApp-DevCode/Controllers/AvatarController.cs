using DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Servicios.Interfaces;
using System;

namespace Router.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AvatarController : ControllerBase
    {
        private readonly IAvatarServicio _avatarServicio;
        public AvatarController(IAvatarServicio avatarServicio)
        {
            _avatarServicio = avatarServicio;
        }
        [HttpPost]
        [Route("GuardarAvatar")]
        public ActionResult GuardarAvatar([FromBody] AvatartDto avatar)
        {
            try
            {
                _avatarServicio.GuardarAvatar(
                    avatar.IdUsuario,
                    avatar.Pelo, 
                    avatar.Ceja,
                    avatar.ColorDeOjos,
                    avatar.ColorDePiel, 
                    avatar.Ropa
                );
                return StatusCode(StatusCodes.Status200OK);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        // GET: AvatarController
        /*public ActionResult MostrarAvatarPorUsuario(int idUsuario)
        {
            //return View();
        }

        // GET: AvatarController/Create
        public ActionResult ModificarAvatar(int idUsuario)
        {
            //return View();
        }*/
    }
}
