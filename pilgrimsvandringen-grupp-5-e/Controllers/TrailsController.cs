using Microsoft.AspNetCore.Mvc;
using pilgrimsvandringen_grupp_5_e.Services;
using pilgrimsvandringen_grupp_5_e.Services.Interfaces;

namespace pilgrimsvandringen_grupp_5_e.Controllers
{
    public class TrailsController : Controller
    {
        private readonly IStageInformationService _stageInformationService;
        private readonly ITrailInformationService _trailInformationService;
        private readonly IPointOfinterestService _pointOfinterestService;

        public TrailsController(ITrailInformationService trailInformationService, IStageInformationService stageInformationService, IPointOfinterestService pointOfinterestService)
        {
            _trailInformationService = trailInformationService;
            _stageInformationService = stageInformationService;
            _pointOfinterestService = pointOfinterestService;
        }
        public async Task<IActionResult> TrailsSummary()
        {
            var model = await _trailInformationService.GetAllTrails();
            return View(model);
        }
        
        public async Task<IActionResult> TrailDetails(int id)
        {
            var model = await _trailInformationService.GetTrailInformation(id);
            var modelStages = await _stageInformationService.GetAllStagesById(model.Id);
            var modelPointsOfInterests = await _pointOfinterestService.GetAllPointsOfInterestsById(model.Id);
            model.StageViewModels = modelStages.ToList();
            model.PointOfInterestViewModels = modelPointsOfInterests.ToList();

            return View("~/Views/Trails/TrailDetails.cshtml", model);
        }
       
    }
}
        
