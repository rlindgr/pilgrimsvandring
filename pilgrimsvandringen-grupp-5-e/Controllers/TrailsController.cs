using Microsoft.AspNetCore.Mvc;
using pilgrimsvandringen_grupp_5_e.Services;
using pilgrimsvandringen_grupp_5_e.Services.Interfaces;

namespace pilgrimsvandringen_grupp_5_e.Controllers
{
    public class TrailsController : Controller
    {


        private readonly ITrailInformationService _trailInformationService;
        public TrailsController(ITrailInformationService trailInformationService)
        {
            _trailInformationService = trailInformationService;
        }
        public IActionResult TrailsSummary()
        {
            var model = _trailInformationService.GetAllTrails();
            return View(model);
        }

        public IActionResult TrailDetails(int id)
        {
            var model = _trailInformationService.GetTrailInformation();
            return View("~/Views/Trails/TrailDetails.cshtml", model);
        }
       
    }
}
        
