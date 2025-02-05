using pilgrimsvandringen_grupp_5_e.Dto;
using pilgrimsvandringen_grupp_5_e.Repositories.Interfaces;
using pilgrimsvandringen_grupp_5_e.Services.Interfaces;
using pilgrimsvandringen_grupp_5_e.ViewModels;

namespace pilgrimsvandringen_grupp_5_e.Services
{
    public class TrailInformationService : ITrailInformationService
    {

        private readonly ITrailRepository _trailRepository;

        public TrailInformationService(ITrailRepository trailRepository) 
        
        {  _trailRepository = trailRepository; }

        public async Task<IEnumerable<TrailsViewModel>> GetAllTrails()
        {
            var trails = await _trailRepository.GetAllTrailsAsync();

            List<TrailsViewModel> trailsViewModels = new List<TrailsViewModel>();
            foreach (var trail in trails)
            {
                var trailVm = new TrailsViewModel
                {
                   Id = trail.Id,
                   Name = trail.Name,
                   Description = trail.Description,
                   StartPoint = trail.StartPoint,
                   EndPoint = trail.EndPoint,
                   Terrain = trail.Terrain,
                   Difficulty = trail.Difficulty,
                   Color = trail.Color,
                   Length = trail.Length,
                   Height = trail.Height,
                   Surface = trail.Surface,
                };
                trailsViewModels.Add(trailVm);

            }
            return trailsViewModels;
        }

        public async Task<TrailsViewModel> GetTrailInformation(int id)
        {
            var trail = await _trailRepository.GetTrailAsync(id);
            var trailVm = new TrailsViewModel
            {
                Id = trail.Id,
                Name = trail.Name,
                Description = trail.Description,
                StartPoint = trail.StartPoint,
                EndPoint = trail.EndPoint,
                Terrain = trail.Terrain,
                Difficulty = trail.Difficulty,
                Color = trail.Color,
                Length = trail.Length,
                Height = trail.Height,
                Surface = trail.Surface,
            };

            return trailVm;
        }
    }
}
