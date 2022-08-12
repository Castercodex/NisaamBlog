using Microsoft.AspNetCore.Mvc;
using NisaamBlog_Backend.Models;
using NewsAPI;
using NewsAPI.Constants;
using NewsAPI.Models;
using Article = NisaamBlog_Backend.Models.Article;
using NisaamBlog_Backend.Services;

namespace NisaamBlog_Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ArticleController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<ArticleController> _logger;
        private readonly DummyDataHandler _dummydata;

        public ArticleController(ILogger<ArticleController> logger, DummyDataHandler dummyDataHandler)
        {
            _logger = logger;
            _dummydata = dummyDataHandler;
        }

        [HttpGet(Name = "GetArticles")]
        public IEnumerable<Article> Get()
        {
            //var articles = new List<Article>();
            //HttpClient client = new HttpClient();

            //var response = client.GetAsync("https://newsapi.org/v2/everything?q=bitcoin&apiKey=9095ff899d0c478cb4ef87b515bedf1c").Result;
            //var articlesResponse = Newtonsoft.Json.JsonConvert.DeserializeObject<ArticlesResult>(response.Content.ReadAsStringAsync().Result);

            //if(articlesResponse.Status == Statuses.Ok)
            //{
            //    foreach (var article in articlesResponse.Articles)
            //    {
            //        articles.Add(new Article
            //        {
            //            Author = article.Author,
            //            Content = article.Content,
            //            Image = article.UrlToImage,
            //            Overview = article.Description,
            //            Title = article.Title
            //        });
            //    }
            //}
            //return articles;
            var articles = _dummydata.GetArticles(20);
            return articles;
        }
    }
}