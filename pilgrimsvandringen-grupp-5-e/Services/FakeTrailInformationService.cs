using pilgrimsvandringen_grupp_5_e.Services.Interfaces;
using pilgrimsvandringen_grupp_5_e.ViewModels;

namespace pilgrimsvandringen_grupp_5_e.Services
{
    public class FakeTrailInformationService : ITrailInformationService
    {

        public TrailsViewModel GetTrailInformation()
        {
            return new TrailsViewModel
            {
                Id = 1,
                Name = "Jippi - det lyckades leden",
                Description = "Test",
                StartPoint = "12321e",

            };
                
        }
        
    }
}
