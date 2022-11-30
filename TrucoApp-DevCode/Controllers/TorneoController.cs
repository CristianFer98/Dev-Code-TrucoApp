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

        [HttpPost]
        [Route("CrearTorneo")]
        public ActionResult Post([FromBody] CrearTorneoDto crearTorneo)
        {
            DateTime today = DateTime.Now;

            TorneoCri torneoNuevo = new TorneoCri();

            torneoNuevo.IdMesaSemiUnoNavigation = new Mesa { CantidadJugadores = 2, JugadorUno=crearTorneo.Usuario, Tipo = "Semi", Estado = "Disponible", Torneo=true, FechaCreacion = today };
            torneoNuevo.IdMesaFinalNavigation = new Mesa { CantidadJugadores = 2, Tipo = "Final", Estado = "Disponible", Torneo = true, FechaCreacion = today };
            torneoNuevo.IdMesaSemiDosNavigation = new Mesa { CantidadJugadores = 2, Tipo = "Semi", Estado = "Disponible", Torneo=true, FechaCreacion = today };

            return StatusCode(StatusCodes.Status200OK, _torneoServicio.CrearTorneo(torneoNuevo));
        }

        
        [HttpGet]
        [Route("obtenerMesasDelTorneo/{idTorneo:int}")]
        public ActionResult Get(int idTorneo)
        {
            try
            {
                return StatusCode(StatusCodes.Status200OK, _torneoServicio.ObtenerMesasDelTorneo(idTorneo));//las quiero con sus jugadores.
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }


        [HttpGet]
        [Route("obtenerParticipantes/{idMesa:int}")]
        public ActionResult ObtenerParticipantes(int idMesa)
        {
            try
            {
                return StatusCode(StatusCodes.Status200OK, _torneoServicio.ObtenerParticipantes(idMesa));//las quiero con sus jugadores.
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        
        [HttpGet]
        [Route("obtenerTorneos")]
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
        [Route("ingresarATorneo")]
        public ActionResult Post([FromBody] AgregarParticipanteDto agregarParticipante)
        {
            try
            {
                _torneoServicio.AgregarAUnaMesaDisponible(agregarParticipante.IdTorneo, agregarParticipante.IdUsuario);
                return StatusCode(StatusCodes.Status200OK, agregarParticipante);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);

            }
        }
        
        [HttpGet]
        [Route("consultarMesaIniciada/{idMesa:int}")]
        public IActionResult ProximaRonda([FromRoute] int idMesa)
        {
            return Ok(_torneoServicio.consultarMesaIniciada(idMesa));
        }
        
    }

}
