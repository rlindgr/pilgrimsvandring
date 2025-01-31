using pilgrimsvandringen_grupp_5_e.Models;

namespace pilgrimsvandringen_grupp_5_e.Repositories.Interfaces
{
    public interface IPointOfInterestRepository
    {
        Task<PointOfInterest> GetPointOfInterestAsync(int id); 
    }
}
