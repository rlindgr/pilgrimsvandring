using Microsoft.EntityFrameworkCore;
using pilgrimsvandringen_grupp_5_e.Models;

namespace pilgrimsvandringen_grupp_5_e.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Trail> Trails { get; set; }
        public DbSet<Stage> Stages { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    }
}
