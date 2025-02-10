namespace pilgrimsvandringen_grupp_5_e.Dto
{
    public class hourly
    {
        public IEnumerable<string> time { get; set; }
        public IEnumerable<double> temperature_2m { get; set; }
        public IEnumerable<int> precipitation_probability { get; set; }
        public IEnumerable<double> precipitation { get; set; }
        public IEnumerable<double> rain { get; set; }
        public IEnumerable<double> showers { get; set; }
        public IEnumerable<double> snowfall { get; set; }
        public IEnumerable<double> snow_depth { get; set; }
        public IEnumerable<double> visibility { get; set; }
        public IEnumerable<double> wind_speed_10m { get; set; }
        public IEnumerable<double> wind_direction_10m { get; set; }
        public IEnumerable<double> wind_gusts_10m { get; set; }


    }
}
