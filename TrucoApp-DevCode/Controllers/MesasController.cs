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

        [HttpPut]
        [Route("EntrarAJugar/{idMesa:int}")]
        //public ActionResult Put(int idMesa)
        public ActionResult Put(int idMesa, [FromBody] int idJugador)
        {

            try
            {
                _mesaServicio.EntrarAJugarAMesa(idMesa, idJugador);
                return StatusCode(StatusCodes.Status200OK);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }


        }

    }
}
