using Microsoft.AspNetCore.Mvc;
using pilgrimsvandringen_grupp_5_e.Services.Interfaces;


namespace pilgrimsvandringen_grupp_5_e.Controllers
{
    public class PointsOfInterestsController : Controller
    {
        private readonly IPointOfinterestService _pointOfinterestService;

        public PointsOfInterestsController(IPointOfinterestService pointOfinterestService)
        {
            this._pointOfinterestService = pointOfinterestService;
        }
        public async Task<IActionResult> InformationsSummary()
        {
            var model1 = await _pointOfinterestService.GetAllPointsOfInterests();
            var model = await _pointOfinterestService.GetPointOfInterest(1);
            return View("~/Views/Informations/InformationsSummary.cshtml", model1);
        }

        public async Task<IActionResult> InformationPointOfInterest(int id)
        {
            var model = await _pointOfinterestService.GetPointOfInterest(id);
            return View("~/Views/Informations/InformationPointOfInterest.cshtml", model);
        }

    }
}
