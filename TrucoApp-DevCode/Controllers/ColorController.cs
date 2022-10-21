using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Servicios.Interfaces;
using System;

namespace Router.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ColorController : ControllerBase
    {
        private readonly IColorServicio _colorServicio;

        public ColorController(IColorServicio colorServicio)
        {
            _colorServicio = colorServicio;
        }

        [HttpGet]
        [Route("ObtenerColoresPorIdProducto/{idProducto:int}")]
        public ActionResult ObtenerColoresPorIdProducto(int idProducto)
        {
            try
            {

                return StatusCode(StatusCodes.Status200OK, _colorServicio.GetColoresPorIdProducto(idProducto));
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }

        }
    }
}
