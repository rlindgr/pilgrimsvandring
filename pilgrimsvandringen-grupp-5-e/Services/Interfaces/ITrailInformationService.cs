using pilgrimsvandringen_grupp_5_e.ViewModels;

namespace pilgrimsvandringen_grupp_5_e.Services.Interfaces
{
    public interface ITrailInformationService
    {
        Task<TrailsViewModel> GetTrailInformation(int id);
        Task<IEnumerable<TrailsViewModel>> GetAllTrails();

    }
}
