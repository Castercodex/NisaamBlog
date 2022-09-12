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
            "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/flagged/photo-1555169222-4a1e428b26b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1480951904597-5387d1c232da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1657299143322-934f44698807?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "https://images.unsplash.com/photo-1657299142014-34b66b73e68e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
        };
        private string[] Titles { get; set; } = new string[]
        {
            "How to eat Amala",
            "Where to find the best Nigerian Akpu in Marrakesh",
            "Top 3 night clubs in Rabat you did not know about",
            "Where to find the best Tajine in Agadir",
            "Cheapest restaurants in Ifrane",
            "I went to Marina Agadir - My Experience"
        };

        public IEnumerable<Article> GenerateArticles(int count = 50)
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
                    City = "Morocco",
                    Image = GetRandomImage(),
                    Category = ArticleCategory.Lifestyle,
                    Title = GetRandomTitle(),
                    Id = i.ToString(),
                    Content = string.Empty,
                    Overview = string.Empty
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
