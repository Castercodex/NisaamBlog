using System.Text;

namespace NisaamBlog_Backend.Services
{
    public class UniqueIDGenerator
    {
        const string POOL = "abcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        public string Generate()
        {
            var sb = new StringBuilder();
            var rnd = new Random();
            for(int i = 0; i < 11; i++)
            {
                sb.Append(POOL[rnd.Next(0, POOL.Length)]);
            }
            return sb.ToString();
        }
    }
}
