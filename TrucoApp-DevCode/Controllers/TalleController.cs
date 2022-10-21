using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Servicios.Interfaces;
using System;

namespace Router.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TalleController : ControllerBase
    {
        private readonly ITalleServicio _talleServicio;

        public TalleController(ITalleServicio talleServicio)
        {
            _talleServicio = talleServicio;
        }

        [HttpGet]
        [Route("ObtenerTallesPorIdProducto/{idProducto:int}")]
        public ActionResult ObtenerTallesPorIdProducto(int idProducto)
        {
            try
            {

                return StatusCode(StatusCodes.Status200OK, _talleServicio.GetTallesPorIdProducto(idProducto));
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }

        }
    }
}
