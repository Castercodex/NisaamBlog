using Microsoft.AspNetCore.Mvc;
using NisaamBlog_Backend.Models;
using NisaamBlog_Backend.Services;
using NisaamBlog_Backend.Interfaces;

namespace NisaamBlog_Backend.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class ArticleController : ControllerBase
    {
        private readonly ILogger<ArticleController> _logger;
        private readonly IDatabase _database;
        private readonly UniqueIDGenerator _idGen;

        public ArticleController(ILogger<ArticleController> logger, IDatabase database, UniqueIDGenerator idGen)
        {
            _logger = logger ?? throw new ArgumentNullException();
            _database = database ?? throw new ArgumentNullException();
            _idGen = idGen ?? throw new ArgumentNullException();
        }

        [HttpGet]
        public IEnumerable<Article> Get()
        {
            return _database.GetArticles();
        }

        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            Article? article = _database.GetArticle(id);
            if (article == null)
            {
                return NotFound();
            }

            return Ok(article);
        }

        [HttpPost]
        public IActionResult Create(ArticleForCreation article)
        {
            string generatedId = _idGen.Generate();
            bool uIdalreadyexists = _database.ArticleExist(generatedId);
            if (uIdalreadyexists)
            {
                while (uIdalreadyexists)
                {
                    generatedId = _idGen.Generate();
                    uIdalreadyexists = _database.ArticleExist(generatedId);
                }
            }

            var articleToCreate = new Article
            {
                Id = generatedId,
                Title = article.Title,
                Author = article.Author,
                Category = article.Category,
                Content = article.Content,
                Country = article.Overview,
                Image = article.Image,
                Overview = article.Overview,
                LastUpdated = DateTime.UtcNow,
                Published = DateTime.UtcNow
            };

            _database.CreateArticle(articleToCreate);
            return Ok();
        }

        [HttpPut("{articleId}")]
        public IActionResult Edit(string articleId, ArticleForUpdate article)
        {
            Article? articleToEdit = _database.GetArticle(articleId);
            if(articleToEdit == null)
            {
                return NotFound();
            }

            articleToEdit.Title = article.Title;
            articleToEdit.Author = article.Author;
            articleToEdit.Category = article.Category;
            articleToEdit.Content = article.Content;
            articleToEdit.Overview = article.Overview;
            articleToEdit.Country = article.Country;
            articleToEdit.Image = article.Image;
            articleToEdit.LastUpdated = DateTime.UtcNow;

            return NoContent();
        }

        [HttpDelete("{articleId}")]
        public IActionResult Delete(string articleId)
        {
            _database.DeleteArticle(articleId);
            return NoContent();
        }
    }
}