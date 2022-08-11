using NisaamBlog_Backend.Models;

namespace NisaamBlog_Backend.Services
{
    public class DummyDataHandler
    {
        private string[] Names { get; set; } = new string[]{
            "Sulaiman",
            "Suraj",
            "Salman",
            "John",
            "Trump",
            "Soje",
            "Yusuf",
            "Mahmud",
            "Musty",
            "Destiny",
            "Sofia",
            "Judith",
            "Edward",
            "Abdulqadir"
        };

        private string[] Titles { get; set; } = new string[]
        {

        };

        public IEnumerable<Article> GetArticles(int count = 50)
        {
            if(count <= 0) count = 1;
            IEnumerable<Article> articles = new List<Article>();
            for(int i = 0;  i < count; i++)
            {
            }
            return articles;
        }
    }
}
