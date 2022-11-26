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
        [Route("ObtenerTorneoPorId/{torneoId:int}")]
        public ActionResult Get(int torneoId)
        {
            try
            {
                return StatusCode(StatusCodes.Status200OK, _torneoServicio.ObtenerTorneoPorId(torneoId));
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("ObtenerTodosLosTorneos")]
        public ActionResult Get()
        {
            try
            {
                return StatusCode(StatusCodes.Status200OK, _torneoServicio.ObtenerTorneosDisponibles());
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("CrearTorneo")]
        public ActionResult Post([FromBody] CrearTorneoDto crearTorneo)
        {
            try
            {
                var nuevoTorneo = new Torneo()
                {
                    Nombre = crearTorneo.Nombre,
                    CantidadParticipantes = crearTorneo.CantidadParticipantes
                };
                _torneoServicio.CrearTorneo(nuevoTorneo);
                return StatusCode(StatusCodes.Status200OK, nuevoTorneo);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);

            }
        }

        [HttpPost]
        [Route("AgregarParticipante")]
        public ActionResult Post([FromBody] AgregarParticipanteDto agregarParticipante)
        {
            try
            {
                _torneoServicio.AgregarParticipante(agregarParticipante.IdTorneo, agregarParticipante.IdUsuario);
                return StatusCode(StatusCodes.Status200OK, agregarParticipante);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);

            }
        }
      
        [HttpGet]
        [Route("ProximaRonda/{torneoId:int}")]
        public IActionResult ProximaRonda([FromRoute] int id)
        {
            return Ok(_torneoServicio.ProximaRonda(id));
        }
    }
}
