using Microsoft.EntityFrameworkCore.Query.Internal;
using pilgrimsvandringen_grupp_5_e.Dto;
using pilgrimsvandringen_grupp_5_e.ViewModels;

namespace pilgrimsvandringen_grupp_5_e.Services
{
    public class WeatherService
    {
        private readonly ApiEngine _apiEngine;
        public WeatherService(ApiEngine apiEngine)
        {
            _apiEngine = apiEngine;
        }

        public async Task<WeatherForeCastDto> GetWeather()
        {
            var forecast = await _apiEngine.GetAsync<WeatherForeCastDto>("https://api.open-meteo.com/v1/forecast?latitude=63.04&longitude=13.58&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m");


            return forecast;
        }

    }
}
