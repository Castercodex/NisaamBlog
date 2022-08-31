namespace NisaamBlog_Backend.Interfaces
{
    public interface IDatabase<Article>
    {
        public IQueryable<Article> GetArticles();
        public Article? GetArticle(int articleId);
        public void CreateArticle(Article article);
        public void DeleteArticle(int articleId);
        public void UpdateArticle(int articleId, Article article);
        public void ClearAllArticles();
    }
}