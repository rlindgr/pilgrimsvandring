using Microsoft.AspNetCore.Mvc;
using pilgrimsvandringen_grupp_5_e.Services;
using pilgrimsvandringen_grupp_5_e.Services.Interfaces;

namespace pilgrimsvandringen_grupp_5_e.Controllers
{
    public class TrailsController : Controller
    {
        private readonly IStageInformationService _stageInformationService;
        private readonly ITrailInformationService _trailInformationService;

        public TrailsController(ITrailInformationService trailInformationService, IStageInformationService stageInformationService)
        {
            _trailInformationService = trailInformationService;
            _stageInformationService = stageInformationService;
        }
        public async Task<IActionResult> TrailsSummary()
        {
            var model = await _trailInformationService.GetAllTrails();
            return View(model);
        }
        
        public async Task<IActionResult> TrailDetails(int id)
        {
            var model = await _trailInformationService.GetTrailInformation(id);
            var modelStage = await _stageInformationService.GetAllStagesById(model.Id);
            model.StageViewModels = modelStage.ToList();
            
            return View("~/Views/Trails/TrailDetails.cshtml", model);
        }
       
    }
}
        
