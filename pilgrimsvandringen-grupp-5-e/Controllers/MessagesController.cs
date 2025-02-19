using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using pilgrimsvandringen_grupp_5_e.Models;
using pilgrimsvandringen_grupp_5_e.Services.Interfaces;
using System.Runtime.CompilerServices;
using System.Security.Claims;

namespace pilgrimsvandringen_grupp_5_e.Controllers
{
    public class MessagesController : Controller
    {
        private readonly IMessageService _messageService;
        private readonly UserManager<IdentityUser> _userManager;

        public MessagesController(IMessageService messageService, UserManager<IdentityUser> userManager)
        {
            _messageService = messageService;
            _userManager = userManager;
        }

        public async Task<IActionResult> Guestbook()
        {
            //var user = await _userManager.FindByNameAsync("GladaVandraren1");
            //ViewBag.User = user;
            var model = await _messageService.GetAllMessagesAsync();
            ViewBag.Message = model;
            return View(model);
        }

        public async Task<IActionResult> PostMessage(Message message)
        {
            var userId = HttpContext.Session.GetString("UserId");
            var userInt = int.Parse(userId);
            var user = await _messageService.GetUserByIdAsync(userInt);
            var model = _messageService.AddMessageAsync(message);
            return RedirectToAction("Guestbook");

        }
    }
}
