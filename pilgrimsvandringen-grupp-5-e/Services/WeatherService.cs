using Microsoft.EntityFrameworkCore.Query.Internal;
using pilgrimsvandringen_grupp_5_e.Dto;
using pilgrimsvandringen_grupp_5_e.ViewModels;
using System.Globalization;

namespace pilgrimsvandringen_grupp_5_e.Services
{
    public class WeatherService
    {
        private readonly ApiEngine _apiEngine;
        public WeatherService(ApiEngine apiEngine)
        {
            _apiEngine = apiEngine;
        }

        public async Task<WeatherForeCastDto> GetWeatherByCoordinatesAsync(string latitude, string longitude)
        {            
            var currentPositionWeather = await _apiEngine.GetAsync<WeatherForeCastDto>($"https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m");
            
            return currentPositionWeather;
        }

        public async Task<FireRiskViewModel> GetFireRiskForecastAsync(string latitude, string longitude)
        {
            try
            {
                var currentPositionFireRiskDto = await _apiEngine.GetAsync<FireRiskDto>($"https://api.msb.se/brandrisk/v2/CurrentRisk/sv/{latitude}/{longitude}");

                if (currentPositionFireRiskDto != null)
                {
                    FireRiskViewModel fireRiskViewModel = new FireRiskViewModel
                    {
                        Date = currentPositionFireRiskDto.FireRiskForecastDto.Date,
                        GrassMessage = currentPositionFireRiskDto.FireRiskForecastDto.GrassMessage,
                        RiskMessage = currentPositionFireRiskDto.FireRiskForecastDto.RiskMessage
                    };
                    return fireRiskViewModel;
                }

                return null;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
