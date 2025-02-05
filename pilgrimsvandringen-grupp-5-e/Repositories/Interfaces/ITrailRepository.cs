using pilgrimsvandringen_grupp_5_e.Models;

namespace pilgrimsvandringen_grupp_5_e.Repositories.Interfaces
{
    public interface ITrailRepository
    {

        Task<Trail> GetTrailAsync(int id);
        Task<IEnumerable<Trail>> GetAllTrailsAsync();
    }
}
