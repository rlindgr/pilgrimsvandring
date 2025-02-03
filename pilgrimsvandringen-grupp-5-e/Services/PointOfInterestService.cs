using pilgrimsvandringen_grupp_5_e.Dto;
using pilgrimsvandringen_grupp_5_e.Repositories.Interfaces;
using pilgrimsvandringen_grupp_5_e.Services.Interfaces;

namespace pilgrimsvandringen_grupp_5_e.Services
{
    public class PointOfInterestService : IPointOfinterestService
    {
        private readonly IPointOfInterestRepository _pointOfInterestRepository;

        public PointOfInterestService(IPointOfInterestRepository pointOfInterestRepository)
        {
            _pointOfInterestRepository = pointOfInterestRepository;
        }
        public async Task<PointOfInterestDto> GetPointOfInterest(int id)
        {
            var point = await _pointOfInterestRepository.GetPointOfInterestAsync(id);
            var dto = new PointOfInterestDto
            {
                Id = point.Id,
                Name = point.Name,
                Description = point.Description,
                Longitude = point.Longitude,
                Latitude = point.Latitude,
                Category = point.Category,
            };
            
            return dto;
        }
        public async Task<IEnumerable<PointOfInterestDto>> GetAllPointsOfInterests()
        {
            var points = await _pointOfInterestRepository.GetAllPointsOfInterestsAsync();
            List<PointOfInterestDto> pointOfInterestDtos = new List<PointOfInterestDto>();
            foreach (var point in points)
            {
                var dto = new PointOfInterestDto
                {
                    Id = point.Id,
                    Name = point.Name,
                    Description = point.Description,
                    Longitude = point.Longitude,
                    Latitude = point.Latitude,
                    Category = point.Category
                };
                pointOfInterestDtos.Add(dto);
                
            }
            return pointOfInterestDtos;
        }
    }
}
