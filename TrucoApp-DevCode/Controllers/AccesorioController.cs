using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Servicios.Interfaces;
using System;

namespace Router.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccesorioController : ControllerBase
    {
        private readonly IAccesorioServicio _accesorioServicio;
        public AccesorioController(IAccesorioServicio accesorioServicio)
        {
            _accesorioServicio = accesorioServicio;
        }

        [HttpGet]
        [Route("ObtenerAccesorios")]
        public ActionResult ObtenerAccesorios()
        {
            try
            {

                return StatusCode(StatusCodes.Status200OK, _accesorioServicio.GetAccesorios());
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }

        }
    }
}
