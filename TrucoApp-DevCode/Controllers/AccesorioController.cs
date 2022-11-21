using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Servicios.Interfaces;
using System;
using System.Collections.Generic;

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

        [HttpPut]
        [Route("ActualizarEstadoComprado/{idAccesorio:int}")]
        public ActionResult ActualizarEstadoComprado(int idAccesorio)
        {

            try
            {
                _accesorioServicio.ActualizarEstadoComprado(idAccesorio);
                return StatusCode(StatusCodes.Status200OK);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }


        }

        [HttpPut]
        [Route("ActualizarEstadosComprado")]
        public ActionResult ActualizarEstadosComprado([FromBody] List<int> idsAccesorios)
        {

            try
            {
                _accesorioServicio.ActualizarEstadosComprado(idsAccesorios);
                return StatusCode(StatusCodes.Status200OK);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }


        }

        [HttpGet]
        [Route("ComprarAccesorio/{idAccesorio:int}")]
        public ActionResult ComprarAccesorio(int idAccesorio)
        {

            try
            {
               
                return StatusCode(StatusCodes.Status200OK, _accesorioServicio.ComprarAccesorio(idAccesorio));

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }


        }

        [HttpGet]
        [Route("ComprarTodo/{opcionIdsAccesoriosComprados:int}")]
        public ActionResult ComprarTodo(int opcionIdsAccesoriosComprados)
        {

            try
            {
             
                return StatusCode(StatusCodes.Status200OK, _accesorioServicio.ComprarTodo(opcionIdsAccesoriosComprados));

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }


        }



    }
}
