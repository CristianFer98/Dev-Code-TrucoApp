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
using TrucoApp.DTOs;

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
        [Route("CrearTorneo")]
        public IActionResult CrearTorneo([FromBody] CrearTorneoDto crearTorneo)
        {
            var nuevoTorneo = new Torneo()
            {
                Nombre = crearTorneo.Nombre,
                CantidadParticipantes = crearTorneo.CantidadParticipantes
            };

            _torneoServicio.CrearTorneo(nuevoTorneo);
            return Ok();
        }

        [HttpPost]
        [Route("AgregarParticipante")]
        public IActionResult AgregarParticipante([FromBody] AgregarParticipanteDto agregarParticipante)
        {
            _torneoServicio.AgregarParticipante(agregarParticipante.IdTorneo, agregarParticipante.IdUsuario);
            return Ok();
        }
    }
}
