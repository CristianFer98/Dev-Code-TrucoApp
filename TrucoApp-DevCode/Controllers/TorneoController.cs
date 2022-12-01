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
using DTOs;
using Repositorios.Model;

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
            torneoNuevo.IdMesaSemiUnoNavigation = new Mesa { CantidadJugadores = 2, JugadorUno = crearTorneo.Usuario, Tipo = "Semi", Estado = "Disponible", Torneo = true, FechaCreacion = today };
            return StatusCode(StatusCodes.Status200OK, _torneoServicio.CrearTorneo(torneoNuevo));//devuelve el torneo con esa mesa semi uno
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
            //VOY A INGRESAR AL TORNEO A LOS JUGADOR UNO SOLAMENTE. PERO SIEMPRE ME VA A DEVOLVER UNA MESA, YA SEA PARA USAR INVOKE O PARA ENTRAR
            try
            {

                return StatusCode(StatusCodes.Status200OK, _torneoServicio.AgregarAUnaMesaDisponible(agregarParticipante.IdTorneo, agregarParticipante.IdUsuario));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);

            }
        }

        [HttpGet]
        [Route("obtenerJugadores/{idMesa:int}")]
        public IActionResult ObtenerJugadores([FromRoute] int idMesa)
        {
            try
            {

                return StatusCode(StatusCodes.Status200OK, _torneoServicio.obtenerJugadores(idMesa));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);

            }
        }

        [HttpPost]
        [Route("crearMesaFinal")]
        public IActionResult CrearMesaFinal([FromBody] CrearMesaFinalDTO mesaFinal)
        {




            try
            {
                return StatusCode(StatusCodes.Status200OK, _torneoServicio.CrearMesaFinal(mesaFinal.IdTorneo, mesaFinal.IdUsuario));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);

            }

        }




    }

}
