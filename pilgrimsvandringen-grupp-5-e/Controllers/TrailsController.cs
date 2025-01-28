using Microsoft.AspNetCore.Mvc;

namespace pilgrimsvandringen_grupp_5_e.Controllers
{
    public class TrailsController : Controller
    {
        public IActionResult TrailsSummary()
        {
            return View();
        }

        public IActionResult TrailGreen()
        {
            return View();
        }

        public IActionResult TrailRed()
        {
            return View();
        }

        public IActionResult TrailBlue()
        {
            return View();
        }

        public IActionResult TrailYellow()
        {
            return View();
        }
    }
}
