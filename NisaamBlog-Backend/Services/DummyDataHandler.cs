using NisaamBlog_Backend.Constants;
using NisaamBlog_Backend.Models;
using System.Text;

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
        private string[] Images { get; set; } = new string[]{
            "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
            "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        };

        private string[] Titles { get; set; } = new string[]
        {
            "How to eat amala",
            "Where to find the best akpu in marrakesh",
            "Top 3 night clubs in rabat you did'nt know about",
            "Where to find the best tajine in Agadir",
            "Cheapest restaurants in ifrane",
            "I went to Marina Agadir - My Experience"
        };

        public IEnumerable<Article> GetArticles(int count = 50)
        {
            if(count <= 0) count = 1;
            List<Article> articles = new List<Article>();
            for(int i = 0;  i < count; i++)
            {
                articles.Add(new Article
                {
                    Author = GetRandomName(),
                    LastUpdated = DateTime.Now,
                    Published = DateTime.Now,
                    Country = "Morocco",
                    Image = GetRandomImage(),
                    Category = ArticleCategory.Lifestyle,
                    Title = GetRandomTitle()
                });
            }
            return articles;
        }

        private string GetRandomName()
        {
            var rnd = new Random();
            return Names[rnd.Next(Names.Length)] + " " + Names[rnd.Next(Names.Length)];
        }
        private string GetRandomImage()
        {
            var rnd = new Random();
            return Images[rnd.Next(Images.Length)];
        }
        private string GetRandomTitle()
        {
            var rnd = new Random();
            return Titles[rnd.Next(Titles.Length)];
        }
    }
}
