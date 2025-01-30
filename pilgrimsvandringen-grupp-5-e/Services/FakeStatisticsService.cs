namespace pilgrimsvandringen_grupp_5_e.Services
{
    public class FakeStatisticsService
    {
        public class Trail
        {
            public int Id { get; set; } = 1;
            public string Name { get; set; } = "Kårböleleden";
            public string Description { get; set; } = "fint här";
            public string StartPoint { get; set; } = "123e";
            public string EndPoint { get; set; } = "s1234";
            public string Terrain { get; set; } = "kuperat";
            public string Difficulty { get; set; } = "svår";
            public string Color { get; set; } = "svart";
            public double Length { get; set; } = 11.7;
            public double Height { get; set; } = 500;
            public string Surface { get; set; } = "stig";

        }
    }
}
