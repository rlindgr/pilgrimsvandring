using Microsoft.EntityFrameworkCore;
using pilgrimsvandringen_grupp_5_e.Models;

namespace pilgrimsvandringen_grupp_5_e.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Trail> Trails { get; set; }
        public DbSet<Stage> Stages { get; set; }
        public DbSet<PointOfInterest> PointsOfInterests { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<MessageType> MessageTypes { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    }
}
