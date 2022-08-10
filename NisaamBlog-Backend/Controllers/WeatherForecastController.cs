using Microsoft.AspNetCore.Mvc;
using NisaamBlog_Backend.Models;

namespace NisaamBlog_Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BlogController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<BlogController> _logger;

        public BlogController(ILogger<BlogController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetArticles")]
        public IEnumerable<Article> Get()
        {
            return Enumerable.Range(1, 20).Select(index => new Article
            {
                Date = DateTime.Now.AddDays(index),
                Author = Summaries[Random.Shared.Next(Summaries.Length)],
                Content = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}