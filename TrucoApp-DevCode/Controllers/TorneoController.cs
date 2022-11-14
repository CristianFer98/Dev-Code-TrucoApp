using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Servicios.Interfaces;
using System.Text.Json;
using System.Text.Json.Serialization;
using Router.Hubs;
using Servicios;
using Entidades;

namespace Router.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TorneoController : ControllerBase
    {
        ITorneoServicio _torneoServicio;

        public TorneoController(ITorneoServicio torneoServicio)
        {
            _torneoServicio = torneoServicio;
        }

        [HttpGet]
        [Route("ObtenerTodosLosTorneos")]
        public IActionResult Get()
        {
            return Ok(_torneoServicio.ObtenerTorneosDisponibles());
        }

        [HttpPost]
        public IActionResult Post([FromBody] Torneo torneo)
        {
            _torneoServicio.CrearTorneo(torneo);
            return Ok();
        }
    }
}
