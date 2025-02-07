using pilgrimsvandringen_grupp_5_e.Dto;
using pilgrimsvandringen_grupp_5_e.Repositories.Interfaces;
using pilgrimsvandringen_grupp_5_e.Services.Interfaces;
using pilgrimsvandringen_grupp_5_e.ViewModels;

namespace pilgrimsvandringen_grupp_5_e.Services
{
    public class PointOfInterestService : IPointOfinterestService
    {
        private readonly IPointOfInterestRepository _pointOfInterestRepository;

        public PointOfInterestService(IPointOfInterestRepository pointOfInterestRepository)
        {
            _pointOfInterestRepository = pointOfInterestRepository;
        }
        public async Task<PointOfInterestViewModel> GetPointOfInterest(int id)
        {
            var point = await _pointOfInterestRepository.GetPointOfInterestAsync(id);
            var vm = new PointOfInterestViewModel
            {
                Id = point.Id,
                Name = point.Name,
                Description = point.Description,
                Longitude = point.Longitude,
                Latitude = point.Latitude,
                Category = point.Category,
                TrailId = point.TrailId,
            };
            
            return vm;
        }

        public async Task<IEnumerable<PointOfInterestViewModel>> GetAllPointsOfInterests()
        {
            var points = await _pointOfInterestRepository.GetAllPointsOfInterestsAsync();
            List<PointOfInterestViewModel> pointOfInterestVms = new List<PointOfInterestViewModel>();
            foreach (var point in points)
            {
                var vm = new PointOfInterestViewModel
                {
                    Id = point.Id,
                    Name = point.Name,
                    Description = point.Description,
                    Longitude = point.Longitude,
                    Latitude = point.Latitude,
                    Category = point.Category,
                    TrailId = point.TrailId,
                };
                pointOfInterestVms.Add(vm);
                
            }
            return pointOfInterestVms;
        }

        public async Task<IEnumerable<PointOfInterestViewModel>> GetAllPointsOfInterestsById(int trailId)
        {
            var points = await _pointOfInterestRepository.GetAllPointsOfInterestsByIdAsync(trailId);
            List<PointOfInterestViewModel> pointOfInterestVms = new List<PointOfInterestViewModel>();
            foreach (var point in points)
            {
                var vm = new PointOfInterestViewModel
                {
                    Id = point.Id,
                    Name = point.Name,
                    Description = point.Description,
                    Longitude = point.Longitude,
                    Latitude = point.Latitude,
                    Category = point.Category,
                    TrailId = point.TrailId,
                };
                pointOfInterestVms.Add(vm);

            }
            return pointOfInterestVms;

        }
    }
}
