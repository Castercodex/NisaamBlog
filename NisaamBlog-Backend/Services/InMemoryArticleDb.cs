using NisaamBlog_Backend.Interfaces;
using NisaamBlog_Backend.Models;

namespace NisaamBlog_Backend.Services
{
    public class InMemoryArticleDb : IDatabase<Article>
    {
        private DummyDataHandler dummydata { get; set; } = new DummyDataHandler();
        public List<Article> Articles { get; set; } = new List<Article>();

        public InMemoryArticleDb()
        {
            Articles = dummydata.GenerateArticles().ToList();
        }

        public bool Exists(string articleId)
        {
            Article? article = Articles.Find(x => x.Id == articleId);
            if(article == null)
            {
                return false;
            }
            return true;
        }

        public void Clear() => Articles.Clear();

        public void Create(Article article)
        {
            if(Articles.Find(x => x.Id == article.Id) == null)
            {
                Articles.Add(article);
            }
        }

        public void Delete(string articleId)
        {
            Article? article = Articles.Find(x => x.Id == articleId);
            if(article != null)
            {
                Articles.Remove(article);
            }
        }

        public Article? Get(string articleId) => Articles.Find(x => x.Id == articleId);

        public IEnumerable<Article> Get() => Articles;

        public void Update(string articleId, Article article)
        {
            Article? articleToEdit = Articles.Find(x => x.Id == articleId);
            if(articleToEdit != null)
            {
                articleToEdit.Title = article.Title;
                articleToEdit.Author = article.Author;
                articleToEdit.LastUpdated = article.LastUpdated;
                articleToEdit.Published = article.Published;
                articleToEdit.Category = article.Category;
                articleToEdit.Content = article.Content;
                articleToEdit.City = article.City;
                articleToEdit.Image = article.Image;
                articleToEdit.Overview = article.Overview;
            }
        }

    }
}
