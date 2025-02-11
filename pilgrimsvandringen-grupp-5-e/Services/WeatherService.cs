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
            // to use at map with the current position for user
            var currentPositionWeather = await _apiEngine.GetAsync<WeatherForeCastDto>($"https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m");
            
            return currentPositionWeather;
        }

        public async Task<IEnumerable<WeatherForeCastDto>> GetWeatherTrailGreenAsync()
        {
            // trailGreen is the color of Jämt-Norgeleden (color of trail at map)
            var trailGreenStart = await _apiEngine.GetAsync<WeatherForeCastDto>("https://api.open-meteo.com/v1/forecast?" +
                "latitude=62.90084274968503&longitude=15.126259213017127&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m");
            var trailGreenEnd = await _apiEngine.GetAsync<WeatherForeCastDto>("https://api.open-meteo.com/v1/forecast?" +
                "latitude=62.94349327790188&longitude=11.905467963898369&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m");

            List<WeatherForeCastDto> trailGreenWeather = new List<WeatherForeCastDto>();

            trailGreenWeather.Add(trailGreenStart);
            trailGreenWeather.Add(trailGreenEnd);

            return trailGreenWeather;
        }

        public async Task<IEnumerable<WeatherForeCastDto>> GetWeatherTrailYellowAsync()
        {
            // trailYellow is the color of Kårböleleden (color of trail at map)
            var trailYellowStart = await _apiEngine.GetAsync<WeatherForeCastDto>("https://api.open-meteo.com/v1/forecast?" +
                "latitude=61.98757680797816&longitude=15.299524999707291&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m");
            var trailYellowEnd = await _apiEngine.GetAsync<WeatherForeCastDto>("https://api.open-meteo.com/v1/forecast?" +
                "latitude=62.981662138456706&longitude=14.206991499916642&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m");

            List<WeatherForeCastDto> trailYellowWeather = new List<WeatherForeCastDto>();

            trailYellowWeather.Add(trailYellowStart);
            trailYellowWeather.Add(trailYellowEnd);

            return trailYellowWeather;
        }

        public async Task<IEnumerable<WeatherForeCastDto>> GetWeatherTrailRedAsync()
        {
            // trailRed is the color of St Olavsleden (color of trail at map)
            var trailRedStart = await _apiEngine.GetAsync<WeatherForeCastDto>("https://api.open-meteo.com/v1/forecast?" +
                "latitude=62.389528&longitude=17.293306&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m");
            var trailRedEnd = await _apiEngine.GetAsync<WeatherForeCastDto>("https://api.open-meteo.com/v1/forecast?" +
                "latitude=63.42718767910719&longitude=10.396909633388297&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m");

            List<WeatherForeCastDto> trailRedWeather = new List<WeatherForeCastDto>();

            trailRedWeather.Add(trailRedStart);
            trailRedWeather.Add(trailRedEnd);

            return trailRedWeather;
        }

        public async Task<IEnumerable<WeatherForeCastDto>> GetWeatherTrailBlueAsync()
        {
            // trailBlue is the color of Indalsleden (color of trail at map)
            var trailBlueStart = await _apiEngine.GetAsync<WeatherForeCastDto>("https://api.open-meteo.com/v1/forecast?" +
                "latitude=62.406648658273085&longitude=17.209719113365484&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m");
            var trailBlueEnd = await _apiEngine.GetAsync<WeatherForeCastDto>("https://api.open-meteo.com/v1/forecast?" +
                "latitude=63.31706607887326&longitude=14.845699046897213&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m");

            List<WeatherForeCastDto> trailBlueWeather = new List<WeatherForeCastDto>();

            trailBlueWeather.Add(trailBlueStart);
            trailBlueWeather.Add(trailBlueEnd);

            return trailBlueWeather;
        }


        public async Task<IEnumerable<WeatherForeCastDto>> GetTrailsWeathersAsync()
        {
            // trailGreen is the color of Jämt-Norgeleden (color of trail at map)
            var trailGreenStart = await _apiEngine.GetAsync<WeatherForeCastDto>("https://api.open-meteo.com/v1/forecast?" +
                "latitude=62.90084274968503&longitude=15.126259213017127&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m"); 
            var trailGreenEnd = await _apiEngine.GetAsync<WeatherForeCastDto>("https://api.open-meteo.com/v1/forecast?" +
                "latitude=62.94349327790188&longitude=11.905467963898369&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m");

            // trailYellow is the color of Kårböleleden (color of trail at map)
            var trailYellowStart = await _apiEngine.GetAsync<WeatherForeCastDto>("https://api.open-meteo.com/v1/forecast?" +
                "latitude=61.98757680797816&longitude=15.299524999707291&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m");
            var trailYellowEnd = await _apiEngine.GetAsync<WeatherForeCastDto>("https://api.open-meteo.com/v1/forecast?" +
                "latitude=62.981662138456706&longitude=14.206991499916642&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m");

            // trailRed is the color of St Olavsleden (color of trail at map)
            var trailRedStart = await _apiEngine.GetAsync<WeatherForeCastDto>("https://api.open-meteo.com/v1/forecast?" +
                "latitude=62.389528&longitude=17.293306&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m");
            var trailRedEnd = await _apiEngine.GetAsync<WeatherForeCastDto>("https://api.open-meteo.com/v1/forecast?" +
                "latitude=63.42718767910719&longitude=10.396909633388297&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m");

            // trailBlue is the color of Indalsleden (color of trail at map)
            var trailBlueStart = await _apiEngine.GetAsync<WeatherForeCastDto>("https://api.open-meteo.com/v1/forecast?" +
                "latitude=62.406648658273085&longitude=17.209719113365484&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m");
            var trailBlueEnd = await _apiEngine.GetAsync<WeatherForeCastDto>("https://api.open-meteo.com/v1/forecast?" +
                "latitude=63.31706607887326&longitude=14.845699046897213&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m");

            List<WeatherForeCastDto> trailsWeather = new List<WeatherForeCastDto>();

            trailsWeather.Add(trailGreenStart);
            trailsWeather.Add(trailGreenEnd);
            trailsWeather.Add(trailYellowStart);
            trailsWeather.Add(trailYellowEnd);
            trailsWeather.Add(trailRedStart);
            trailsWeather.Add(trailRedEnd);
            trailsWeather.Add(trailBlueStart);
            trailsWeather.Add(trailBlueEnd);

            return trailsWeather;
        }

    }
}
