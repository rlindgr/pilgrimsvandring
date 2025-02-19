using Microsoft.EntityFrameworkCore;
using pilgrimsvandringen_grupp_5_e.Data;
using pilgrimsvandringen_grupp_5_e.Models;
using pilgrimsvandringen_grupp_5_e.Repositories.Interfaces;

namespace pilgrimsvandringen_grupp_5_e.Repositories
{
    public class MessageRepository : Repository<Message>, IMessageRepository
    {
        // Post, get and delete

        private readonly AppDbContext _context;

        public MessageRepository(AppDbContext context) : base(context)
        {
            _context = context;
        }
        //Get all messages
        public async Task<IEnumerable<Message>> GetMessagesAsync()
        {
            var messages = await _context.Messages.Include(message  => message.User).Include(message => message.MessageType).ToListAsync();
            return messages;
        }

        // Delete a message
        public void DeleteMessage(Message message)
        {
            try
            {
                Delete(message);
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        // Post a message
        public async Task PostMessageAsync(Message message)
        {
            try
            {
                var result = _context.Messages.Add(message);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex) 
            { 
                throw;
            }
            
        }

        public async Task<User> GetUserByIdAsync(int id)
        {
            return await _context.Users.FirstOrDefaultAsync(x => x.Id == id);
        }

    }
}
