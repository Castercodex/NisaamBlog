using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace NisaamBlog_Backend.Controllers
{
    [ApiController]
    [Authorize]
    [Route("/api/events")]
    public class EventController : Controller
    {
        [HttpGet]
        public ActionResult<string> Index()
        {
            return string.Empty;
        }
    }
}
