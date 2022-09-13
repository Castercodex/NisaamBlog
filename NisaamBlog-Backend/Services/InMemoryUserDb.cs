using NisaamBlog_Backend.Interfaces;
using NisaamBlog_Backend.Models;

namespace NisaamBlog_Backend.Services
{
    public class InMemoryUserDb : IDatabase<User>
    {
        public List<User> Users { get; set; } = new List<User>()
        {
            new User
            {
                Id = "0",
                City = "Agadir",
                Email = "sulaiman@nisaamblog.com",
                FirstName = "Sulaymahn",
                LastName = "Mukhtar",
                Password = "admin",
                Username = "Unghostdude"
            },
            new User
            {
                Id = "1",
                City = "Fez",
                Email = "edward@nisaamblog.com",
                FirstName = "Edward",
                LastName = "Berthjone",
                Password = "admin",
                Username = "Castercodex"
            }
        };

        public bool Exists(string userId)
        {
            User? user = Users.Find(x => x.Id == userId);
            if (user == null)
            {
                return false;
            }
            return true;
        }

        public void Clear() => Users.Clear();

        public void Create(User user)
        {
            if (Users.Find(x => x.Id == user.Id) == null)
            {
                Users.Add(user);
            }
        }

        public void Delete(string userId)
        {
            User? user = Users.Find(x => x.Id == userId);
            if (user != null)
            {
                Users.Remove(user);
            }
        }

        public User? Get(string userId) => Users.Find(x => x.Id == userId);

        public IEnumerable<User> Get() => Users;

        public void Update(string userId, User user)
        {
            User? articleToEdit = Users.Find(x => x.Id == userId);
            if (articleToEdit != null)
            {
                articleToEdit.Username = user.Username;
                articleToEdit.FirstName = user.FirstName;
                articleToEdit.LastName = user.LastName;
                articleToEdit.Email = user.Email;
                articleToEdit.City = user.City;
            }
        }

    }
}
