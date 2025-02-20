using Microsoft.EntityFrameworkCore;
using pilgrimsvandringen_grupp_5_e.Data;
using pilgrimsvandringen_grupp_5_e.Models;
using pilgrimsvandringen_grupp_5_e.Repositories.Interfaces;
using System.Data;

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

        // TODO Find better place for method
        public async Task<User> GetUserByIdAsync(int id)
        {
            return await _context.Users.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task SeedMessageTypesAsync(MessageType messageType)
        {
            var result = await _context.MessageTypes.AddAsync(messageType);
            await _context.SaveChangesAsync();
        }

        public async Task<bool> MessageTypeExistsAsync(string typeName)
        {
            var result = await _context.MessageTypes.FirstOrDefaultAsync(x => x.Type == typeName);
            if (result != null)
            {
                return true;
            }
            return false;
        }
    }
}
