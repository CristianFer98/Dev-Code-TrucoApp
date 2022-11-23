using Entidades;
using Microsoft.AspNetCore.Mvc;

namespace Router.Controllers
{
[Route("api/[controller]")]
[ApiController]
public class MainController : ControllerBase
{
    Entidades.DevCodeDBContext dbcontext;

    public MainController(DevCodeDBContext dbcontext)
    {
        this.dbcontext = dbcontext;
    }

        [HttpGet]
        [Route("createdb")]
        public IActionResult CreateDatabase()
        {
            dbcontext.Database.EnsureCreated();

            return Ok();
        }
    }
}
