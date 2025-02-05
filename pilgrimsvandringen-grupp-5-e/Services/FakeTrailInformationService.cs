using pilgrimsvandringen_grupp_5_e.Services.Interfaces;
using pilgrimsvandringen_grupp_5_e.ViewModels;

namespace pilgrimsvandringen_grupp_5_e.Services
{
    public class FakeTrailInformationService : ITrailInformationService
    {

        public async Task<TrailsViewModel> GetTrailInformation(int id = 1)
        {
            var trailVm = new TrailsViewModel
            {
                Id = id,
                Name = "Kårböleleden",
                Description = "Jämt-Norgevägen börjar vid länsgränsen mellan Medelpad och Jämtland och sammanfaller här med S:t Olovsleden (stolavsleden.com), fram till Revsund där Jämt-Norgevägen viker av och vår guide till vandring börjar.\r\nUnder nedanstående flikar finns möjliga dagsetapper, men dessa kan förlängas eller kortas, allt efter önskemål. Att gå någon kilometer in på nästa dagsetapp eller avsluta lite tidigare än etappbeskrivningarna, kan, beroende på önskemål, underlätta övernattning, tillgång till livsmedel m.m.",
                StartPoint = "Revsund",
                EndPoint = "Högbro",
                Terrain = "Skog och berg",
                Difficulty = "lätt",
                Color = "blue",
                Length = 13.3,
                Height = 7.3,
                Surface = "hårt underlag",
            };

            return trailVm;
                
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
