using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using pilgrimsvandringen_grupp_5_e.Models;
using pilgrimsvandringen_grupp_5_e.Services;
using pilgrimsvandringen_grupp_5_e.Services.Interfaces;

namespace pilgrimsvandringen_grupp_5_e.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;        

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;           
        }

        public async Task<IActionResult> Index()
        {            
            return View();
        }        

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        
    }
}
