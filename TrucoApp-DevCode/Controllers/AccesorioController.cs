﻿using Microsoft.AspNetCore.Http;
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
        [Route("ComprarAccesorio/{idAccesorio:int}")]
        public ActionResult ComprarAccesorio(int idAccesorio)
        {

            try
            {
                _accesorioServicio.Comprar(idAccesorio);
                return StatusCode(StatusCodes.Status200OK);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }


        }

        [HttpPost]
        [Route("ComprarTodo")]
        public ActionResult ComprarAccesorio([FromBody] List <int> idsAccesorios)
        {

            try
            {
                _accesorioServicio.ComprarTodo(idsAccesorios);
                return StatusCode(StatusCodes.Status200OK);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }


        }
    }
}
