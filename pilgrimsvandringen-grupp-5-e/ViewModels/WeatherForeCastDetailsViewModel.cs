using pilgrimsvandringen_grupp_5_e.Dto;

namespace pilgrimsvandringen_grupp_5_e.ViewModels
{
    public class WeatherForeCastDetailsViewModel
    {
        public TrailsViewModel TrailVM { get; set; }
        public WeatherForeCastDto WeatherStart { get; set; }
        public WeatherForeCastDto WeatherEnd { get; set; }

        public WeatherForeCastDetailsViewModel(TrailsViewModel trailsViewModel, WeatherForeCastDto weatherForeCastDtoStart, WeatherForeCastDto weatherForeCastDtoEnd)
        {
            TrailVM = trailsViewModel;
            WeatherStart = weatherForeCastDtoStart;
            WeatherEnd = weatherForeCastDtoEnd;
        }
    }
}
