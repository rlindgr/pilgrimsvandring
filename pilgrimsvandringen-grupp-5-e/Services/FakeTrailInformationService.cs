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
                Name = "Kårböleleden",
                Description = "Fin led i Jämtland",
                StartPoint = "Revsund",
                EndPoint = "Högbro",
                Terrain = "Skog och berg",
                Difficulty = "lätt",
                Color = "blå",
                Length = 13.3,
                Height = 7.3,
                Surface = "hårt underlag",

            };
                
        }

        public async Task<IEnumerable<TrailsViewModel>> GetAllTrails()
        {
            List<TrailsViewModel> list = new List<TrailsViewModel>();
            var trail1 = new TrailsViewModel
            {
                Id = 1,
                Name = "Kårböleleden"
            };
            var trail2 = new TrailsViewModel
            {
                Id = 2,
                Name = "Led2"
            };

            list.Add(trail1);
            list.Add(trail2);

            return list;

        }

    }
}
