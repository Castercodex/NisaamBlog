using NisaamBlog_Backend.Interfaces;
using NisaamBlog_Backend.Models;

namespace NisaamBlog_Backend.Services
{
    public class InMemoryDatabase : IDatabase
    {
        private DummyDataHandler dummydata { get; set; } = new DummyDataHandler();
        public List<Article> Articles { get; set; } = new List<Article>();

        public InMemoryDatabase()
        {
            Articles = dummydata.GenerateArticles().ToList();
        }

        public bool ArticleExist(string articleId)
        {
            Article? article = Articles.Find(x => x.Id == articleId);
            if(article == null)
            {
                return false;
            }
            return true;
        }

        public void ClearAllArticles() => Articles.Clear();

        public void CreateArticle(Article article)
        {
            //Check if an articles with same ID exists
            if(Articles.Find(x => x.Id == article.Id) == null)
            {
                //Add article if it does not exist
                Articles.Add(article);
            }
        }

        public void DeleteArticle(string articleId)
        {
            Article? articleToDelete = Articles.Find(x => x.Id == articleId);
            if(articleToDelete != null)
            {
                Articles.Remove(articleToDelete);
            }
        }

        public Article? GetArticle(string articleId) => Articles.Find(x => x.Id == articleId);

        public IEnumerable<Article> GetArticles() => Articles;

        public void UpdateArticle(string articleId, Article article)
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
                articleToEdit.Country = article.Country;
                articleToEdit.Image = article.Image;
                articleToEdit.Overview = article.Overview;
            }
        }

    }
}
