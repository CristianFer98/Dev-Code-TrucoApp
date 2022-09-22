using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Servicios.Interfaces;
using Entidades;

namespace Router.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MesasController : ControllerBase
    {

        private readonly IMesaServicio _mesaServicio;

        public MesasController(IMesaServicio mesaServicio)
        {
            _mesaServicio = mesaServicio;
        }

        [HttpGet]
        [Route("ObtenerTodasLasMesas")]
        public ActionResult Get()
        {
            try
            {

                return StatusCode(StatusCodes.Status200OK, _mesaServicio.ObtenerMesasDisponibles());
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }

        }

        [HttpPost]
        [Route("Guardar")]
        public ActionResult Post([FromBody] Mesa mesa)
        {

            try
            {

                _mesaServicio.GuardarMesa(mesa);
                return StatusCode(StatusCodes.Status200OK);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);

            }
        }

    }
}
