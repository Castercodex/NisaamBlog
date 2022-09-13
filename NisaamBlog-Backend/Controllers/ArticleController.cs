using Microsoft.AspNetCore.Mvc;
using NisaamBlog_Backend.Models;
using NisaamBlog_Backend.Services;
using NisaamBlog_Backend.Interfaces;
using Microsoft.AspNetCore.Authorization;

namespace NisaamBlog_Backend.Controllers
{
    [ApiController]
    [Authorize]
    [Route("/api/articles")]
    public class ArticleController : ControllerBase
    {
        private readonly ILogger<ArticleController> _logger;
        private readonly IDatabase<Article> _database;
        private readonly UniqueIDGenerator _idGen;

        public ArticleController(ILogger<ArticleController> logger, IDatabase<Article> database, UniqueIDGenerator idGen)
        {
            _logger = logger ?? throw new ArgumentNullException();
            _database = database ?? throw new ArgumentNullException();
            _idGen = idGen ?? throw new ArgumentNullException();

            _logger.LogInformation("Started the article controller");
        }

        [HttpGet]
        public IEnumerable<Article> GetAll()
        {
            return _database.Get();
        }

        [HttpGet, Route("{id}")]
        public IActionResult Get(string id)
        {
            Article? article = _database.Get(id);
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
            bool uIdalreadyexists = _database.Exists(generatedId);
            if (uIdalreadyexists)
            {
                while (uIdalreadyexists)
                {
                    generatedId = _idGen.Generate();
                    uIdalreadyexists = _database.Exists(generatedId);
                }
            }

            var articleToCreate = new Article
            {
                Id = generatedId,
                Title = article.Title,
                Author = article.Author,
                Category = article.Category,
                Content = article.Content,
                City = article.Overview,
                Image = article.Image,
                Overview = article.Overview,
                LastUpdated = DateTime.UtcNow,
                Published = DateTime.UtcNow
            };

            _database.Create(articleToCreate);
            return Ok();
        }

        [HttpPut, Route("{articleId}")]
        public IActionResult Edit(string articleId, ArticleForUpdate article)
        {
            Article? articleToEdit = _database.Get(articleId);
            if(articleToEdit == null)
            {
                return NotFound();
            }

            articleToEdit.Title = article.Title;
            articleToEdit.Author = article.Author;
            articleToEdit.Category = article.Category;
            articleToEdit.Content = article.Content;
            articleToEdit.Overview = article.Overview;
            articleToEdit.City = article.City;
            articleToEdit.Image = article.Image;
            articleToEdit.LastUpdated = DateTime.UtcNow;

            return NoContent();
        }

        [HttpDelete, Route("{articleId}")]
        public IActionResult Delete(string articleId)
        {
            _database.Delete(articleId);
            return NoContent();
        }
    }
}