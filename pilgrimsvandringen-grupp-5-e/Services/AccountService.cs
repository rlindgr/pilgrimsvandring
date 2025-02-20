using Microsoft.EntityFrameworkCore;
using pilgrimsvandringen_grupp_5_e.Models;
using pilgrimsvandringen_grupp_5_e.Repositories.Interfaces;
using pilgrimsvandringen_grupp_5_e.Services.Interfaces;

namespace pilgrimsvandringen_grupp_5_e.Services
{
    public class AccountService : IAccountService
    {
        private readonly IAccountRepository _accountRepository;
        public AccountService(IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }

        public async Task CreateUserAsync(User user)
        {
            await _accountRepository.SetUserAsync(user);
        }

        public async Task SeedRolesAsync(Role role)
        {
            await _accountRepository.SeedRolesAsync(role);
        }
        public async Task<bool> RoleExistsAsync(string role)
        {
            var result = await _accountRepository.RoleExistsAsync(role);
            if (result != null && result == true)
            {
                return true;
            }
            return false;
        }
    }
}
