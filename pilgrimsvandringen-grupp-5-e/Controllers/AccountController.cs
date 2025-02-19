using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pilgrimsvandringen_grupp_5_e.Data;
using pilgrimsvandringen_grupp_5_e.Models;
using pilgrimsvandringen_grupp_5_e.Repositories;
using pilgrimsvandringen_grupp_5_e.ViewModels;
using System.Security.Claims;
using static System.Net.Mime.MediaTypeNames;

namespace pilgrimsvandringen_grupp_5_e.Controllers
{
    public class AccountController : Controller
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly AppDbContext _context;

        public AccountController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager, AppDbContext appDbContext)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _context = appDbContext;
        }      
        

        public async Task<User> GetUserByGuid(string guid)
        {
            //var test = await _context.Users.ToListAsync();
            return await _context.Users.FirstOrDefaultAsync(x => x.IdentityUserId == guid);
        }

        public IActionResult Login() => View();

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginViewModel loginViewModel)
        {
            if (!ModelState.IsValid) return View(loginViewModel);

            var result = await _signInManager.PasswordSignInAsync(loginViewModel.UserName, loginViewModel.Password, loginViewModel.RememberMe, false);

            if (result.Succeeded)
            {
                var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
                var user = await GetUserByGuid(userId);
                HttpContext.Session.SetString("UserId", user.Id.ToString());
                return RedirectToAction("Index", "Account");
            }

            ModelState.AddModelError("", "Felaktig inloggning");
            return View(loginViewModel);
        }

        public IActionResult Register() => View();

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(RegisterViewModel registerViewModel)
        {
            if (!ModelState.IsValid) return View(registerViewModel);

            var user = new IdentityUser { UserName = registerViewModel.UserName, Email = registerViewModel.Email };
            var result = await _userManager.CreateAsync(user, registerViewModel.Password);

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, false);
                return RedirectToAction("Index", "Account");
            }

            foreach (var error in result.Errors)
            {
                ModelState.AddModelError("", error.Description);
            }
            return View(registerViewModel);
        }

        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }

        [Authorize]
        public IActionResult Index(LoginViewModel loginViewModel)
        {
            return View(loginViewModel);
        }

        // TODO Create a view for AccessDenied
        public IActionResult AccessDenied() => View();
    }


}
