using Microsoft.AspNetCore.Mvc;
using pilgrimsvandringen_grupp_5_e.Services;

namespace pilgrimsvandringen_grupp_5_e.Controllers
{
    public class WeatherController : Controller
    {
        private readonly WeatherService _weatherService;

        public WeatherController(WeatherService weatherService)
        {
            _weatherService = weatherService;
        }

        // This metod is supposed to be used at the map, click and get position by string (obs), latitude and longitude
        public async Task<IActionResult> WeatherForeCastCurrentPosition(string latitude, string longitude)
        {
            var currentPosition = await _weatherService.GetWeatherByCoordinatesAsync(latitude, longitude);            

            return View("~/Views/Weather/WeatherForecastDetails.cshtml", currentPosition);
        }

        public async Task<IActionResult> WeatherForeCastDetailsGreen(string trailName)
        {
            var greenTrail = await _weatherService.GetWeatherTrailGreenAsync();

            return View("~/Views/Weather/WeatherForecastDetails.cshtml", greenTrail);
        }

        public async Task<IActionResult> WeatherForeCastDetailsYellow()
        {
            var yellowTrail = await _weatherService.GetWeatherTrailYellowAsync();

            return View("~/Views/Weather/WeatherForecastDetails.cshtml", yellowTrail);
        }

        public async Task<IActionResult> WeatherForeCastDetailsRed()
        {
            var redTrail = await _weatherService.GetWeatherTrailRedAsync();

            return View("~/Views/Weather/WeatherForecastDetails.cshtml", redTrail);
        }

        public async Task<IActionResult> WeatherForeCastDetailsBlue()
        {
            var blueTrail = await _weatherService.GetWeatherTrailBlueAsync();

            return View("~/Views/Weather/WeatherForecastDetails.cshtml", blueTrail);
        }

        public async Task<IActionResult> Weather()
        {
            var trailsForecast = await _weatherService.GetTrailsWeathersAsync();
            return View("~/Views/Weather/WeatherForecastSummary.cshtml", trailsForecast);
        }
    }
}
