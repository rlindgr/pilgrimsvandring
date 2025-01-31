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
            var getPoint = await _pointOfInterestRepository.GetPointOfInterestAsync(id);
            var dto = new PointOfInterestDto
            {
                Name = getPoint.Name,
            };

            return dto;
         
            
        }
    }
}
