using Microsoft.AspNetCore.Mvc;
using pilgrimsvandringen_grupp_5_e.Services.Interfaces;
using System.Runtime.CompilerServices;

namespace pilgrimsvandringen_grupp_5_e.Controllers
{
    public class MessagesController : Controller
    {
        private readonly IMessageService _messageService;

        public MessagesController(IMessageService messageService)
        {
            _messageService = messageService;
        }

        public async Task<IActionResult> Guestbook()
        { 
            var model = await _messageService.GetAllMessagesAsync();
            return View(model);
        }
    }
}
