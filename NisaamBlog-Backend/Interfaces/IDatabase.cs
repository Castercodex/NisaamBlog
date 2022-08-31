using NisaamBlog_Backend.Models;

namespace NisaamBlog_Backend.Interfaces
{
    public interface IDatabase
    {
        IEnumerable<Article> GetArticles();
        Article? GetArticle(string articleId);
        bool ArticleExist(string articleId);
        void CreateArticle(Article article);
        void DeleteArticle(string articleId);
        void UpdateArticle(string articleId, Article article);
        void ClearAllArticles();
    }
}