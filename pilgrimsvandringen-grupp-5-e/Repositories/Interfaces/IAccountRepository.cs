using pilgrimsvandringen_grupp_5_e.Models;

namespace pilgrimsvandringen_grupp_5_e.Repositories.Interfaces
{
    public interface IAccountRepository
    {
        Task<bool> RoleExistsAsync(string role);
        Task SeedRolesAsync(Role role);
        Task SetUserAsync(User user);
    }
}
