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
            try
            {
                var userId = HttpContext.Session.GetString("UserId");
                if(userId != null)
                {
                    var userInt = int.Parse(userId);
                    var user = await _messageService.GetUserByIdAsync(userInt);
                    ViewBag.User = user;
                }

                var model = await _messageService.GetAllMessagesAsync();
                ViewBag.Message = model;
                return View();
            }
            catch (Exception)
            {

                return NotFound("Det gick inte bra ");
            }
        }

        public async Task<IActionResult> PostMessage(Message message)
        {
            var userId = HttpContext.Session.GetString("UserId");
            var userInt = int.Parse(userId);
            var user = await _messageService.GetUserByIdAsync(userInt);
            message.DateTime = DateTime.Now;
            message.MessageTypeId = 1;
            message.User = user;
            await _messageService.AddMessageAsync(message);
            return RedirectToAction("Guestbook");

        }
    }
}
