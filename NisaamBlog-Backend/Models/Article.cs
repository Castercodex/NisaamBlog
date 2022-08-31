using NisaamBlog_Backend.Constants;

namespace NisaamBlog_Backend.Models
{
    public class Article
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Overview { get; set; } = string.Empty;
        public string Image { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public string Country { get; set; } = string.Empty;
        public string Author { get; set; } = string.Empty;
        public ArticleCategory Category { get; set; }
        public DateTime Published { get; set; }
        public DateTime LastUpdated { get; set; }
    }
}