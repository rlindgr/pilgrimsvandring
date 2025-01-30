using Microsoft.AspNetCore.Mvc;
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
            var model = _trailInformationService.GetTrailInformation();
            return View(model);
        }
    }
}

        //public IActionResult TrailGreen()
        //{
        //    return View();
        //}

        //public IActionResult TrailRed()
        //{
        //    return View();
        //}

        //public IActionResult TrailBlue()
        //{
        //    return View();
        //}

        //public IActionResult TrailYellow()
        //{
        ////    return View();
        //}
//    }
//}
