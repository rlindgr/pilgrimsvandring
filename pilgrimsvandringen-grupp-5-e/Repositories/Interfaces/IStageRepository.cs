using pilgrimsvandringen_grupp_5_e.Models;

namespace pilgrimsvandringen_grupp_5_e.Repositories.Interfaces
{
    public interface IStageRepository
    {
        Task<Stage> GetStageAsync(int id);
        Task<IEnumerable<Stage>> GetAllStagesByIdAsync(int trailId);
        Task<IEnumerable<Stage>> GetAllStagesAsync();
    }
}
