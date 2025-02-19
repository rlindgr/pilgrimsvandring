using pilgrimsvandringen_grupp_5_e.Models;
using pilgrimsvandringen_grupp_5_e.Repositories.Interfaces;
using pilgrimsvandringen_grupp_5_e.Services.Interfaces;
using System.Runtime.CompilerServices;

namespace pilgrimsvandringen_grupp_5_e.Services
{
    public class MessageService : IMessageService
    {
        private readonly IMessageRepository _messageRepository;
        public MessageService(IMessageRepository messageRepository) 
        { 
            _messageRepository = messageRepository;
        }

        public async Task<IEnumerable<Message>> GetAllMessagesAsync()
        {
            var result = await _messageRepository.GetMessagesAsync();
            return result;
        }

        //public async Task<Message> AddMessageAsync(Message message)
        //{
        //    var result = _messageRepository.PostMessageAsync(message);
            
        //}
    }
}
