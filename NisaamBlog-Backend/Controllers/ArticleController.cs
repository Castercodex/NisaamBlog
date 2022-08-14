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
    [Route("/api/[controller]")]
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
            var articles = _dummydata.GetArticles(20);
            return articles;
        }
    }
}