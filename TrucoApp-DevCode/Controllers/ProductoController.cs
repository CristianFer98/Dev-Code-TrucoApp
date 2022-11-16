using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Servicios.Interfaces;
using System;

namespace Router.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        private readonly IProductoServicio _productoServicio;

        public ProductoController(IProductoServicio productoServicio)
        {
            _productoServicio = productoServicio;
        }

        [HttpGet]
        [Route("ObtenerProductos")]
        public ActionResult ObtenerProductos()
        {
            try
            {

                return StatusCode(StatusCodes.Status200OK, _productoServicio.GetProductos());
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }

        }

        [HttpGet]
        [Route("ObtenerProductoPorId/{idProducto:int}")]
        public ActionResult ObtenerProductoPorId(int idProducto)
        {
            try
            {

                return StatusCode(StatusCodes.Status200OK, _productoServicio.GetProductoPorId(idProducto));
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }

        }

        //
        [HttpPut]
        [Route("ActualizarStock/{idProducto:int}")]
        public ActionResult ActualizarStock(int idProducto, [FromBody] int stockActual)
        {

            try
            {
                _productoServicio.ActualizarStock(idProducto, stockActual);
                return StatusCode(StatusCodes.Status200OK);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }


        }

        [HttpGet]
        [Route("ComprarProducto/{idProducto:int}")]
        public ActionResult ComprarProducto(int idProducto)
        {

            try
            {

                return StatusCode(StatusCodes.Status200OK, _productoServicio.ComprarProducto(idProducto));

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }


        }


    }
}
