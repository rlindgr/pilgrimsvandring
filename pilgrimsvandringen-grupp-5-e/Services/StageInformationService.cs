using pilgrimsvandringen_grupp_5_e.Repositories.Interfaces;
using pilgrimsvandringen_grupp_5_e.Services.Interfaces;
using pilgrimsvandringen_grupp_5_e.ViewModels;

namespace pilgrimsvandringen_grupp_5_e.Services
{
    public class StageInformationService : IStageInformationService
    {

        private readonly IStageRepository _stageRepository;

        public StageInformationService(IStageRepository stageRepository)
        { 
            _stageRepository = stageRepository; 
        }

        public async Task<IEnumerable<StageViewModel>> GetAllStagesById(int trailId)
        {
            var stages = await _stageRepository.GetAllStagesByIdAsync(trailId);


            List<StageViewModel> stageViewModels = new List<StageViewModel>();
            foreach (var stage in stages)
            {
                var stageVm = new StageViewModel
                {
                    Id = stage.Id,
                    Name = stage.Name,
                    Description = stage.Description,
                    StartPoint = stage.StartPoint,
                    EndPoint = stage.EndPoint,
                    Terrain = stage.Terrain,
                    Difficulty = stage.Difficulty,
                    Color = stage.Color,
                    Length = stage.Length,
                    Height = stage.Height,
                    Surface = stage.Surface,
                    TrailId = stage.TrailId
                };
                stageViewModels.Add(stageVm);

            }
            return stageViewModels;
        }

        public async Task<IEnumerable<StageViewModel>> GetAllStages()
        {
            var stages = await _stageRepository.GetAllStagesAsync();


            List<StageViewModel> stageViewModels = new List<StageViewModel>();
            foreach (var stage in stages)
            {
                var stageVm = new StageViewModel
                {
                    Id = stage.Id,
                    Name = stage.Name,
                    Description = stage.Description,
                    StartPoint = stage.StartPoint,
                    EndPoint = stage.EndPoint,
                    Terrain = stage.Terrain,
                    Difficulty = stage.Difficulty,
                    Color = stage.Color,
                    Length = stage.Length,
                    Height = stage.Height,
                    Surface = stage.Surface,
                    TrailId = stage.TrailId
                };
                stageViewModels.Add(stageVm);

            }
            return stageViewModels;
        }

        public async Task<StageViewModel> GetStageInformation(int id)
        {
            var stage = await _stageRepository.GetStageAsync(id);
            var stageVm = new StageViewModel
            {
                Id = stage.Id,
                Name = stage.Name,
                Description = stage.Description,
                StartPoint = stage.StartPoint,
                EndPoint = stage.EndPoint,
                Terrain = stage.Terrain,
                Difficulty = stage.Difficulty,
                Color = stage.Color,
                Length = stage.Length,
                Height = stage.Height,
                Surface = stage.Surface,
            };

            return stageVm;
        }
    }
}
