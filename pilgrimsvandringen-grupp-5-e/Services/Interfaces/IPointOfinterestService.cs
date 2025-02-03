using pilgrimsvandringen_grupp_5_e.Dto;

namespace pilgrimsvandringen_grupp_5_e.Services.Interfaces
{
    public interface IPointOfinterestService
    {
        Task<PointOfInterestDto> GetPointOfInterest(int id);
        Task<IEnumerable<PointOfInterestDto>> GetAllPointsOfInterests();

    }
}
