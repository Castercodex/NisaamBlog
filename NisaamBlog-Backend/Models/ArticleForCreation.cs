using NisaamBlog_Backend.Constants;

namespace NisaamBlog_Backend.Models
{
    public class ArticleForCreation
    {
        public string Title { get; set; } = string.Empty;
        public string Overview { get; set; } = string.Empty;
        public string Image { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string Author { get; set; } = string.Empty;
        public ArticleCategory Category { get; set; }
    }
}
