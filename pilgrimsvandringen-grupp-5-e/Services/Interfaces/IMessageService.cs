using pilgrimsvandringen_grupp_5_e.Models;

namespace pilgrimsvandringen_grupp_5_e.Services.Interfaces
{
    public interface IMessageService
    {
        Task<IEnumerable<Message>> GetAllMessagesAsync();
    }
}
