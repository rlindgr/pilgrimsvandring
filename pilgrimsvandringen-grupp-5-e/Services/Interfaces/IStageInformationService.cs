using pilgrimsvandringen_grupp_5_e.ViewModels;

namespace pilgrimsvandringen_grupp_5_e.Services.Interfaces
{
    public interface IStageInformationService
    {
        Task<StageViewModel> GetStageInformation(int id);
        Task<IEnumerable<StageViewModel>> GetAllStagesById(int trailId);
        Task<IEnumerable<StageViewModel>> GetAllStages();
    }
}
